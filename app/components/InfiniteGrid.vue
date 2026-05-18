<template>
  <div
    ref="root"
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 overflow-hidden"
    style="
      -webkit-mask-image: linear-gradient(
        to bottom,
        #000 55%,
        transparent 92%
      );
      mask-image: linear-gradient(to bottom, #000 55%, transparent 92%);
    "
  >
    <!-- Ambient grid (always faintly visible) -->
    <svg class="absolute inset-0 h-full w-full text-slate-500 opacity-[0.18]">
      <defs>
        <pattern
          ref="patternA"
          id="ig-grid-a"
          :width="GRID"
          :height="GRID"
          patternUnits="userSpaceOnUse"
        >
          <path
            :d="`M ${GRID} 0 L 0 0 0 ${GRID}`"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ig-grid-a)" />
    </svg>

    <!-- Cursor-revealed grid (masked to a circle around the pointer) -->
    <div
      ref="highlight"
      class="absolute inset-0"
      style="
        -webkit-mask-image: radial-gradient(
          280px circle at -500px -500px,
          #000,
          transparent
        );
        mask-image: radial-gradient(
          280px circle at -500px -500px,
          #000,
          transparent
        );
      "
    >
      <svg class="absolute inset-0 h-full w-full text-blue-400 opacity-60">
        <defs>
          <pattern
            ref="patternB"
            id="ig-grid-b"
            :width="GRID"
            :height="GRID"
            patternUnits="userSpaceOnUse"
          >
            <path
              :d="`M ${GRID} 0 L 0 0 0 ${GRID}`"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ig-grid-b)" />
      </svg>
    </div>

    <!-- Ambient brand glows -->
    <div
      class="absolute -right-[15%] -top-[20%] h-[45%] w-[45%] rounded-full bg-blue-500/15 blur-[120px]"
    />
    <div
      class="absolute -bottom-[25%] -left-[15%] h-[45%] w-[45%] rounded-full bg-fuchsia-500/15 blur-[120px]"
    />
  </div>
</template>

<script setup lang="ts">
// Vue port of the React "Infinite Grid" background — an infinitely scrolling
// grid with a cursor "flashlight" reveal. Recolored to the site palette.
import { ref, onMounted, onBeforeUnmount } from "vue";

const GRID = 44; // pattern cell size in px
const SPEED = 0.4; // px per frame

const root = ref<HTMLElement | null>(null);
const patternA = ref<SVGPatternElement | null>(null);
const patternB = ref<SVGPatternElement | null>(null);
const highlight = ref<HTMLElement | null>(null);

let offsetX = 0;
let offsetY = 0;
let rafId = 0;
let running = false;

function onMouseMove(e: MouseEvent) {
  const el = root.value;
  if (!el) return;
  const { left, top } = el.getBoundingClientRect();
  const mask = `radial-gradient(280px circle at ${e.clientX - left}px ${
    e.clientY - top
  }px, #000, transparent)`;
  const style = highlight.value?.style;
  if (style) {
    style.setProperty("mask-image", mask);
    style.setProperty("-webkit-mask-image", mask);
  }
}

// Direct DOM writes per frame — keeps the scroll smooth without re-rendering.
function frame() {
  offsetX = (offsetX + SPEED) % GRID;
  offsetY = (offsetY + SPEED) % GRID;
  for (const p of [patternA.value, patternB.value]) {
    if (!p) continue;
    p.setAttribute("x", String(offsetX));
    p.setAttribute("y", String(offsetY));
  }
  rafId = requestAnimationFrame(frame);
}

function start() {
  if (running) return;
  running = true;
  rafId = requestAnimationFrame(frame);
}

function stop() {
  running = false;
  cancelAnimationFrame(rafId);
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);

  // Honor reduced-motion: leave the grid static.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Pause the scroll animation while the hero is off-screen.
  if (root.value && "IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries) => {
      const visible = entries[0]?.isIntersecting ?? false;
      visible ? start() : stop();
    });
    observer.observe(root.value);
  } else {
    start();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);
  stop();
  observer?.disconnect();
});
</script>
