<template>
  <div id="top">
    <Welcome />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>

<script setup lang="ts">
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

// This page is a personal profile/résumé.
useSchemaOrg([defineWebPage({ "@type": "ProfilePage" })]);

// Auto-generated social share image (nuxt-og-image, see components/OgImage/Site.takumi.vue).
defineOgImageComponent("Site", {
  title: "Gustavo Zavaleta",
  description: "Senior Software Engineer · Node.js · TypeScript · AWS",
});
</script>
