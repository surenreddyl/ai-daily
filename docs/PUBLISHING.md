# How to publish an update

The live site updates **automatically** every time a change is saved to the `main` branch on GitHub.
There's nothing to upload by hand.

## The normal flow (with Claude)

1. Ask Claude for the change and review its plan; reply "approved".
2. Claude makes the change, runs `npm run check` and `npm run build`, and shows you how to test it locally.
3. When you're happy, say **"publish it"**. Claude saves the change (a *commit*) and sends it to GitHub (a *push*).
4. GitHub builds and publishes the site. This takes about **2 minutes**.
5. Open the live link to confirm. GitHub's delivery network keeps copies of pages for **up to 10 minutes**,
   so some people (including you) may see the old version for a few minutes after a publish. That's normal;
   it refreshes on its own. Learners get the new version the next time they open the site or app after that.

## Checking a publish worked

- On GitHub, open the repository and click the **Actions** tab. The latest run should show a green tick.
- A red cross means the build failed and **the live site was not changed**. The previous version stays up.
  Ask Claude to look at the failed run and fix it.

## Things to know

- **Nothing goes live until it's pushed.** Changes on the laptop are private until then.
- **The project is public on GitHub** (required for free hosting). Never put passwords, API keys or private
  information in any project file.
- **Undoing a change:** every published version is saved. Ask Claude to "roll back to the previous version"
  and publish again.
- **Offline copies:** the site saves pages on learners' devices. Normal updates appear automatically. If a big
  change ever needs everyone's saved copy cleared, bump `VERSION` at the top of `public/sw.js`.
- **Share previews** (WhatsApp, LinkedIn, Slack) are cached by those apps, sometimes for days. A changed
  title may take time to show up in previews of links that were already shared.

## One-time setup (already done at launch)

1. Free GitHub account owned by the site owner.
2. A public repository named `ai-daily`.
3. Repository **Settings → Pages → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
