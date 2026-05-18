<template>
  <section id="projects" class="scroll-mt-20 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-10 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> projects
      </h2>

      <ul class="space-y-10">
        <li v-for="project in projects" :key="project.name">
          <div
            class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <h3 class="text-lg font-bold lg:text-xl">
              <a
                v-if="project.url"
                :href="project.url"
                rel="noopener"
                target="_blank"
                class="text-fuchsia-500 hover:underline dark:text-fuchsia-400"
              >
                {{ project.name }} ↗
              </a>
              <span v-else class="text-fuchsia-500 dark:text-fuchsia-400">
                {{ project.name }}
              </span>
              <span class="text-gray-700 dark:text-gray-300">
                — {{ project.tagline }}</span
              >
            </h3>
            <span
              class="font-mono text-xs text-gray-500 dark:text-gray-400 sm:whitespace-nowrap"
            >
              {{ project.period }}
            </span>
          </div>

          <p class="mb-3 mt-1 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
            {{ project.description }}
          </p>

          <ul
            class="mb-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300 lg:text-base"
          >
            <li v-for="(point, i) in project.highlights" :key="i">
              {{ point }}
            </li>
          </ul>

          <ul class="flex flex-wrap gap-2">
            <li
              v-for="tech in project.stack"
              :key="tech"
              class="rounded border border-gray-300 px-2.5 py-1 font-mono text-xs text-gray-700 dark:border-slate-700 dark:text-gray-300"
            >
              {{ tech }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/data/resume";
</script>
