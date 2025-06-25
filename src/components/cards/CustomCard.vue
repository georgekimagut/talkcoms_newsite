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
    <div class="w-full mt-4">
      <router-link :to="link_to"
        ><h3 class="font-semibold text-xl">{{ card_title }}</h3></router-link
      >
      <p class="mt-4">{{ card_description }}</p>
      <div class="w-full flex justify-end pb-4 mt-10">
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
  },
};
</script>
