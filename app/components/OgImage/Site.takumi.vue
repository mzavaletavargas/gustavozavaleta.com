<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 80px;
      background-color: #0f172a;
      font-family: monospace;
    "
  >
    <div style="display: flex; font-size: 64px; font-weight: 700">
      <span style="color: #60a5fa">gustavo</span>
      <span style="color: #ffffff">.</span>
      <span style="color: #e879f9">hello()</span>
    </div>
    <div
      style="
        margin-top: 28px;
        font-size: 40px;
        font-weight: 700;
        color: #ffffff;
      "
    >
      {{ title }}
    </div>
    <div
      v-if="description"
      style="margin-top: 16px; font-size: 26px; color: #94a3b8"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ title?: string; description?: string }>(),
  {
    title: "Gustavo Zavaleta",
    description: "Software Engineer",
  },
);
</script>
