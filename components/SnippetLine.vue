<template>
  <div
    class="flex items-center p-2 w-full"
    :class="[
      fill !== 'none' ? fill : '',
      withBorder ? 'border-solid border border-gray-600 rounded-sm' : '',
    ]"
  >
    <SnippetLineNumber />
    <div v-if="version === 0" class="flex flex-grow">
      <SnippetPlaceholder class="w-1/4" />
      <SnippetOrange class="w-1/6" />
      <SnippetBlue class="flex-1" />
      <SnippetPlaceholder class="w-1/6" />
    </div>
    <div v-if="version === 1" class="flex flex-grow">
      <SnippetPlaceholder class="w-1/12" />
      <SnippetOrange class="w-1/4" />
      <SnippetBlue class="w-1/6" />
      <SnippetPlaceholder class="flex-1" />
    </div>
    <div v-if="version === 2" class="flex flex-grow">
      <SnippetPlaceholder class="w-1/2" />
      <SnippetOrange class="w-1/12" />
      <SnippetBlue class="flex-1" />
      <SnippetPlaceholder class="w-1/12" />
    </div>
    <div v-if="version === 3" class="flex flex-grow">
      <SnippetPlaceholder class="w-1/4" />
      <SnippetOrange class="w-1/6" />
      <SnippetBlue class="flex-1" />
      <SnippetPlaceholder class="w-1/6" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: 0,
    }
  },
  props: {
    withBorder: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: 'none',
    },
  },
  created() {
    this.version = this.getRandomInt(4)
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
  },
}
</script>
