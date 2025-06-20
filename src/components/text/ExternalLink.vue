<template>
  <a
    :href="link_to"
    target="_blank"
    class="inline-block relative group pb-[1px]"
  >
    <div class="uppercase text-third text-sm">
      {{ link_text }}
    </div>
    <!-- Animated line -->
    <div
      class="absolute bottom-0 left-0 w-0 h-[2px] bg-third transition-all duration-300 ease-out group-hover:w-full"
    ></div>
  </a>
</template>

<script>
export default {
  name: "ExternalLink",
  props: { link_to: String, link_text: String },
};
</script>
