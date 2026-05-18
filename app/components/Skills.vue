<template>
  <section id="skills" class="scroll-mt-20 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-10 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> skills
      </h2>

      <div class="space-y-8">
        <div v-for="group in skillGroups" :key="group.label">
          <h3
            class="mb-3 font-mono text-sm font-bold text-fuchsia-500 dark:text-fuchsia-400"
          >
            {{ group.label }}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="rounded border border-gray-300 px-2.5 py-1 font-mono text-xs text-gray-700 dark:border-slate-700 dark:text-gray-300"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <h3 class="mb-4 mt-12 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> education
      </h3>
      <ul class="space-y-3">
        <li v-for="item in education" :key="item.title">
          <p class="text-sm font-bold lg:text-base">{{ item.title }}</p>
          <p class="font-mono text-xs text-gray-500 dark:text-gray-400">
            {{ item.institution }} · {{ item.location }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillGroups, education } from "~/data/resume";
</script>
