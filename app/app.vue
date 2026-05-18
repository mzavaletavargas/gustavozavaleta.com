<template>
  <NuxtLayout name="default">
    <TheHeader />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Site-wide title fallback; pages set their own title via useSeoMeta.
useHead({
  titleTemplate: (title) => (title ? title : "Gustavo Zavaleta"),
});

// Structured data so search engines understand the site and its author.
useSchemaOrg([
  defineWebSite({
    name: "Gustavo Zavaleta",
    description:
      "Personal website of Gustavo Zavaleta — software engineer.",
  }),
  definePerson({
    name: "Gustavo Zavaleta",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior software engineer building and scaling backend systems with Node.js, TypeScript and AWS.",
    url: "https://gustavozavaleta.com/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Amazon Web Services",
      "Backend Development",
      "Serverless Architecture",
      "Software Engineering",
    ],
    sameAs: [
      "https://github.com/mzavaletavargas",
      "https://www.linkedin.com/in/gzavaletavargas/",
      "https://twitter.com/gzavaletavargas",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Nacional Federico Villarreal",
    },
  }),
  defineWebPage(),
]);
</script>
