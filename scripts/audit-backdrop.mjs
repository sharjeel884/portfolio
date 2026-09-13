import { chromium } from "playwright-core";

const URL = process.env.AUDIT_URL ?? "http://localhost:3001/";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle" });

const report = await page.evaluate(async () => {
  const img = new Image();
  img.src = "/background-texture.webp";
  await img.decode();

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0);
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const srgb = (v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const lum = (r, g, b) =>
    0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);

  // Mirrors the overlay in globals.css: #0a0a0a ramping top → bottom
  const ALPHA_TOP = 0.76;
  const ALPHA_BOTTOM = 0.88;
  const BASE = 10;
  let max = 0;
  let sum = 0;
  let count = 0;
  let brightest = null;

  for (let y = 0; y < canvas.height; y++) {
    const alpha = ALPHA_TOP + (ALPHA_BOTTOM - ALPHA_TOP) * (y / canvas.height);
    for (let x = 0; x < canvas.width; x++) {
      const i = (y * canvas.width + x) * 4;
      const composite = [0, 1, 2].map(
        (k) => data[i + k] * (1 - alpha) + BASE * alpha
      );
      const L = lum(...composite);
      sum += L;
      count++;
      if (L > max) {
        max = L;
        brightest = composite.map(Math.round);
      }
    }
  }

  // Worst-case: dimmest text tint over the brightest patch of backdrop
  const tints = { "--ink-4 (meta)": 0.52, "--ink-3 (secondary)": 0.52 };
  const INK = 242;
  const contrastFor = (alpha, bgLum, bgRGB) => {
    const fg = bgRGB.map((c) => INK * alpha + c * (1 - alpha));
    const L = lum(...fg);
    return (Math.max(L, bgLum) + 0.05) / (Math.min(L, bgLum) + 0.05);
  };

  return {
    meanLum: sum / count,
    maxLum: max,
    brightest,
    worstMeta: contrastFor(0.52, max, brightest),
  };
});

console.log(`mean backdrop luminance : ${report.meanLum.toFixed(4)}`);
console.log(`brightest patch         : rgb(${report.brightest.join(", ")})  L=${report.maxLum.toFixed(4)}`);
console.log(`12px meta text there    : ${report.worstMeta.toFixed(2)}:1 (needs 4.5)`);
console.log(report.worstMeta >= 4.5 ? "worst case still AA" : "WORST CASE BELOW AA");

await browser.close();
