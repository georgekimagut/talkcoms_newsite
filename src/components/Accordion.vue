<template>
  <div :class="accordion_class">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="accordion-item w-full flex justify-center flex-wrap p-2 pt-4 pb-4 rounded-lg border-1 border-[#bebebe] mt-4"
    >
      <div class="accordion-header w-full flex flex-nowrap">
        <div class="w-[15%] flex justify-center">
          <div class="h-full flex-col justify-center">
            <i
              :class="faq.icon"
              class="border-1 border-[#bebebe] p-2 rounded-sm"
            ></i>
          </div>
        </div>
        <div
          class="w-[70%] font-semibold cursor-pointer"
          @click="show_accordion(index)"
        >
          {{ faq.title }}
        </div>
        <div class="w-[15%] flex justify-center" @click="show_accordion(index)">
          <div class="h-full flex-col justify-center cursor-pointer">
            <i
              class="fa-solid transition-3"
              :class="faq.accordion_is_hidden ? 'fa-angle-up' : 'fa-angle-down'"
            ></i>
          </div>
        </div>
      </div>
      <!-- accordion body -->
      <div
        v-if="faq.accordion_is_hidden"
        class="accordion-body w-full flex justify-center transition-3"
      >
        <div class="w-[70%] pt-4 pb-4">
          {{ faq.content }}
        </div>
      </div>
    </div>
  </div>
  <!-- chat with us -->
  <div v-if="has_chat" class="w-full mt-32 flex justify-center">
    <div class="w-3/4">
      <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
        Still got <span class="text-secondary mr-2 ml-2">questions</span>
      </h1>
      <p class="flex justify-center">
        Can't find what you are looking for?
        <span class="underline cursor-pointer ml-2">Chat with us</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Accordion",
  props: {
    accordion_class: {
      type: String,
      default: "w-[80%] flex flex-wrap justify-center",
    },
    faqs: {
      type: Array,
      required: true,
    },
    has_chat: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    show_accordion(index) {
      this.faqs[index].accordion_is_hidden =
        !this.faqs[index].accordion_is_hidden;
    },
  },
};
</script>
