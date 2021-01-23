<template>
  <div class="flex flex-1 items-center max-w-2xl">
    <div class="flex-1">
      <div class="bg-wave2 flex flex-1 justify-center">
        <button
          @click="nextReview()"
          class="bg-white hover:bg-gray-200 py-1 px-2 rounded border border-gray-700"
        >
          Previous
        </button>
      </div>

      <div class="flex justify-center border-l border-r border-gray-700 py-2">
        <ReviewContent :content="content.review" />
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
import { sample } from 'lodash-es'
import { Reviews } from 'static/data/data'

export default {
  data() {
    return {
      content: Reviews[0],
      reviews: Reviews,
    }
  },
  methods: {
    nextReview() {
      this.content = sample(this.reviews)
    },
  },
}
</script>
