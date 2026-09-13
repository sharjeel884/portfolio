import { chromium } from "playwright-core";

const URL = process.env.AUDIT_URL ?? "http://localhost:3001/";
const SECTIONS = ["about", "skills", "experience", "projects", "contact"];

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle" });

// The spy is a client effect, so it only exists once React hydrates. Without
// this the first assertions race the bundle and report a stale active item.
await page.waitForSelector("nav[aria-label='Section navigation'] button");
await page.waitForFunction(() => {
  const el = document.getElementById("contact");
  if (!el) return false;
  window.scrollTo(0, el.offsetTop);
  const active = document.querySelector(
    "nav[aria-label='Section navigation'] [aria-current='true']"
  );
  return active?.textContent?.includes("CONTACT");
});
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);

const activeLabel = () =>
  page.$eval("nav[aria-label='Section navigation'] [aria-current='true']", (el) =>
    el.textContent.replace(/\s+/g, " ").trim()
  ).catch(() => "(none)");

let pass = true;
for (const id of SECTIONS) {
  await page.evaluate((sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "instant" });
  }, id);
  await page.waitForTimeout(400);

  const label = await activeLabel();
  const expected = { about: "ABOUT", skills: "SKILLS", experience: "EXP", projects: "PROJECTS", contact: "CONTACT" }[id];
  const ok = label.includes(expected);
  if (!ok) pass = false;
  console.log(`${ok ? "PASS" : "FAIL"}  scrolled to #${id} → nav active: "${label}"`);
}

// Incremental scroll: mirrors real wheel scrolling rather than anchor jumps
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);

const total = await page.evaluate(() => document.body.scrollHeight);
const transitions = [];
let last = null;
for (let y = 0; y < total; y += 200) {
  await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(60);
  const label = await activeLabel();
  if (label !== last) {
    transitions.push(`${y}px → ${label}`);
    last = label;
  }
}

console.log("\nactive item while scrolling:");
for (const t of transitions) console.log(`  ${t}`);

const order = transitions.map((t) => t.split("→ ")[1]);
const expectedOrder = [
  "00ABOUT",
  "01SKILLS",
  "02EXP",
  "03PROJECTS",
  "04CONTACT",
];
const monotonic = JSON.stringify(order) === JSON.stringify(expectedOrder);
if (!monotonic) pass = false;
console.log(monotonic ? "order correct, no flicker" : "UNEXPECTED order/flicker");

await browser.close();
console.log(pass ? "\nscroll spy OK" : "\nscroll spy BROKEN");
process.exit(pass ? 0 : 1);
