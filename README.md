# gustavozavaleta.com

Personal website of Gustavo Zavaleta, built with [Nuxt 4](https://nuxt.com).

## Stack

- **Nuxt 4** — SSR + static prerendering (full HTML for crawlers)
- **@nuxtjs/tailwindcss** — styling
- **@nuxtjs/seo** — sitemap, robots.txt, OG images, schema.org, canonical URLs
- **nuxt-gtag** — Google Analytics 4

Application code lives in `app/` (Nuxt 4 directory structure).

## Setup

```bash
npm install
```

## Development

```bash
npm run dev   # http://localhost:3000
```

## Production

```bash
npm run build     # SSR build
npm run generate  # fully prerendered static build
npm run preview   # preview the production build
```

Deployed on Netlify — the Nitro Netlify preset is auto-detected, no extra config needed.
