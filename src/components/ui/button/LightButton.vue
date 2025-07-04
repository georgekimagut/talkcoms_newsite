<template>
  <Button
    variant="ghost"
    class="hover-button rounded-full relative overflow-hidden h-fit w-fit bg-transparent btn-light flex flex-col justify-center py-[14px] px-[20px] cursor-pointer z-1 hover:pr-[45px] border-1 border-[#82bc00]"
  >
    <router-link
      :to="button_link"
      class="inline-flex items-center text-secondary"
    >
      {{ button_text }}
      <i
        class="fas fa-angle-right icon text-xl absolute opacity-0 inline-block text-secondary"
      ></i>
    </router-link>
  </Button>
</template>
<script>
export default {
  name: "DarkButton",
  props: {
    button_link: { type: String, required: true },
    button_text: { type: String, required: true },
  },
};
</script>
