<template>
  <buton class="flex justify-center p-2" :class="button_class">
    <div class="h-full flex flex-col justify-center">
      {{ button_text }}
    </div>
  </buton>
</template>
<script>
export default {
  name: "SquareButton",
  props: {
    hover_color: { String, default: "bg-secondary" },
    button_class: { String, default: "bg-default text-white" },
    button_text: { String, default: "Submit" },
  },
};
</script>
