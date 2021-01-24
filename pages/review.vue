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

      <div class="flex-1 border-gray-700 border-l border-r p-4 overflow-hidden">
        <transition :name="isScrolledUp ? 'review-up' : 'review-down'">
          <div v-if="isReviewShown" class="flex flex-col items-center">
            <SnippetLine class="mb-2" with-border :fill="'bg-red-100'" />
            <SnippetLine class="mb-2" with-border :fill="'bg-green-100'" />

            <ReviewContent :content="content" />

            <SnippetLine class="mt-2" />
            <SnippetLine class="mt-2" />
          </div>
        </transition>
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
      isReviewShown: false,
      isScrolledUp: true,
    }
  },
  methods: {
    prevReview() {
      this.isScrolledUp = true
      this.isReviewShown = false
      const numberOfReviews = this.reviews.length
      const currentIndex = this.reviews.indexOf(this.content)
      const isFirst = currentIndex === 0
      this.content = isFirst
        ? this.reviews[numberOfReviews - 1]
        : this.reviews[currentIndex - 1]
      setTimeout(() => (this.isReviewShown = true), 0)
    },
    nextReview() {
      this.isScrolledUp = false
      this.isReviewShown = false
      const numberOfReviews = this.reviews.length
      const currentIndex = this.reviews.indexOf(this.content)
      const isLast = currentIndex === numberOfReviews - 1
      this.content = isLast ? this.reviews[0] : this.reviews[currentIndex + 1]
      setTimeout(() => (this.isReviewShown = true), 0)
    },
  },
  created() {
    this.isReviewShown = true
  },
}
</script>

<style>
.review-up-enter-active,
.review-down-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.4s ease-in-out;
}
.review-up-enter,
.review-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.review-down-enter-active,
.review-down-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.4s ease-in-out;
}
.review-down-enter,
.review-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
