<template>
  <!-- ********************************* dots ************************************* -->
  <!-- Changed from sticky to absolute positioned background -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <!-- Each dot has random size (10px-20px) and random position -->
    <div
      class="absolute rounded-full"
      style="width: 40%; height: 60vh; top: 5%; left: 5%"
      :style="{ backgroundColor: bg_color }"
    ></div>
    <div
      class="absolute rounded-4xl opacity-5"
      style="
        width: 35%;
        height: 80vh;
        top: calc(70vh + 15%);
        left: 10%;
        background-color: #82bc00;
      "
    ></div>
    <!-- <div
      class="absolute rounded-2xl opacity-90 custom-"
      style="
        width: 23%;
        height: 30vh;
        top: calc(90vh + 35%);
        left: 20%;
        background-color: #131f6b;
      "
    ></div> -->
  </div>
  <!-- ********************************* end of dots ************************************* -->
</template>
<script>
export default {
  name: "ScrollDots",
  props: { bg_color: String },
};
</script>
