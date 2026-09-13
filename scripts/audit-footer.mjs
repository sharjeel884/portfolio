import { chromium } from "playwright-core";

const URL = process.env.AUDIT_URL ?? "http://localhost:3001/";
const VIEWPORTS = [390, 768, 1280, 1920];

const browser = await chromium.launch({ channel: "chrome" });

for (const width of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(URL, { waitUntil: "networkidle" });

  const { offset, numeralPx, headingPx, numeralColor } = await page.evaluate(() => {
    const footerText = document.querySelector("footer p");
    const r = footerText.getBoundingClientRect();
    const centre = (r.left + r.right) / 2;

    const num = document.querySelector("#contact .section-num");
    const heading = document.querySelector("#contact h2");

    return {
      offset: Math.round(centre - window.innerWidth / 2),
      numeralPx: Math.round(parseFloat(getComputedStyle(num).fontSize)),
      headingPx: Math.round(parseFloat(getComputedStyle(heading).fontSize)),
      numeralColor: getComputedStyle(num).color,
    };
  });

  const centred = Math.abs(offset) <= 2;
  const matched = numeralPx === headingPx;
  console.log(
    `${width}px  footer ${centred ? "centred" : `OFF by ${offset}px`}  |  numeral ${numeralPx}px vs heading ${headingPx}px ${matched ? "match" : "MISMATCH"}  |  ${numeralColor}`
  );
  await page.close();
}

await browser.close();
