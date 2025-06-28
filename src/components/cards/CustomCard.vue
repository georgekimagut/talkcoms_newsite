<template>
  <div
    class="p-2 bg-white overflow-hidden zoom-animate h-fit"
    :class="card_class"
  >
    <div class="w-full h-[30vh] flex justify-center overflow-hidden">
      <img
        :src="card_pic"
        class="h-auto min-h-none min-w-full w-auto max-w-none object-cover"
      />
    </div>
    <div v-show="is_blog" class="w-full flex mt-6">
      <span class="pr-4 pl-4 rounded-full text-sm bg-secondary text-white">
        {{ blog_category }}
      </span>
      <div class="bg-secondary h-[20px] w-[1px] ml-6">
        <!-- this is the green line -->
      </div>
      <span class="ml-6 text-sm">{{ blog_date }}</span>
    </div>
    <div class="w-full mt-4">
      <router-link :to="link_to"
        ><h3 class="font-semibold text-xl">{{ card_title }}</h3></router-link
      >
      <p class="mt-4">{{ card_description }}</p>
      <div v-show="is_blog" class="w-full flex pb-4 mt-8">
        <div
          class="w-[40px] h-[40px] bg-[#556080] rounded-full overflow-hidden flex justify-center"
        >
          <div class="h-full flex flex-col justify-center">
            <i class="fa-solid fa-user text-white"></i>
          </div>
        </div>
        <div class="ml-4">
          <p class="font-semibold">{{ writer }}</p>
          <p class="text-sm">{{ position }}</p>
        </div>
      </div>
      <div v-show="has_link" class="w-full flex justify-end pb-4 mt-10">
        <Link
          :link_to="link_to"
          :link_text="link_text"
          v-if="!has_external_link"
        />
        <ExternalLink
          :link_to="link_to"
          :link_text="link_text"
          v-if="has_external_link"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Link from "../text/Link.vue";
import ExternalLink from "../text/ExternalLink.vue";

export default {
  name: "Card",
  components: { Link, ExternalLink },
  props: {
    card_pic: { type: String, required: true },
    card_title: { type: String, required: true },
    card_description: String,
    card_class: String,
    link_text: String,
    link_to: String,
    has_external_link: Boolean,
    has_link: Boolean,
    //blogs
    is_blog: Boolean,
    blog_category: String,
    blog_date: String,
    writer: String,
    position: String,
  },
};
</script>
