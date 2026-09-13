import { chromium } from "playwright-core";

const URL = process.env.AUDIT_URL ?? "http://localhost:3001/";

// Representative text elements, paired with the token they should be using
const SAMPLES = [
  ["h1", "hero name"],
  [".t-lead", "role lead"],
  ["#about .t-body", "body copy"],
  ["#about .t-body-dim", "secondary copy"],
  [".t-list", "skill item"],
  ["#experience h3", "company name"],
  ["#experience .t-meta", "meta label"],
  [".t-link", "contact link"],
  ["footer .t-meta", "footer"],
];

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle" });
await page.addStyleTag({
  content: `.chroma,.fade-up,.mask-line>*{opacity:1!important;animation:none!important}`,
});

const results = await page.evaluate((samples) => {
  const parse = (str) => str.match(/[\d.]+/g).map(Number);

  // Flatten a translucent foreground onto the page background
  const composite = (fg, bg) => {
    const a = fg[3] ?? 1;
    return [0, 1, 2].map((i) => fg[i] * a + bg[i] * (1 - a));
  };

  const luminance = ([r, g, b]) => {
    const lin = [r, g, b].map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
  };

  const bg = parse(getComputedStyle(document.body).backgroundColor);

  return samples.map(([selector, name]) => {
    const el = document.querySelector(selector);
    if (!el) return { name, missing: true };
    const cs = getComputedStyle(el);
    const fg = composite(parse(cs.color), bg);
    const L1 = luminance(fg);
    const L2 = luminance(bg);
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const px = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    // WCAG: 18.66px bold or 24px normal counts as large text
    const large = px >= 24 || (bold && px >= 18.66);
    return {
      name,
      px: Math.round(px * 10) / 10,
      ratio: Math.round(ratio * 100) / 100,
      required: large ? 3 : 4.5,
    };
  });
}, SAMPLES);

let fails = 0;
for (const r of results) {
  if (r.missing) {
    console.log(`  ??  ${r.name}: not found`);
    continue;
  }
  const ok = r.ratio >= r.required;
  if (!ok) fails++;
  console.log(
    `  ${ok ? "AA " : "!! "} ${r.name.padEnd(16)} ${String(r.px).padStart(5)}px  ${String(r.ratio).padStart(6)}:1  (needs ${r.required})`
  );
}

await browser.close();
console.log(fails === 0 ? "\nall text meets WCAG AA" : `\n${fails} below AA`);
