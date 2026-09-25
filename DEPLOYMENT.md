# GitHub Pages Deployment Guide

Your project is pre-configured for automated continuous deployment to **GitHub Pages** using GitHub Actions (`.github/workflows/deploy.yml`).

Every time you push new code or images to `main` or `master`, GitHub will automatically build and publish your website.

---

## Quick Setup Steps (One-Time in GitHub):

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Prinle PR Solutions"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in Repository Settings**:
   * On your GitHub repository page, click **Settings** (gear icon at the top).
   * In the left sidebar, click **Pages** (under the "Code and automation" section).
   * Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. **That's it!**:
   * GitHub Actions will automatically start the `Deploy to GitHub Pages` workflow.
   * You can check the live progress in the **Actions** tab of your repository.
   * Once finished (typically ~30–45 seconds), your live URL will be shown at the top of the Pages settings (e.g. `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`).

---

## Custom Domain (Optional):
If you have your own domain (e.g. `prinleprsolutions.com`):
1. In repository **Settings** > **Pages** > **Custom domain**, enter your domain name.
2. Follow GitHub's instructions to add the `CNAME` or `A` records in your domain DNS manager (e.g., Cloudflare, Namecheap, GoDaddy).
3. Check the **Enforce HTTPS** box.
