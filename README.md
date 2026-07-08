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

## Custom logo & favicon

Drop your files into the **`public/`** folder with these exact names:

| File | Purpose | Recommended specs |
| --- | --- | --- |
| `public/logo.png` | Header + footer logo | Transparent background, ~520×120 px (wide format) |
| `public/favicon.png` | Browser tab icon | Square, 64×64 px or larger |

Placeholder versions are already there, so **overwrite them** with your real assets.
If your files use a different format (e.g. `.svg` or `.ico`), also update the two paths at the
bottom of `src/data/site.ts` (`logo:` and `favicon:`) to match.

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
