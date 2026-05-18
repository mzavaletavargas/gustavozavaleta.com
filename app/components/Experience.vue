<template>
  <section id="experience" class="scroll-mt-20 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-10 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> experience
      </h2>

      <ol class="space-y-12">
        <li v-for="job in experience" :key="job.company">
          <div
            class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <h3 class="text-lg font-bold lg:text-xl">
              {{ job.role }}
              <span class="text-fuchsia-500 dark:text-fuchsia-400">
                @ {{ job.company }}</span
              >
            </h3>
            <span
              class="font-mono text-xs text-gray-500 dark:text-gray-400 sm:whitespace-nowrap"
            >
              {{ job.period }}
            </span>
          </div>
          <p class="mb-3 font-mono text-xs text-gray-500 dark:text-gray-400">
            {{ job.location }}
          </p>
          <ul
            class="list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300 lg:text-base"
          >
            <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from "~/data/resume";
</script>
