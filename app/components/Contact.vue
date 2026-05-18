<template>
  <section id="contact" class="scroll-mt-20 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-6 font-mono text-2xl font-bold lg:text-3xl">
        <span class="text-blue-500">//</span> contact
      </h2>
      <p class="mb-8 text-base text-gray-700 dark:text-gray-300 lg:text-lg">
        Open to senior remote engineering roles. Reach out and I'll send my
        full CV:
      </p>

      <ul class="flex flex-wrap gap-4 font-mono text-sm">
        <li>
          <a
            :href="
              email
                ? `mailto:${email}?subject=CV%20request`
                : '#contact'
            "
            class="inline-block rounded border border-blue-500 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-500 hover:text-white dark:text-blue-300"
          >
            Request CV
          </a>
        </li>
        <li>
          <a
            :href="email ? `mailto:${email}` : '#contact'"
            class="inline-block rounded border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-fuchsia-500 hover:text-fuchsia-500 dark:border-slate-700 dark:text-gray-300"
          >
            {{ email || "Email" }}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gzavaletavargas/"
            rel="me noopener"
            target="_blank"
            class="inline-block rounded border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:text-gray-300"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mzavaletavargas"
            rel="me noopener"
            target="_blank"
            class="inline-block rounded border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:text-gray-300"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Assembled client-side so the address never appears in the static HTML
// that email-harvesting bots scrape.
const email = ref("");
onMounted(() => {
  email.value = ["mzavaletavargas", "gmail.com"].join("@");
});
</script>
