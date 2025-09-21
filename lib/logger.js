const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

function safeFilenameFromUrl(url) {
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const clean = url.replace(/[:\/?#&=]+/g, '_').slice(0, 150);
  return `${ts}_${clean}`;
}

async function startLogger(options) {
  const outDir = path.resolve(process.cwd(), options.output);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let filterRegex;
  try {
    filterRegex = new RegExp(options.filter, "i");
  } catch {
    console.error("❌ Invalid regex. Falling back to /api/.");
    filterRegex = /api/i;
  }

  const browser = await chromium.launch({ headless: options.headless });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('response', async (response) => {
    const url = response.url();
    if (filterRegex.test(url)) {
      const ct = response.headers()['content-type'] || '';
      const filename = safeFilenameFromUrl(url) + (ct.includes('json') ? '.json' : '.bin');
      const filepath = path.join(outDir, filename);

      try {
        if (ct.includes('json')) {
          const data = await response.json();
          fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
        } else {
          const buffer = await response.body();
          fs.writeFileSync(filepath, buffer);
        }
        console.log("✅ [saved]", url, "→", path.basename(filepath));
      } catch {
        console.log("⚠️ Failed to save response:", url);
      }
    }
  });

  let targetUrl = options.url;
if (!/^https?:\/\//i.test(targetUrl)) {
  targetUrl = "https://" + targetUrl;
}

await page.goto(targetUrl, { waitUntil: 'networkidle' });
  console.log("🚀 Listening for API calls...");

  if (parseInt(options.timeout) > 0) {
    setTimeout(async () => {
      console.log("⏰ Timeout reached. Closing browser.");
      await browser.close();
    }, parseInt(options.timeout));
  }
}

module.exports = { startLogger };
