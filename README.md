# AYSENT SMART FILM V5 - Commercial Website

Professional B2B website for AYSENT SMART FILM, built with Next.js 14 + TypeScript + Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
.
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles + Tailwind
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap.xml
├── components/            # React components
│   ├── Header.tsx         # Navigation header (responsive)
│   ├── Hero.tsx           # Hero banner section
│   ├── Trust.tsx          # Why choose us / features
│   ├── ProductGrid.tsx    # Product showcase
│   ├── QuoteForm.tsx      # RFQ inquiry form
│   └── Footer.tsx         # Site footer
├── data/
│   └── products.ts        # Product data
├── lib/
│   └── schema.ts          # Structured data
├── public/                # Static assets (images, etc.)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript config with @/ alias
├── package.json
└── .gitignore
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "deploy: ready for vercel"
git push origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **Add New...** → **Project**
3. Select your GitHub repository (`aysentglass/V5`)
4. Vercel will auto-detect Next.js framework
5. **Framework Preset**: Next.js (auto-detected)
6. **Build Command**: `npm run build` (auto-detected)
7. **Output Directory**: `.next` (auto-detected)
8. **Install Command**: `npm install` (auto-detected)
9. Click **Deploy**

### Step 3: Verify Deployment

- Vercel will build and deploy automatically
- Once done, you'll get a URL like `https://v5-xxx.vercel.app`
- Check the deployment logs if anything fails

## Vercel Configuration (vercel.json)

No special `vercel.json` needed — Vercel auto-detects Next.js projects.

If you need custom headers or redirects, create `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

## Environment Variables

No environment variables required for basic deployment.

For email functionality (Resend), add in Vercel dashboard:
- `RESEND_API_KEY`: your Resend API key

## SEO

- Metadata configured in `app/layout.tsx`
- `robots.txt` generated via `app/robots.ts`
- `sitemap.xml` generated via `app/sitemap.ts`
- Update URLs to your actual domain in these files

## Custom Domain

1. In Vercel dashboard → Project → Settings → Domains
2. Add your custom domain (e.g., `www.aysentsmartfilm.com`)
3. Follow DNS instructions to point your domain to Vercel

## Troubleshooting

### Build fails on Vercel

1. Check that `package-lock.json` is committed
2. Ensure `tsconfig.json` exists in root
3. Ensure `next.config.mjs` exists in root
4. Check Node.js version (Vercel default works, or set in package.json)

### "Module not found" errors

- Ensure all imports use correct paths
- `@/` alias maps to project root (configured in tsconfig.json)

### Styles not loading

- Verify `tailwind.config.ts` content paths include `app/` and `components/`
- Verify `postcss.config.js` exists
- Verify `app/globals.css` has `@tailwind` directives

## Brand

**AYSENT SMART FILM** — Professional PDLC smart glass film manufacturer.
