// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-01",

  // Server-side render + prerender static routes so crawlers receive full HTML.
  ssr: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "nuxt-gtag",
    "motion-v/nuxt",
  ],

  // Canonical site identity — consumed by sitemap, robots, OG image and schema.org.
  site: {
    url: "https://gustavozavaleta.com",
    name: "Gustavo Zavaleta",
    description:
      "Gustavo Zavaleta — software engineer building backend systems with Node.js, TypeScript and AWS.",
    defaultLocale: "en",
  },

  app: {
    head: {
      htmlAttrs: { lang: "en", class: "dark" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },

  // Google Analytics 4 via nuxt-gtag (replaces the old vue-gtag-next plugin).
  gtag: {
    id: "G-ET0TNT9QTZ",
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  devtools: { enabled: true },
});
