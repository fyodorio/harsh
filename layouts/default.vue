<template>
  <div class="h-screen flex flex-col">
    <nav v-if="!atHome" class="flex">
      <Logo class="flex-grow" />
      <ul>
        <li><NuxtLink to="/info" class="text-2xl font-bold">Info</NuxtLink></li>
      </ul>
    </nav>
    <main class="flex flex-1">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      atHome: true,
    }
  },
  watch: {
    $route: 'routeChanged',
  },
  created() {
    this.routeChanged()
  },
  methods: {
    routeChanged() {
      this.atHome = this.$route.path === '/'
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
