<template>
  <div
    class="relative flex min-h-dvh flex-col overflow-hidden font-mono dark:text-white"
  >
    <InfiniteGrid />

    <div
      class="relative z-10 flex flex-1 flex-col items-center justify-center px-4"
    >
      <h1 class="text-4xl lg:text-5xl tracking-tighter">
        <SpecialText text="gustavo" class="text-blue-400" />
        <SpecialText text="." :delay="0.12" />
        <SpecialText
          text="hello()"
          class="text-fuchsia-400 font-bold"
          :delay="0.24"
        />
      </h1>
      <p class="text-1xl lg:text-2xl">
        <span class="pr-2 text-blue-500">></span>
        <span class="dark:text-gray-300">Senior Software Engineer</span>
      </p>
      <p
        class="mt-4 max-w-md px-2 text-center text-sm lg:text-base text-gray-600 dark:text-gray-400"
      >
        I build and scale backend systems with Node.js, TypeScript and AWS.
        Based in Lima, Peru.
      </p>
      <div
        class="flex flex-row mt-5 space-x-4 w-28 h-10 justify-center items-center"
      >
        <Linkedin
          :href="linkedinUrl"
          :headline="title"
          :description="description"
          :origin="appUrl"
        />
        <Github
          :href="githubUrl"
          :headline="title"
          :description="description"
          :origin="appUrl"
        />
        <Twitter
          :href="twitterUrl"
          :headline="title"
          :description="description"
          :origin="appUrl"
        />
      </div>
    </div>

    <!-- Scroll cue — invites the visitor to explore the sections below -->
    <a
      href="#about"
      aria-label="Scroll to content"
      class="relative z-10 mx-auto mb-16 flex flex-col items-center gap-2 text-slate-300 transition-colors hover:text-blue-400"
    >
      <span class="text-xs uppercase tracking-[0.25em]">scroll</span>
      <svg
        class="h-6 w-6 animate-bounce motion-reduce:animate-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  </div>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      linkedinUrl: "https://www.linkedin.com/in/gzavaletavargas/",
      twitterUrl: "https://twitter.com/gzavaletavargas",
      githubUrl: "https://github.com/mzavaletavargas",
      title: "Gustavo Zavaleta",
      description: "Personal Website, sharing about myself.",
      appUrl: "https://gustavozavaleta.com",
    };
  },
};
</script>
