<template>
  <h1 class="text-4xl font-extrabold" :class="title_class">
    {{ text }}
  </h1>
</template>
<script>
export default {
  name: "BigTitle",
  props: {
    text: { type: String, required: true },
    title_class: String,
  },
};
</script>
