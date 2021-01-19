<template>
  <div class="h-screen flex flex-col">
    <transition name="navbar">
      <nav v-if="!atHome" class="flex p-4">
        <div class="flex-grow">
          <Logo />
        </div>
        <ul>
          <li>
            <NuxtLink to="/info" class="text-2xl font-bold">Info</NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.navbar-enter-active,
.navbar-leave-active {
  overflow: hidden;
  transition: transform 0.3s ease-out;
  height: auto;
  transform: scaleY(1);
  transform-origin: top;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.navbar-enter,
.navbar-leave-to {
  transform: scaleY(0);
}
</style>
