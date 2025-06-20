<template>
  <div class="w-full flex justify-center flex-wrap pt-2 pb-2 bg-white">
    <div class="w-[90%]">
      <div class="w-1/2 flex just">sfsdfk</div>
      <div class="w-1/2 flex justify-end">
        <router-link
          v-for="(social, index) in socials"
          :key="index"
          :to="social.link"
        >
          <i :class="social.icon"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopBar",
  props: {
    socials: { type: Array, required: true },
  },
  mounted() {
    alert("mounted");
  },
};
</script>
