<template>
  <div class="flex flex-1 flex-col max-w-2xl items-center">
    <nuxt-content :document="info" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const info = await $content('info').fetch()

    return {
      info,
    }
  },
}
</script>

<style>
.nuxt-content h2 {
  @apply text-2xl font-bold m-auto text-center pb-4;
}
</style>
