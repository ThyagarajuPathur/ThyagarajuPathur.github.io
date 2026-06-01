# thyagarajupathur.github.io

Personal portfolio for **Thyagaraju Pathur** — a clean, minimalist, strictly
black-&-white site in a *Terminal × Swiss* aesthetic. Hand-coded, no framework,
no build step.

**Live:** https://thyagarajupathur.github.io

## Structure

```
index.html        # single page (about · work · contact)
styles.css        # all styling — IBM Plex Mono, monochrome, Swiss grid
script.js         # clock, footer year, scroll-reveal
assets/
  favicon.svg     # minimal B&W prompt mark
  resume.pdf      # ← drop your resume here (see below)
docs/             # design spec
legacy/           # archived 2020 developerFolio portfolio
.nojekyll         # serve files as-is (no Jekyll processing)
```

## Adding your resume

Drop your PDF at `assets/resume.pdf`, then commit. The `./resume` nav link and
the `↓ resume.pdf` button already point there
(`https://thyagarajupathur.github.io/assets/resume.pdf`).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

This repo is a GitHub user site, served from the default branch root. Push to
the default branch and GitHub Pages publishes automatically. (Settings → Pages →
Build from branch → root.)
