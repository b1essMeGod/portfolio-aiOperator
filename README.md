# Yury Tsoy Portfolio

Production-ready personal portfolio website with bilingual content, theme switching, responsive layouts, and case-study pages.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- React Router
- CSS (custom design system with animated themes/gradients)
- ESLint
- GitHub Actions + GitHub Pages

## Project Features

- Responsive homepage with sections:
  - Hero
  - About
  - Experience
  - Skills
  - Work showcase (14 projects)
  - Contacts
- RU/EN language support
- Dark/Light themes with smooth transitions
- Typographic post-processing for cleaner text flow
- Expand/collapse content blocks in long text sections
- Detailed project pages with:
  - Context
  - Highlights
  - Tech stack
  - Live link (if available)
  - MacBook frame preview with inner scroll area
  - Full vertical image gallery
- Floating "back to top" button on scroll

## Folder Structure

```text
src/
  data/projects.ts           # All project metadata/content (RU/EN)
  i18n/content.ts            # Main page localized content
  pages/HomePage.tsx         # Homepage
  pages/ProjectPage.tsx      # Project details page
  styles/global.css          # Global styles/design system
  utils/typography.ts        # Typographic formatting helpers
public/
  resume.pdf
  works/
    macbook.png
    projects-thumbnails/
    project-1 ... project-14/
scripts/
  prepare-pages.mjs          # Creates dist/404.html for SPA fallback on GitHub Pages
.github/workflows/
  deploy-gh-pages.yml        # Auto deploy workflow
```

## Local Development

```bash
npm install
npm run dev
```

Default dev URL: `http://localhost:5173`

## Build and Preview

```bash
npm run build
npm run preview
```

Default preview URL: `http://localhost:4173`

## GitHub Pages Deployment (Recommended)

This repository is configured for automated deployment via GitHub Actions.

### One-time setup

1. Push project to GitHub (branch `main`).
2. Open repository settings:
   - `Settings -> Pages`
   - In `Source`, select **GitHub Actions**.
3. Ensure Actions are enabled for the repository.

### Deploy flow

- Any push to `main` triggers `.github/workflows/deploy-gh-pages.yml`.
- Workflow installs deps, runs `npm run build`, uploads `dist`, and deploys to Pages.
- `vite.config.ts` automatically sets correct `base` for repository pages using `GITHUB_REPOSITORY`.

## Why routing works on GitHub Pages

GitHub Pages does not natively handle SPA routes (`/projects/:slug`) on refresh.

To prevent 404s:
- build script runs `scripts/prepare-pages.mjs`
- it creates `dist/404.html` as a copy of `dist/index.html`
- Pages serves this fallback and React Router resolves the route client-side

## Manual Deploy (Optional)

If you still want manual deployment:

```bash
npm run deploy
```

This uses `gh-pages` package and publishes `dist` to `gh-pages` branch.

## Before pushing to GitHub

Do not commit generated artifacts:
- `node_modules/`
- `dist/`

They are already ignored in `.gitignore`.
