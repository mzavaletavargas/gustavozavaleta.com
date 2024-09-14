<template>
  <div class="h-screen flex flex-col items-center justify-center bg-black">
    <div
      class="absolute inset-0 bg-center bg-contain bg-no-repeat filter blur-sm opacity-80 pointer-events-none"
      style="background-image: url('/pisco.jpg')"
    ></div>

    <div
      class="h-screen relative bg-opacity-50 p-8 rounded-lg text-center flex flex-col justify-between"
    >
      <h1 class="lg:text-6xl line-clamp-2 text-4xl font-bold text-white mb-4">
        Gustavo's birthday!
      </h1>
      <p class=" lg:text-2xl text-gray-300 mb-32">
        You are invited, <span class="font-bold">{{ guestName }}</span
        >!
      </p>

      <p class="text-8xl font-mono font-bold opacity-80 mb-24">33</p>

      <p class="mb-12 text-xl text-white">Sept 21 - 6:30 PM</p>

      <div>
        <a
          href="link"
          target="_blank"
        >
          <button
            class="bg-neutral-500 mr-10 text-white p-3 hover:bg-neutral-700 transition"
          >
            Accept Invite
          </button>
        </a>

        <a href="/event.ics">
          <button
            class="bg-neutral-500 text-white p-3 hover:bg-neutral-700 transition"
          >
            Add Calendar
          </button>
        </a>
      </div>

      <p class="mt-2 text-gray-400">
        <a href="" target="_blank"
          >address</a
        >
      </p>

      <!-- <p class="text-lg italic text-gray-300">Gustavo's birthday!</p> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    guestName() {
      const urlPath = this.$route.params.slug
      return urlPath
        .replace('-', ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
  }
}
</script>
