# Caleb Kusumo Photography

Standalone photography site, styled to match the Caleb Kusumo portfolio. The archive and its images live in this project, so it can be deployed independently from the main portfolio.

## Run locally

```bash
npm ci
npm run dev
```

## Deploy to Cloudflare Pages

Create a Pages project from this repository and set its root directory to `photography-site`. Use the **Next.js (Static HTML Export)** preset, build command `npm run build`, and output directory `out`.

The intended production domain is `calebcolor.com`. The portfolio lives at `https://kusumo.design`.
