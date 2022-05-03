<template>
  <div>
    <span class="flex justify-center">
      I blog about
      <a class="text-fuchsia-500 dark:text-fuchsia-300" href="https://efectobitcoin.com"
        >&nbsp;crypto</a
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      env: process.env.NODE_ENV,
    };
  },
});
</script>
