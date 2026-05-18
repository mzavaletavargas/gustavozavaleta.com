<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
  >
    <nav
      class="mx-auto flex max-w-3xl items-center justify-between px-6 py-3 font-mono text-sm"
    >
      <a href="#top" aria-label="Gustavo Zavaleta — top" class="shrink-0">
        <img
          src="/logo.svg"
          alt="Gustavo Zavaleta logo"
          width="28"
          height="28"
          class="h-7 w-7"
        />
      </a>

      <!-- Desktop nav -->
      <ul class="hidden gap-5 text-gray-600 dark:text-gray-300 sm:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="hover:text-blue-500">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="flex h-8 w-8 items-center justify-center text-gray-600 dark:text-gray-300 sm:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="open = !open"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <path v-if="!open" d="M3 6.5h16M3 11h16M3 15.5h16" />
          <path v-else d="M5.5 5.5l11 11M16.5 5.5l-11 11" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <ul
        v-if="open"
        id="mobile-menu"
        class="border-t border-gray-200 px-6 py-2 font-mono text-sm dark:border-slate-800 sm:hidden"
      >
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block py-2.5 text-gray-600 hover:text-blue-500 dark:text-gray-300"
            @click="open = false"
            >{{ link.label }}</a
          >
        </li>
      </ul>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];
</script>
