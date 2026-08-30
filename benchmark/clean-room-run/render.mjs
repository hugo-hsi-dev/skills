import { chromium } from "/Users/hugo-hsi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import { pathToFileURL } from "node:url";

const root = "/Users/hugo-hsi/Projects/skills/benchmark/clean-room-run";
const executablePath = "/Users/hugo-hsi/.cache/puppeteer/chrome-headless-shell/mac_arm-151.0.7922.47/chrome-headless-shell-mac-arm64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath, headless: true });
const results = [];

const variants = [
  { name: "c", file: `${root}/silt-c/index.html` },
  { name: "d", file: `${root}/silt-d/index.html` },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

for (const variant of variants) {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      isMobile: viewport.isMobile,
      hasTouch: viewport.isMobile,
      colorScheme: "light",
      reducedMotion: "no-preference",
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(String(error)));
    page.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto(pathToFileURL(variant.file).href, { waitUntil: "load" });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: `${root}/screenshots/${variant.name}-${viewport.name}.png`,
      fullPage: false,
      animations: "disabled",
    });

    await page.evaluate(async () => {
      const step = Math.max(320, Math.floor(window.innerHeight * 0.75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `${root}/screenshots/${variant.name}-${viewport.name}-full.png`,
      fullPage: true,
      animations: "disabled",
    });

    results.push({
      variant: variant.name,
      viewport: viewport.name,
      title: await page.title(),
      scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth),
      clientWidth: await page.evaluate(() => document.documentElement.clientWidth),
      scrollHeight: await page.evaluate(() => document.documentElement.scrollHeight),
      errors,
    });
    await context.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
