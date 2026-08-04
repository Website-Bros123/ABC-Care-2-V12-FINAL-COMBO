# ABC Care 2 — Website

Marketing website for ABC Care 2, a licensed family child care provider in Bothell & Mill Creek, WA.

Built with [Next.js](https://nextjs.org/) (Pages Router) and plain CSS — no UI framework required. Fully bilingual (English/Spanish) via an ENG/SPA toggle in the header that persists across visits and pages.

## Pages

| Route                     | Page                  |
| -------------------------- | --------------------- |
| `/`                         | Home                   |
| `/about`                    | About                  |
| `/gallery`                  | Gallery                |
| `/safety`                   | Safety                 |
| `/services`                 | Services               |
| `/curriculum`                | Curriculum             |
| `/subsidized-child-care`     | Subsidized Child Care  |
| `/faq`                      | FAQ                    |
| `/contact`                  | Contact Us             |

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Adding real photos

Every photo on the site currently renders as a placeholder (`components/ImagePlaceholder.js`). To swap in real photography:

1. Add image files to `public/images/`.
2. Replace the relevant `<ImagePlaceholder ... />` usage in `pages/*.js` with a standard `<img src="/images/your-file.jpg" alt="..." className="..." />`, or use `next/image`.

## Editing text / translations

All copy (English + Spanish) lives in `lib/translations.js`. Contact details, hours, and social links live in `lib/siteData.js`. Editing either file updates every page automatically.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/), choose **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy.
