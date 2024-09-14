<template>
  <div
    class="h-screen w-full dark:text-white flex justify-center items-center flex-col font-mono"
  >
    <span class="text-4xl lg:text-5xl tracking-tighter">
      <span class="text-blue-400">gustavo</span>
      <span>.</span>
      <span class="text-fuchsia-400 font-bold">hello()</span>
    </span>
    <span class="text-1xl lg:text-2xl">
      <span class="pr-2 text-blue-500">></span>
      <span class="dark:text-gray-300">welcome to my website</span>
    </span>
    <!-- <span class="flex h-3 w-3 p-10">
      <span
        class="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-sky-400 opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span> -->
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
