<template>
  <h2 class="text-secondary text-lg uppercase" :class>{{ text }}</h2>
</template>
<script>
export default {
  name: "SmallTitle",
  props: {
    text: { type: String, required: true },
    title_class: String,
  },
};
</script>
