<template>
  <div>
   {{env}}
   <!-- <LinkThree
    class=""
    :href="'https://linktr.ee/efectobitcoin'"
    :headline="title"
    :description="description"
    :origin="appUrl"
    color="white"
  />
  <Twitter
    :href="twitterUrl"
    :headline="title"
    :description="description"
    :origin="appUrl"
    color="white"
  />
  <Instagram
    :href="instagramUrl"
    :headline="title"
    :description="description"
    :origin="appUrl"
    color="white"
  />
  <Facebook
    :href="facebookUrl"
    :headline="title"
    :description="description"
    :origin="appUrl"
    color="white"
  /> -->
  <p class="hidden text-black flex justify-center">
    I blog on
    <a href="https://mzavaletavargas.github.io/wiki"> EfectoBitcoin</a>
  </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 data: () => {
  return {
   env: process.env.NODE_ENV
  }
 }
})
</script>
