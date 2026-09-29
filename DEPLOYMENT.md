# Cloudflare Pages deployments

This repository contains two independent static Next.js sites. Create a Cloudflare Pages project for each one, with `main` as the production branch.

| Site | Root directory | Build command | Output directory | Intended domain |
| --- | --- | --- | --- | --- |
| Portfolio | `/` | `npx next build` | `out` | `kusumo.design` |
| Photography | `/photography-site` | `npm run build` | `out` | `calebcolor.com` |

Use the **Next.js (Static HTML Export)** framework preset for both. Do not use `@cloudflare/next-on-pages`; both projects have `output: "export"` and deploy as static files.

Attach `calebcolor.com` to the photography Pages project and `kusumo.design` to the root portfolio project. The photography project contains its own images, layout, styles, dependencies, and lockfile, so it can build independently from this repository.
