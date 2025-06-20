<template>
  <div
    class="w-full flex justify-center"
    :class="class_height"
    :style="{ backgroundColor: bg_color }"
  >
    <div class="w-3/4 flex justify-center mt-16">
      <div class="w-1/2" :class="is_shuffled ? 'order-1' : 'order-2'">
        <p class="text-secondary w-3/4">{{ page_title }}</p>
        <h1 class="text-4xl font-extrabold mt-10 w-3/4">
          {{ page_statement }}
        </h1>
        <div v-if="is_blog" class="w-full flex mt-6">
          <span
            class="pr-4 pl-4 rounded-full text-sm bg-secondary text-white"
            >{{ blog_category }}</span
          >
          <div class="bg-secondary h-[20px] w-[1px] ml-6">
            <!-- this is the green line -->
          </div>
          <span class="ml-6 text-sm">{{ blog_date }}</span>
        </div>
        <p class="mt-10 w-3/4">
          {{ page_min_statement }}
        </p>
        <p v-if="has_link" class="mt-4">
          <router-link :to="blog_link" class="custom-link text-secondary mt-4">
            Read More
            <i class="fa-solid fa-angle-right text-xl ml-1 rotate-[-45deg]"></i>
          </router-link>
        </p>
        <RoundedButton
          v-if="has_demo_link"
          button_link="/contact-us"
          button_text="Get A Free Demo"
          button_icon="fa-solid fa-angle-right"
          :defaultColor="'#333'"
          :hoverColor="'#8dc63f'"
          :iconColor="'#262262'"
          button_circle_background="#262262"
          class="w-fit mt-4 p-2"
        />
        <div v-if="is_blog" class="w-full mt-4">
          <router-link :to="blog_link" class="custom-link text-secondary">
            Read More
            <i class="fa-solid fa-angle-right text-xl ml-1 rotate-[-45deg]"></i>
          </router-link>
        </div>
        <div v-if="is_service" class="w-full mt-4 flex">
          <RoundedButton
            v-if="has_demo"
            button_link="/contact-us"
            button_text="Get A Free Demo"
            button_icon="fa-solid fa-angle-right"
            :defaultColor="'#333'"
            :hoverColor="'#8dc63f'"
            :iconColor="'#262262'"
            button_circle_background="#262262"
            class="p-2"
          />
          <RoundedButton
            class="ml-4 p-2"
            button_link="/contact"
            button_text="Talk To Sales"
            button_icon="fa-solid fa-angle-right text-white"
            :defaultColor="'#333'"
            :hoverColor="'#262262'"
            :iconColor="'#f5f5f5'"
            button_border="#8dc63f"
            button_background="#f5f5f5"
            button_circle_background="#8dc63f"
          />
        </div>
        <!-- contact us page -->
        <div v-if="is_contact_us" class="w-full mt-10">
          <div class="w-3/4 flex h-[10vh] p-2 rounded-xl">
            <div
              class="w-[50px] h-full rounded-lg flex justify-center bg-secondary"
            >
              <div class="h-full flex flex-col justify-center">
                <i class="fa-solid fa-phone text-white text-xl"></i>
              </div>
            </div>
            <!-- content side -->
            <div class="ml-2">
              <h1 class="font-semibold">Phone</h1>
              <p class="">+254 746 433 163</p>
            </div>
          </div>
          <!-- email -->
          <div class="w-3/4 flex h-[10vh] p-2 rounded-xl">
            <div
              class="w-[50px] h-full rounded-lg flex justify-center bg-secondary"
            >
              <div class="h-full flex flex-col justify-center">
                <i class="fa-solid fa-envelope text-white text-xl"></i>
              </div>
            </div>
            <!-- content side -->
            <div class="ml-2">
              <h1 class="font-semibold">Email</h1>
              <p class="">support@talkcoms.co.uk</p>
            </div>
          </div>
          <!-- physical offices -->
          <div class="w-3/4 flex h-[10vh] p-2 rounded-xl">
            <div
              class="w-[50px] h-full rounded-lg flex justify-center bg-secondary"
            >
              <div class="h-full flex flex-col justify-center">
                <i class="fa-solid fa-location-dot text-white text-xl"></i>
              </div>
            </div>
            <!-- content side -->
            <div class="ml-2">
              <h1 class="font-semibold">Our Offices</h1>
              <p class="">The Well Mall, Karen</p>
              <p class="">Skyrise Plaza, Eldama Ravine</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 flex justify-center"
        :class="is_shuffled ? 'order-1' : 'order-2'"
      >
        <div v-if="small_pic" class="w-[30%] min-w-[30%] h-full mr-8 relative">
          <!-- review -->
          <div
            v-if="f_review"
            class="w-[200px] p-2 top-52 left-[75%] z-100 absolute bg-secondary rounded-full flex"
          >
            <img src="/icons/profile.png" class="h-full w-auto" />
            <div class="ml-[16px] h-full flex-col justify-center">
              <p class="text-sm">{{ f_review }}</p>
            </div>
          </div>
          <div class="h-full w-full overflow-hidden rounded-xl">
            <img :src="small_pic" class="h-full max-w-none" />
          </div>
        </div>
        <div
          class="h-full relative"
          :style="{ width: small_pic ? '70%' : '100%' }"
        >
          <!-- google stat -->
          <div
            v-if="sec_review"
            class="w-[200px] h-[100px] top-10 left-[75%] z-100 absolute"
          >
            <div class="h-full w-full relative">
              <di
                class="absolute mt-[-18px] w-full flex justify-center h-[40px] overflow-hidden"
              >
                <img src="/icons/google-g.svg" />
              </di>
              <div class="bg-white w-full h-full mt-[20px] rounded-xl">
                <p class="text-sm w-full flex justify-center pt-6">
                  200+ Reviews
                </p>
                <div class="w-full flex justify-center mt-2">
                  <img
                    v-for="index in 5"
                    :key="index"
                    src="/icons/Star.svg"
                    class="w-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- review -->
          <div
            v-if="sec_review"
            class="w-[200px] p-2 top-52 left-[75%] z-100 absolute bg-secondary rounded-full flex"
          >
            <img src="/icons/profile.png" class="h-full w-auto" />
            <div class="ml-[16px] h-full flex-col justify-center">
              <p class="text-sm">{{ sec_review }}</p>
            </div>
          </div>
          <div
            class="h-full w-full overflow-hidden rounded-xl flex justify-center"
          >
            <img
              :src="big_pic"
              class="h-auto w-auto min-h-full min-w-full max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RoundedButton from "./buttons/RoundedButton.vue";

export default {
  name: "HeroSection",
  components: { RoundedButton },
  props: {
    page_title: String,
    page_statement: String,
    page_min_statement: String,
    small_pic: String,
    big_pic: String,
    f_review: String,
    sec_review: String,
    class_height: String,
    blog_category: String,
    blog_date: String,
    blog_link: String,
    is_contact_us: Boolean,
    is_blog: Boolean,
    is_service: Boolean,
    has_demo: Boolean,
    is_shuffled: Boolean,
    has_link: Boolean,
    has_demo_link: Boolean,
    bg_color: String,
  },
};
</script>
