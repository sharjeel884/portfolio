import { chromium } from "playwright-core";

const URL = process.env.AUDIT_URL ?? "http://localhost:3005/";
const VIEWPORTS = [
  { name: "m", width: 390, height: 844 },
  { name: "d", width: 1440, height: 900 },
];
const SECTIONS = ["about", "skills", "experience", "projects", "contact"];

const browser = await chromium.launch({ channel: "chrome" });

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.addStyleTag({
    content: `.chroma,.fade-up,.mask-line>*{opacity:1!important;transform:none!important;filter:none!important;text-shadow:none!important;animation:none!important}`,
  });

  for (const id of SECTIONS) {
    await page
      .locator(`#${id}`)
      .screenshot({ path: `/tmp/shots/${vp.name}-${id}.png` });
  }
  await page.close();
}

await browser.close();
console.log("captured");
