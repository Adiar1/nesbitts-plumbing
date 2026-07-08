# Nesbitt's Plumbing (NPSCorp)

Modern, mobile-first marketing site for Nesbitt's Plumbing (Asheville & Hendersonville, NC),
built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

> *Keeping water in-line with reliable plumbing solutions* (EST 2004)

## Commands

```sh
npm install     # install dependencies
npm run dev     # dev server at http://localhost:4321
npm run build   # production build → ./dist/
npm run preview # preview the production build
```

## Brand assets: logo, favicon & water drop

| File | Purpose | Specs |
| --- | --- | --- |
| `public/logo.png` | Header + footer wordmark | Transparent background, wide format (~636×102 px) |
| `public/favicon.ico` | Browser tab icon | Multi-size `.ico` (16/32/48 px) |
| `src/assets/water-drop.png` | Inline brand drop icon (the `WaterDrop` component) **and** the source the favicon is built from | Square, transparent, 196×196 px or larger |

To swap in a new water-drop icon, replace `src/assets/water-drop.png` (the `WaterDrop`
component picks it up automatically via Astro's asset pipeline), then regenerate the favicon
from it:

```sh
magick src/assets/water-drop.png -background none \
  \( -clone 0 -resize 16x16 \) \( -clone 0 -resize 32x32 \) \( -clone 0 -resize 48x48 \) \
  -delete 0 public/favicon.ico
```

`public/` is only for files served as-is at a fixed URL (like `favicon.ico`); imported UI images
belong in `src/assets/`. The logo and favicon paths are set at the bottom of `src/data/site.ts`
(`logo:` and `favicon:`) — update them there if you change file names or formats.

## Editing site-wide info

All contact info, hours, social links, taglines, and navigation live in one file:
`src/data/site.ts`. Edit there and every page updates.

## Contact form

The form on `/contact-us` is pre-wired for **Netlify Forms** (`data-netlify="true"`). If you
deploy elsewhere, point the form's `action` at a provider like Formspree or Basin.

## Notes

- The `/emergency-services` route from the old site was intentionally **not** rebuilt: the
  business no longer offers emergency service, and all 24/7 / emergency copy has been removed.
- Gallery and hero photos were carried over from the old site into `public/images/`.
