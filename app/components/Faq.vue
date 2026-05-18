<template>
  <section id="faq" class="scroll-mt-20 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-10 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> faq
      </h2>

      <ul class="divide-y divide-gray-200 dark:divide-slate-800">
        <li v-for="item in faqs" :key="item.q">
          <details class="group py-4">
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold lg:text-base [&::-webkit-details-marker]:hidden"
            >
              {{ item.q }}
              <span
                class="font-mono text-lg text-blue-500 transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
                >+</span
              >
            </summary>
            <p
              class="mt-3 text-sm text-gray-700 dark:text-gray-300 lg:text-base"
            >
              {{ item.a }}
            </p>
          </details>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqs } from "~/data/resume";
</script>
