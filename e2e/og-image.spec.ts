import { test } from "@playwright/test";
import { CONTENT } from "../src/api/profile/es";

// Renders public/og.png, the image shown when the site is shared, from the approved copy.
// The card reuses the site's fonts and tokens: it loads the page and swaps its body.

test.skip(!process.env.OG_IMAGE, "set OG_IMAGE=1 to render public/og.png");

const { profile } = CONTENT;

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const initials = profile.name
  .split(" ")
  .map((word) => word[0])
  .join("");

const CARD = `
<style>
  .og { position: relative; isolation: isolate; width: 1200px; height: 630px; box-sizing: border-box;
    padding: 56px 64px; display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 0 48px;
    background: var(--ground); color: var(--ink); font-family: var(--display); overflow: hidden; }
  .og::before { content: ""; position: absolute; inset: 0; z-index: -1; background-color: var(--hexLine);
    mask-image: url("/hexgrid.svg"); mask-size: 72px 41.569px; }
  .og__frame { position: absolute; inset: 24px; border: 1.5px solid var(--ink); pointer-events: none; }
  .og__text { display: flex; flex-direction: column; gap: 26px; }
  .og__identity { display: flex; flex-direction: column; gap: 10px; }
  .og__name { margin: 0; font-stretch: 125%; font-weight: 800; font-size: 34px; letter-spacing: -0.02em;
    text-transform: uppercase; }
  .og__dot { color: var(--accentText); }
  .og__role { margin: 0; font-family: var(--mono); font-size: 16px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--muted); }
  .og__rule { height: 1.5px; background: var(--ink); }
  .og__headline { margin: 0; font-stretch: 112%; font-weight: 800; font-size: 48px; line-height: 1.04;
    letter-spacing: -0.03em; text-wrap: balance; }
  .og__highlight { color: var(--hlColor); background: var(--hlBg); box-decoration-break: clone; }
  .og__site { margin-top: auto; font-family: var(--mono); font-size: 16px; letter-spacing: 0.08em;
    color: var(--muted); }
  .og__figure { align-self: center; width: 330px; height: auto; overflow: visible; }
  .og__figure .o { fill: var(--ground); stroke: var(--ink); stroke-width: 2; }
  .og__figure .m { fill: var(--panel); stroke: var(--ink); stroke-width: 2; }
  .og__figure .links { stroke: var(--ink); stroke-width: 1.5; stroke-dasharray: 4 4; }
  .og__figure .adapters { fill: var(--ground); stroke: var(--ink); stroke-width: 1.5; }
  .og__figure .core { fill: var(--accent); stroke: var(--accentEdge); stroke-width: 2; }
  .og__figure .ports { fill: var(--ink); }
  .og__figure .initials { fill: var(--onAccent); font-family: var(--display); font-stretch: 125%;
    font-weight: 800; font-size: 34px; letter-spacing: -0.02em; }
</style>
<div class="og">
  <div class="og__frame"></div>
  <div class="og__text">
    <div class="og__identity">
      <p class="og__name">${escapeHtml(profile.name)}<span class="og__dot">.</span></p>
      <p class="og__role">${escapeHtml(profile.role)}</p>
    </div>
    <div class="og__rule"></div>
    <p class="og__headline">${escapeHtml(profile.headline.lead)}<span class="og__highlight">${escapeHtml(profile.headline.highlight)}</span></p>
    <p class="og__site">portfolio.agranadosb.com</p>
  </div>
  <svg class="og__figure" viewBox="0 0 400 346">
    <polygon class="o" points="101,1.5 299,1.5 398,173 299,344.5 101,344.5 2,173" />
    <polygon class="m" points="132.7,56.4 267.3,56.4 334.6,173 267.3,289.6 132.7,289.6 65.4,173" />
    <g class="links">
      <line x1="200" y1="111" x2="200" y2="40" /><line x1="253" y1="142" x2="314" y2="107" />
      <line x1="253" y1="204" x2="314" y2="239" /><line x1="200" y1="235" x2="200" y2="306" />
      <line x1="147" y1="204" x2="86" y2="239" /><line x1="147" y1="142" x2="86" y2="107" />
    </g>
    <g class="adapters">
      <rect x="186" y="28" width="28" height="11" /><rect x="306" y="95" width="28" height="11" />
      <rect x="306" y="240" width="28" height="11" /><rect x="186" y="307" width="28" height="11" />
      <rect x="66" y="240" width="28" height="11" /><rect x="66" y="95" width="28" height="11" />
    </g>
    <polygon class="core" points="164.4,111.3 235.6,111.3 271.3,173 235.6,234.7 164.4,234.7 128.7,173" />
    <g class="ports">
      <rect x="196" y="107" width="8" height="8" /><rect x="249" y="138" width="8" height="8" />
      <rect x="249" y="200" width="8" height="8" /><rect x="196" y="231" width="8" height="8" />
      <rect x="143" y="200" width="8" height="8" /><rect x="143" y="138" width="8" height="8" />
    </g>
    <text x="200" y="185" text-anchor="middle" class="initials">${escapeHtml(initials)}</text>
  </svg>
</div>`;

test.use({ viewport: { width: 1200, height: 630 }, colorScheme: "dark" });

test("render the Open Graph image", async ({ page }) => {
  await page.route("**/assets/**/*.js", (route) => route.abort());
  await page.goto("/");

  await page.evaluate(async (card) => {
    document.documentElement.dataset.theme = "dark";
    document.body.innerHTML = card;
    document.body.getBoundingClientRect();
    await document.fonts.ready;
  }, CARD);

  await page.screenshot({ path: "public/og.png" });
});
