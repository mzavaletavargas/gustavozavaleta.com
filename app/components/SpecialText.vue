<template>
  <span ref="containerRef" class="inline-flex font-mono leading-5">{{
    displayText
  }}</span>
</template>

<script setup lang="ts">
// Vue 3 port of the React "SpecialText" scramble-text component.
// Original used `motion/react` (React); this uses `motion-v` (Vue).
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useInView } from "motion-v";

const props = withDefaults(
  defineProps<{
    /** The final text to resolve to. */
    text: string;
    /** Ms between animation frames. */
    speed?: number;
    /** Seconds to wait before starting. */
    delay?: number;
    /** If true, only animate once the element scrolls into view. */
    inView?: boolean;
    /** If true (with inView), animate only the first time. */
    once?: boolean;
  }>(),
  { speed: 20, delay: 0, inView: false, once: true },
);

const RANDOM_CHARS = "_!X$0-+*#";

function getRandomChar(prev?: string): string {
  let char: string;
  do {
    char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]!;
  } while (char === prev);
  return char;
}

const containerRef = ref<HTMLSpanElement | null>(null);
const isInView = useInView(containerRef, {
  once: props.once,
  margin: "-100px",
});

// Render the real text on the server and on the first client paint — this
// keeps the text in the prerendered HTML (SEO) and avoids a hydration
// mismatch. The scramble is kicked off only after mount, on the client.
const displayText = ref(props.text);

let phase: "phase1" | "phase2" = "phase1";
let step = 0;
let interval: ReturnType<typeof setInterval> | null = null;
let startTimeout: ReturnType<typeof setTimeout> | null = null;
let started = false;

function stopInterval() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

// Phase 1 — grow a field of random characters across the width of the text.
function runPhase1() {
  const len = props.text.length;
  const currentLength = Math.min(step + 1, len);
  const chars: string[] = [];
  for (let i = 0; i < currentLength; i++) {
    chars.push(getRandomChar(i > 0 ? chars[i - 1] : undefined));
  }
  for (let i = currentLength; i < len; i++) chars.push(" ");
  displayText.value = chars.join("");

  if (step < len * 2 - 1) {
    step++;
  } else {
    phase = "phase2";
    step = 0;
  }
}

// Phase 2 — resolve the random characters into the real text, left to right.
function runPhase2() {
  const len = props.text.length;
  const revealed = Math.floor(step / 2);
  const chars: string[] = [];
  for (let i = 0; i < revealed && i < len; i++) chars.push(props.text[i]!);
  if (revealed < len) chars.push(step % 2 === 0 ? "_" : getRandomChar());
  for (let i = chars.length; i < len; i++) chars.push(getRandomChar());
  displayText.value = chars.join("");

  if (step < len * 2 - 1) {
    step++;
  } else {
    displayText.value = props.text;
    stopInterval();
  }
}

function startAnimation() {
  if (started) return;
  started = true;
  phase = "phase1";
  step = 0;
  displayText.value = " ".repeat(props.text.length);
  stopInterval();
  interval = setInterval(() => {
    if (phase === "phase1") runPhase1();
    else runPhase2();
  }, props.speed);
}

function maybeStart(shouldAnimate: boolean) {
  if (!shouldAnimate || started) return;
  // Respect reduced-motion: leave the real text untouched.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    started = true;
    return;
  }
  if (props.delay <= 0) startAnimation();
  else startTimeout = setTimeout(startAnimation, props.delay * 1000);
}

onMounted(() => {
  if (props.inView) {
    watch(isInView, (v) => maybeStart(v), { immediate: true });
  } else {
    maybeStart(true);
  }
});

onBeforeUnmount(() => {
  stopInterval();
  if (startTimeout) clearTimeout(startTimeout);
});
</script>
