# architecture-aware-coder - Manus skill (open-source template)

This repository is a ready-to-publish open-source scaffold for your Manus `.skill` file.
It includes:
- the original `architecture-aware-coder.skill` file
- a small `npx`-compatible CLI (`bin/skill.js`) that downloads the `.skill` from GitHub Releases
- `package.json` configured for publishing as an npm package (scope + public access)
- basic docs: README, LICENSE, CONTRIBUTING, SECURITY, CHANGELOG
- GitHub Actions workflow example for publishing

> ⚠️ Before publishing: replace placeholders (YOUR_GITHUB_USERNAME, YOUR_REPO, package name, author, etc.)

## What is a `.skill` file?

You created this skill with `manus create-skill`. A `.skill` file is a skill package for Manus — it typically contains metadata, prompts/flows, and configuration used by the Manus runtime/CLI to register or import the skill into a Manus instance. The exact contents vary by tool version.

### Quick preview of the uploaded .skill (first ~20 lines or parsed JSON)
```

```

## Quick user instructions (what the included `npx` CLI does)

After you publish this npm package (or upload the `.skill` to GitHub releases and keep the DOWNLOAD_URL in `bin/skill.js` updated), users can run:

```bash
npx @your-org/architecture-aware-coder-skill
# or if you publish the package under the name "skill" (not recommended unless you own that name):
npx skill
```

The command downloads `architecture-aware-coder.skill` into the current directory and prints the `manus skill import` command.

## How to prepare and publish (maintainer checklist)

1. Replace placeholders:
   - Update `package.json` `name`, `author`, `description`.
   - Edit `bin/skill.js` DOWNLOAD_URL to your final GitHub Releases download URL:
     `https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO/releases/latest/download/architecture-aware-coder.skill`

2. Commit and push to GitHub:
```bash
git init
git add .
git commit -m "Initial: add skill + npx installer"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Create a Release on GitHub and upload `architecture-aware-coder.skill` as a release asset.
   - After creating the release, the `DOWNLOAD_URL` above will be valid.

4. Publish the npm package (if you want `npx` to fetch from npm):
```bash
npm login
# if using scope, ensure publishConfig.access = "public" or run:
npm publish --access public
```

5. Optionally add a GitHub Actions workflow to auto-publish on tag push (example included in `.github/workflows/release.yml`).

## Files included
- `architecture-aware-coder.skill` (original file you uploaded)
- `bin/skill.js` (the CLI)
- `package.json`
- `README.md`
- `LICENSE`
- `.gitignore`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `CHANGELOG.md`
- `.github/workflows/release.yml`

## Next steps I can help with
- Replace placeholders automatically and generate a fully tailored `package.json` and `bin/skill.js` with working DOWNLOAD_URL (I can do this if you tell me the GitHub repo/user to use).
- Create the GitHub Release for you (I cannot interact with GitHub directly — but I can provide the exact commands / API payload).
- Generate a polished `CONTRIBUTING.md` and CI workflow customized to your repo.

# architecture-aware-coder
