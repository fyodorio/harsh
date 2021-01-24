<template>
  <div class="w-full border-solid border border-gray-700 p-2 rounded">
    <div class="flex items-center">
      <img
        class="w-8 h-8 rounded-full"
        :src="content.avatar"
        :alt="content.name"
      />
      <div class="mx-2">{{ content.name }}</div>
      <div class="text-gray-600">{{ content.createdAt }}</div>
    </div>
    <div class="my-2">{{ content.review }}</div>
    <div class="text-gray-600">Controls</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {
          id: '0',
          avatar:
            'https://pbs.twimg.com/profile_images/424700029916295168/ykqUxKm1.jpeg',
          name: 'Harry Potter',
          review: 'Awesome',
          createdAt: '1d ago',
        }
      },
    },
  },
}
</script>
