# The King's Manual — Website

Landing page, product pages, and a real Stripe checkout for The King's Manual
(kingsmanual.com). Built with Next.js 16 + Tailwind CSS.

## What's here

- `/` — landing page (hero, three volumes, bundle, free workbook CTA)
- `/products/[slug]` — product page per volume + the bundle, each with a
  "Buy Now" button that starts a real Stripe Checkout session
- `/success` — post-payment page that verifies the Stripe session server-side
  and serves secure, pay-gated PDF downloads (not public static files —
  `/api/download` checks the Stripe session is actually paid before it will
  stream a file)
- `/api/checkout` — creates the Stripe Checkout Session
- `/api/download`, `/api/order` — fulfillment, gated on a paid Stripe session
- `files/` — the three volume PDFs, served only through the gated download
  route above (not in `public/`, so they're not publicly guessable URLs)

## Before this can go live

1. **Add your Stripe secret key.** In Vercel: Project Settings → Environment
   Variables → add `STRIPE_SECRET_KEY` with your real `sk_live_...` key
   (use `sk_test_...` first to test the flow end-to-end with Stripe's test
   cards before going live). Also set `NEXT_PUBLIC_SITE_URL` to
   `https://kingsmanual.com`.
2. **Deploy to Vercel.** Easiest path: push this folder to a GitHub repo,
   then import it in Vercel (vercel.com/new). Vercel auto-detects Next.js —
   no config needed beyond the env vars above.
3. **Point kingsmanual.com at Vercel.** In Vercel, add `kingsmanual.com` as
   a Domain on the project. Vercel will give you either an A record or
   nameservers to set. In Bluehost, go to Domains → kingsmanual.com → DNS
   and add the record Vercel gives you.
4. **Test a real purchase** with a Stripe test card (4242 4242 4242 4242,
   any future expiry/CVC) before flipping to your live key.

## Local development

```
cp env.example .env.local   # then fill in STRIPE_SECRET_KEY
npm install
npm run dev
```
