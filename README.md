# Anas Medical Store — Website

A fast, static, SEO-friendly local-business website for **Anas Medical Store**
(Gaddai, Dera Ghazi Khan, Punjab, Pakistan), built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. No environment variables or backend are required — this is a fully
   static site.
4. After your first deploy, open `lib/business.ts` and replace
   `productionUrl` with your real Vercel/custom domain, then redeploy.
   This keeps the SEO metadata and JSON-LD `url` field accurate.

## Editing business information

All verified business facts (name, address, phone, hours, Google rating,
Maps links) live in a single file: **`lib/business.ts`**. Update that file
and the whole site — header, hero, footer, and structured data — updates
automatically.

### Important — what's intentionally left out

Per the brief, this site does **not** claim any of the following unless the
business owner confirms them and `lib/business.ts` / the relevant component
is updated:

- Home delivery or online ordering
- 24/7 or emergency service
- Doctor consultation, prescription verification, vaccination, or lab
  testing
- Specific medicine/product availability
- Owner name or years in business
- WhatsApp availability, payment methods, or insurance acceptance
- Additional branches

The "What We Offer" section (`components/Services.tsx`) intentionally uses
general categories rather than a specific inventory list, with a note asking
visitors to call ahead to confirm availability.

## Project structure

```
app/
  layout.tsx      — root layout, fonts, metadata, JSON-LD
  page.tsx        — assembles all sections
  globals.css
  icon.svg        — favicon (brand mark)

components/
  Header.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  WhyChooseUs.tsx
  Hours.tsx
  Location.tsx
  Contact.tsx
  Footer.tsx
  BrandMark.tsx

lib/
  business.ts     — single source of truth for all business data
```

## Notes on the map

Rather than embedding a heavy Google Maps iframe, the Location section links
out to Google Maps directions/search using the verified address. This keeps
the page fast on mobile while still getting people to the right place.
