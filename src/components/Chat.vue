<template>
  <!-- chat with us -->
  <div
    v-if="!small_chat"
    @click="small_chat = true"
    class="fixed z-1000 bottom-2 left-[5%] h-fit p-3 bg-third cursor-pointer shadow-2xl rounded-sm"
  >
    <i class="fa-regular fa-message text-2xl text-white"></i>
  </div>
  <!-- chat box -->
  <div
    v-show="small_chat"
    class="fixed z-1000 bottom-2 left-[5%] h-[70vh] w-[25%] bg-white rounded-2xl shadow-2xl overflow-hidden"
  >
    <div class="w-full flex justify-center p-2 bg-default h-[8vh]">
      <div class="w-[85%] h-full flex justify-center">
        <div class="h-full flex flex-col justify-center">
          <BigTitle
            text="Chat With Us "
            title_class="text-black text-center text-xl text-white"
          />
        </div>
      </div>
      <div class="w-[15%] h-full flex justify-end">
        <div class="h-full flex flex-col justify-center">
          <i
            @click="small_chat = false"
            class="fa-solid fa-angle-down text-white text-3xl cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
    <!-- chat body -->
    <div class="h-[62vh] w-full flex flex-col p-2">
      <div class="h-[80%] w-full">
        <div class="w-full msg-box">
          <div class="w-fit p-2 rounded-lg bg-body">
            Hello, how can we help you today?
          </div>
        </div>
      </div>
      <div
        class="h-[20%] w-full flex flex-row rounded-sm border-1 border-[#e3e3e3]"
      >
        <div class="w-[90%]">
          <textarea
            class="bg-body w-full h-full rounded-sm focus:outline-0 p-2 resize-none"
            placeholder="Type your message"
          ></textarea>
        </div>
        <div class="w-[10%] bg-body">
          <button class="border-0 cursor-pointer p-2">
            <i class="fa-solid fa-paper-plane text-[#7f7f7f] text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BigTitle from "./text/BigTitle.vue";

export default {
  name: "Chat",
  components: { BigTitle },
  data() {
    return {
      small_chat: false,
    };
  },
};
</script>
