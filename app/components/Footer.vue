<template>
  <footer
    class="py-6 text-center font-mono text-xs text-gray-500 dark:text-gray-400"
  >
    <p>
      © {{ year }} Gustavo Zavaleta · Senior Software Engineer · Lima, Peru
    </p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
