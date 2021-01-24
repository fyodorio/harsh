<template>
  <div class="w-full border-solid border border-gray-700 p-2 rounded">
    <div class="flex items-center">
      <img
        class="w-8 h-8 rounded-full"
        :src="content.avatar"
        :alt="content.name"
      />
      <a
        :href="content.url"
        class="mx-2 hover:underline font-bold hover:text-blue-700"
        title="Reviewer profile"
        >{{ content.name }}</a
      >
      <div class="text-gray-600">{{ content.createdAt }}</div>
      <span class="flex-grow"></span>
      <button>
        <svg
          class="fill-current text-gray-600 hover:text-blue-700"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
          ></path>
        </svg>
      </button>
    </div>

    <div class="my-3 text-xl">{{ content.review }}</div>

    <div class="flex items-center text-gray-600">
      <button class="mr-2 hover:text-blue-700">Reply</button>
      <button class="hover:text-blue-700">Like</button>
    </div>
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
          url: 'https://en.wikipedia.org/wiki/Harry_Potter',
          review: 'Awesome',
          createdAt: '1d ago',
        }
      },
    },
  },
}
</script>
