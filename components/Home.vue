<template>
  <div
    class="h-full dark:text-white flex justify-center items-center flex-col font-mono"
  >
    <span class="text-4xl lg:text-5xl tracking-tighter">
      <span class="text-blue-400">gustavo</span>
      <span>.</span>
      <span class="text-fuchsia-400">hello()</span>
    </span>
    <span class="text-1xl lg:text-2xl">
      <span class="pr-2 text-blue-500">></span>
      <span class="text-gray-300">welcome to my website</span>
    </span>
    <div class="flex flex-row space-x-4 pt-5">
      <Linkedin
        class=""
        :href="linkedinUrl"
        :headline="title"
        :description="description"
        :origin="appUrl"
        color="white"
      />
      <Github
        :href="githubUrl"
        :headline="title"
        :description="description"
        :origin="appUrl"
        color="white"
      />
      <Twitter
        :href="twitterUrl"
        :headline="title"
        :description="description"
        :origin="appUrl"
        color="white"
      />
    </div>
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
