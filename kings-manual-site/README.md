# The King's Manual — Website

Landing page and product pages for The King's Manual (kingsmanual.com).
Built with Next.js 16 + Tailwind CSS. Gumroad handles checkout and delivery.

## What's here

- `/` — landing page (hero, three volumes, bundle, free workbook CTA)
- `/products/[slug]` — individual volume and complete-set product pages
- `/privacy`, `/terms`, `/refunds` — customer-facing policies
- Gumroad — payment processing, receipts, refunds, and file delivery

## Before this can go live

1. **Verify Gumroad.** Confirm each URL in `src/lib/products.ts`, its attached
   files, price, refund settings, and receipt email.
2. **Deploy to Vercel.** Push this folder to a GitHub repo,
   then import it in Vercel (vercel.com/new). Vercel auto-detects Next.js —
   no config needed beyond the env vars above.
3. **Point kingsmanual.com at Vercel.** In Vercel, add `kingsmanual.com` as
   a Domain on the project. Vercel will give you either an A record or
   nameservers to set. In Bluehost, go to Domains → kingsmanual.com → DNS
   and add the record Vercel gives you.
4. **Test every Gumroad checkout and download** in a private browser window.
5. Optional: set `NEXT_PUBLIC_GA_ID` in Vercel to enable Google Analytics.

## Local development

```
npm install
npm run dev
```
