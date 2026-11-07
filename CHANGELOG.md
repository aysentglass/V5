# System Update Log — aysentsmartfilm.com

This log records functional, SEO and compliance changes. Each entry is built and
committed with the code it describes. Dates are in the project owner's local time.

## 2026-11-07 — P0 measurement & structured-data fixes

### F-08 — Removed non-visible product rating and reviews
- Removed `aggregateRating` (4.8) and the two `review` entries from the homepage
  `Product` JSON-LD in `components/StructuredData.tsx`.
- Reason: the rating/reviews were not real and were not visible anywhere on the
  page, which conflicts with Google's structured-data policy.
- Verification: homepage JSON-LD no longer contains `aggregateRating` or `review`.

### F-09 — Retired the overstepping product page (Option A)
- Deleted the route `app/products/self-adhesive-smart-film/` (and the empty
  `app/products/` directory).
- Removed the path from `app/sitemap.ts`; sitemap returns to 16 URLs.
- Added a permanent HTTP 308 redirect in `next.config.mjs`:
  `/products/self-adhesive-smart-film` → `/blog/pdlc-film-selection-guide`.
- Kept `public/images/product-self-adhesive.jpg` because the homepage
  `ProductGrid` component still uses it.
- Reason: the technical/selection site must not host product procurement pages,
  and the same path already exists on the product procurement site
  (aysentglass.com), causing same-path collision.

## Background — systems already live before this log was created
- GDPR/CMP cookie consent: self-hosted cookieconsent, `/api/geo` country
  detection, consent written to Supabase `consent_logs`; no banner for China,
  banner for all other countries.
- 14 technical blog posts, including the thermal-performance and maintenance
  guides, with the FAQ duplicate-H2 template defect fixed.
- Technical SEO: sitemap, robots, canonical, OpenGraph, breadcrumb and FAQ
  structured data.
