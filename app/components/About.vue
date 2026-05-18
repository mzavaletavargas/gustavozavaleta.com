<template>
  <section id="about" class="scroll-mt-20 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-6 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> about
      </h2>
      <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
        {{ about }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { about } from "~/data/resume";
</script>
