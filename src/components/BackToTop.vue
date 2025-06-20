<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed z-5000 bottom-6 right-[4%] bg-white p-2 px-3 rounded-sm cursor-pointer border-1 border-[#82bc00] hover:mb-2 transition-all duration-300"
    aria-label="Back to top"
  >
    <i class="fa-solid fa-angle-up text-3xl text-secondary"></i>
  </button>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
