<template>
  <div id="top">
    <Welcome />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Faq />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { faqs, projects } from "~/data/resume";

const title = "Gustavo Zavaleta — Senior Software Engineer";
const description =
  "Gustavo Zavaleta — senior software engineer in Lima, Peru. ~10 years building and scaling backend systems with Node.js, TypeScript and AWS. Experience, skills and CV.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "profile",
  ogUrl: "https://gustavozavaleta.com/",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterCreator: "@gzavaletavargas",
});

// This page is a personal profile/résumé — ProfilePage requires mainEntity
// to point at the Person it describes (the Person node's @id is #identity).
useSchemaOrg([
  defineWebPage({
    "@type": "ProfilePage",
    mainEntity: { "@id": "https://gustavozavaleta.com/#identity" },
  }),
]);

// FAQ + project structured data. Kept in a separate JSON-LD block — FAQPage
// and CreativeWork sit outside the nuxt-schema-org ProfilePage graph, and
// `creator` links back to the Person by its @id.
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "FAQPage",
            "@id": "https://gustavozavaleta.com/#faq",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          ...projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.name,
            description: p.description,
            ...(p.url ? { url: p.url } : {}),
            creator: { "@id": "https://gustavozavaleta.com/#identity" },
          })),
        ],
      }),
    },
  ],
});

// Auto-generated social share image (nuxt-og-image, see components/OgImage/Site.takumi.vue).
defineOgImageComponent("Site", {
  title: "Gustavo Zavaleta",
  description: "Senior Software Engineer · Node.js · TypeScript · AWS",
});
</script>
