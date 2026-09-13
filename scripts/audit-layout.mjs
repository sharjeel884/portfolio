import { chromium } from "playwright-core";

const URL = process.env.AUDIT_URL ?? "http://localhost:3001/";
const VIEWPORTS = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1280", width: 1280, height: 800 },
  { name: "desktop-1920", width: 1920, height: 1080 },
];

const browser = await chromium.launch({ channel: "chrome" });

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: "networkidle" });

  // Reveal every entrance animation so screenshots show settled content
  await page.addStyleTag({
    content: `.chroma,.fade-up,.mask-line>*{opacity:1!important;transform:none!important;filter:none!important;text-shadow:none!important;animation:none!important}`,
  });

  const report = await page.evaluate((viewportWidth) => {
    const docWidth = document.documentElement.scrollWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      if (r.right > viewportWidth + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className?.baseVal ?? el.className ?? "")
            .toString()
            .slice(0, 70),
          left: Math.round(r.left),
          right: Math.round(r.right),
        });
      }
    }
    return { docWidth, offenders: offenders.slice(0, 8) };
  }, vp.width);

  console.log(`\n── ${vp.name} ─────────────────────────`);
  console.log(`scrollWidth: ${report.docWidth} (viewport ${vp.width})`);
  if (report.offenders.length === 0) {
    console.log("no horizontal overflow");
  } else {
    for (const o of report.offenders) {
      console.log(`  OVERFLOW ${o.tag}.${o.cls} [${o.left} → ${o.right}]`);
    }
  }

  await page.screenshot({
    path: `/tmp/shots/${vp.name}.png`,
    fullPage: true,
  });
  await page.close();
}

await browser.close();
