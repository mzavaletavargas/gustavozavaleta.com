import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  env: {
    title: "Gustavo Zavaleta",
    description: "Personal Website, sharing about myself.",
    appUrl: "https://gustavozavaleta.com",
    github: "https://github.com/mzavaletavargas",
    linkedin: "https://www.linkedin.com/in/gzavaletavargas/",
    twitter: "https://twitter.com/gzavaletavargas",
    googleTrackingId: "G-ET0TNT9QTZ",
  },
  target: 'static',
  head: {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    useMeta: {
      class: "dark",
    },
    script: [
      {src: '~/test.js'}
    ]
  },
  modules: ["@nuxtjs/tailwindcss"],
});
