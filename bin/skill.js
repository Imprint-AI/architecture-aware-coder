#!/usr/bin/env node
'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const SKILL_FILENAME = 'architecture-aware-coder.skill';
const DOWNLOAD_URL =
  'https://github.com/Imprint-AI/architecture-aware-coder/releases/latest/download/' +
  SKILL_FILENAME;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        // Follow redirects (GitHub releases uses them)
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlink(dest, () => {});
          return resolve(download(res.headers.location, dest));
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode} — ${url}`));
        }
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(dest)));
      })
      .on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

(async () => {
  const out = path.resolve(process.cwd(), SKILL_FILENAME);

  process.stdout.write(`Downloading ${SKILL_FILENAME} ... `);
  try {
    await download(DOWNLOAD_URL, out);
    console.log(`✅ Saved to: ${out}`);
  } catch (err) {
    console.error(`\n❌ Download failed: ${err.message}`);
    console.log(
      '\nAlternative: install the package locally and copy the bundled skill file:\n' +
        `  npx @imprint-ai/architecture-aware-coder\n`
    );
    process.exit(1);
  }

  console.log('');

  // Detect manus CLI
  const r = spawnSync('manus', ['--version'], { stdio: 'pipe' });
  const manusOk = r.status === 0;

  if (manusOk) {
    const ver = (r.stdout || r.stderr || '').toString().trim();
    console.log(`manus CLI detected${ver ? ` (${ver})` : ''}. Import the skill with:`);
  } else {
    console.log('manus CLI not found. After installing manus, run:');
  }

  console.log(`  manus skill import "${out}"`);
  console.log('');
  console.log('Docs: https://github.com/Imprint-AI/architecture-aware-coder');
})();
