<template>
  <div class="bg-body p-4 pb-16 zoom-animate" :class="card_class">
    <i class="text-secondary text-5xl" :class="icon_class"></i>
    <router-link :to="`/service/${card_title}`"
      ><h1 class="text-lg font-semibold mt-8 custom-default-hover">
        {{ card_title }}
      </h1></router-link
    >
    <p class="mt-8">{{ card_text }}</p>
  </div>
</template>
<script>
export default {
  name: "IconCard",
  props: {
    card_class: String,
    icon_class: String,
    card_title: String,
    card_text: String,
  },
};
</script>
