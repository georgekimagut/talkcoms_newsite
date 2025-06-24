<template>
  <a
    :href="button_link"
    target="_blank"
    class="relative flex items-center rounded-full overflow-hidden group text-white transition-all duration-300 bg-default"
    :style="{
      backgroundColor: button_background,
      border: button_border ? `1px solid ${button_border}` : '',
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <!-- Green fill animation layer -->
    <span
      class="absolute left-0 top-0 h-full w-full z-0 transition-all duration-300"
      :style="{
        backgroundColor: hoverColor,
        transform: hovered ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.5s ease-in-out',
      }"
    ></span>

    <!-- Button text -->
    <span
      class="pl-6 pr-12 py-2 pt-3 pb-3 z-10 relative"
      :style="{ color: button_border ? button_border : '' }"
    >
      {{ button_text }}
    </span>

    <!-- Icon circle -->
    <span
      class="absolute right-0 h-full aspect-square flex items-center justify-center rounded-full z-20 transition-all duration-300"
      :style="{
        backgroundColor: button_circle_background,
        opacity: hovered ? 1 : 0,
        transitionDelay: hovered ? '0.35s' : '0s',
        transition:
          'opacity 0.3s ease-in-out, background-color 0.3s ease-in-out',
      }"
    >
      <i :class="button_icon"></i>
    </span>
  </a>
</template>

<script>
export default {
  name: "RoundedButton",
  props: {
    button_link: { type: String, required: true },
    button_text: { type: String, required: true },
    button_icon: { type: String, required: true },
    defaultColor: { type: String, default: "#444" },
    hoverColor: { type: String, default: "#8dc63f" },
    iconColor: { type: String, default: "#262262" },
    button_background: { type: String, default: "#262262" },
    button_border: { type: String, default: "" },
    button_circle_background: { type: String, default: "" },
  },
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style scoped>
.router-link {
  background-color: var(--default-color);
  position: relative;
}
</style>
