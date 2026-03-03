#!/usr/bin/env node
// Minimal CLI to download the .skill file into the current directory and print import instructions.
// IMPORTANT: Replace DOWNLOAD_URL with the real release asset URL after you upload the .skill to GitHub Releases.

const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const SKILL_FILENAME = 'architecture-aware-coder.skill';
// Template URL: replace YOUR_GITHUB_USERNAME and YOUR_REPO with real values
const DOWNLOAD_URL = 'https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO/releases/latest/download/' + SKILL_FILENAME;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error('HTTP ' + res.statusCode));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', (err) => {
      try { fs.unlinkSync(dest); } catch(e){}
      reject(err);
    });
  });
}

(async () => {
  const out = path.resolve(process.cwd(), SKILL_FILENAME);
  process.stdout.write('Downloading ' + SKILL_FILENAME + ' ... ');
  try {
    await download(DOWNLOAD_URL, out);
    console.log('done. Saved to ' + out);
  } catch (err) {
    console.error('failed:', err.message);
    console.log('');
    console.log('Alternative: if this package was published with the .skill bundled,');
    console.log('the file may already exist in the package. Check the current directory for ' + SKILL_FILENAME);
    process.exit(1);
  }

  // If manus CLI present, print next steps
  let manusInstalled = false;
  try {
    const r = spawnSync('manus', ['--version'], { stdio: 'ignore' });
    manusInstalled = r.status === 0;
  } catch (e) {}

  console.log('');
  if (manusInstalled) {
    console.log('manus CLI detected. Import the skill with:');
    console.log('  manus skill import ' + out);
  } else {
    console.log('manus CLI not found. Install manus and then run:');
    console.log('  manus skill import ' + out);
    console.log('See: https://docs.getmanus.dev (or your manus installation docs)');
  }
  console.log('');
  console.log('If you want to auto-import, re-run with:');
  console.log('  manus skill import ' + out);
})();
