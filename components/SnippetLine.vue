<template>
  <div
    class="flex items-center p-2 w-full"
    :class="[
      fill !== 'none' ? fill : '',
      withBorder ? 'border-solid border border-gray-600 rounded-sm' : '',
    ]"
  >
    <SnippetLineNumber />
    <SnippetPlaceholder />
    <SnippetOrange />
    <SnippetBlue />
  </div>
</template>

<script>
export default {
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
}
</script>
