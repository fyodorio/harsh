<template>
  <div class="flex flex-1 items-center max-w-2xl">
    <div class="flex-1">
      <div class="bg-wave2 flex flex-1 justify-center">
        <button
          @click="prevReview()"
          class="bg-white hover:bg-gray-200 py-1 px-2 rounded border border-gray-700"
        >
          Previous
        </button>
      </div>

      <div
        class="flex flex-col items-center border-gray-700 border-l border-r p-4"
      >
        <div class="border-gray-700 bg-red-200 w-full p-2 mb-2">old code</div>
        <div class="border-gray-700 bg-green-200 w-full p-2 mb-2">new code</div>

        <ReviewContent :content="content" />

        <div class="border-gray-700 bg-yellow-200 w-full p-2 mt-2">
          some code
        </div>
        <div class="border-gray-700 bg-blue-200 w-full p-2 mt-2">
          some more code
        </div>
      </div>

      <div class="bg-wave2 flex flex-1 justify-center">
        <button
          @click="nextReview()"
          class="bg-white hover:bg-gray-200 py-1 px-2 rounded border border-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Reviews } from 'static/data/data'

export default {
  data() {
    return {
      content: Reviews[0],
      reviews: Reviews,
    }
  },
  methods: {
    prevReview() {
      const numberOfReviews = this.reviews.length
      const currentIndex = this.reviews.indexOf(this.content)
      const isFirst = currentIndex === 0
      this.content = isFirst
        ? this.reviews[numberOfReviews - 1]
        : this.reviews[currentIndex - 1]
    },
    nextReview() {
      const numberOfReviews = this.reviews.length
      const currentIndex = this.reviews.indexOf(this.content)
      const isLast = currentIndex === numberOfReviews - 1
      this.content = isLast ? this.reviews[0] : this.reviews[currentIndex + 1]
    },
  },
}
</script>
