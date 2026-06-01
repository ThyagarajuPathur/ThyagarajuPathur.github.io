# Portfolio Redesign — Design Spec

Date: 2026-06-01
Owner: Thyagaraju Pathur

## Goal

A clean, minimalist personal portfolio that showcases three personal projects
(Preporium, Pvraos Nutritional Mix, Rev EV), introduces Thyagaraju as a software
engineer, and links to a resume PDF. Hosted on GitHub Pages at
`thyagarajupathur.github.io`.

## Aesthetic

**Terminal × Swiss.** Strictly black & white (grayscale only, no color).
Monospace command-line voice (IBM Plex Mono) executed with Swiss-design
discipline: a strict grid, hairline rules, strong typographic hierarchy, and
generous whitespace.

- **Type**: IBM Plex Mono across the board, varied weights. Retro-terminal
  pedigree, distinctive, cohesive.
- **Color**: `#000` background, `#fff` foreground, grays (`#888`, `#666`,
  `#333`) for de-emphasis and rules. No hue.
- **Signature moments**: `$ whoami` boot-sequence reveal on load; blinking
  cursor after the name; project cells invert (black-on-white) on hover; very
  faint CRT/scanline texture for atmosphere.
- **Motion**: one orchestrated staggered page-load reveal; subtle scroll-in for
  sections. All gated behind `prefers-reduced-motion`.

## Structure (single page, scroll-based)

1. **Top status bar** — `~/thyagaraju-pathur` path + command-path nav
   (`./about ./work ./resume ./contact`).
2. **Hero** — `$ whoami` prompt, name with blinking cursor, a fresh 2–3 line
   intro (NOT the resume paragraph), e.g. "ships end-to-end, from a LeetCode
   prep platform to an iOS app that gives EVs a soul; pairs backend/cloud
   experience with agentic coding."
3. **Selected work** — 2-column Swiss grid of 3 project cells (+ a "more soon"
   cell), each with index, name, one-line description, tech tags, and
   `live ↗ / code ↗` links.
4. **Footer** — contact links (GitHub, LinkedIn, email) + `↓ resume.pdf` button.

### Project content

| # | Project | One-liner | Tech | Links |
|---|---------|-----------|------|-------|
| 01 | Preporium | Focused LeetCode companion — curated DSA path, daily pace with a live finish date, progress tracking. | Next.js · TypeScript · Supabase · Tailwind | live (preporax.vercel.app), code |
| 02 | Rev EV | iOS app that synthesizes a combustion engine sound for EVs from live OBD-II / Bluetooth RPM data. | Swift · SwiftUI · Combine · CoreAudio | code |
| 03 | Pvraos Nutritional Mix | Full e-commerce store for a nutritional-health-mix brand — catalog, cart, Razorpay checkout, order tracking, reviews, coupons, accounts. | Next.js · TypeScript · Supabase · Razorpay · Shiprocket | live (nutritional-health-mix.vercel.app), code |

## Tech & hosting

- Hand-written **HTML + CSS + vanilla JS**. No framework, no build step.
- Files at repo root; `assets/resume.pdf` for the resume (user supplies).
- `assets/favicon.svg` — minimal B&W terminal-cursor mark.
- `.nojekyll` so GitHub Pages serves files as-is.
- Old 2020 developerFolio site moved to `/legacy` (preserved; recoverable in git
  history). New site at root.

## Accessibility

- Semantic landmarks, focus-visible outlines, sufficient contrast (pure B&W),
  `prefers-reduced-motion` honored, keyboard-navigable nav/links.

## Out of scope (YAGNI)

- Blog, CMS, analytics, contact form, dark/light toggle (already monochrome),
  per-project detail pages.
