<template>
  <div class="w-full h-[70vh] absolute z-[-10]">
    <div class="absolute w-fit h-full flex flex-col justify-end ml-[47%]">
      <div
        v-for="index in 6"
        :key="index"
        class="w-full h-[45px] flex flex-row gap-6"
      >
        <div
          v-for="index in 6"
          :key="index"
          class="w-[5px] h-[5px] rounded-full bg-third"
        ></div>
      </div>
    </div>
    <div class="absolute w-fit h-full flex flex-col ml-[90%] mt-[4vh]">
      <div
        v-for="index in 6"
        :key="index"
        class="w-full h-[45px] flex flex-row gap-6"
      >
        <div
          v-for="index in 5"
          :key="index"
          class="w-[5px] h-[5px] rounded-full bg-secondary"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroPattern",
};
</script>
