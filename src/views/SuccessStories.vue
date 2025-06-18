<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      v-for="(story, index) in success_stories.slice(0, 1)"
      :key="index"
      class_height="h-[75vh] bg-white pb-6"
      page_title="SUCCESS STORIES"
      :page_statement="story.title"
      :big_pic="story.pic"
      :page_min_statement="story.short_description"
      :blog_link="'/resources/' + story.title"
      has_link
      has_demo_link
    />
    <!-- story body -->
    <div class="w-full flex justify-center flex-wrap mt-32">
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">STORIES</p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          Stories from our clients
        </h1>
      </div>
      <div class="w-[94%] flex justify-center mt-16">
        <div
          v-for="(story, index) in success_stories"
          :key="index"
          class="w-[28%] m-2 bg-white overflow-hidden zoom-animate"
        >
          <div class="w-full h-[30vh] flex justify-center overflow-hidden">
            <img
              :src="story.pic"
              class="min-h-full min-w-full h-auto w-auto max-w-none"
            />
          </div>
          <div class="p-2">
            <router-link to="#"
              ><h3 class="font-semibold text-xl">
                {{ story.client }}
              </h3></router-link
            >
            <p class="mt-4 text-xl">{{ story.title }}</p>
            <div class="w-full flex justify-end pb-4">
              <router-link
                :to="'/resources/' + story.title"
                class="custom-link text-secondary mt-5"
              >
                Read More
                <i
                  class="fa-solid fa-angle-right text-xl ml-2 rotate-[-45deg]"
                ></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import { supabase } from "../store/supabase";

export default {
  name: "SuccesStories",
  components: { Spinner, Navbar, HeroSection, Footer },
  data() {
    return {
      page_is_loading: true,
      success_stories: [],
    };
  },
  methods: {
    async get_stories() {
      try {
        const { data, error } = await supabase
          .from("success_stories")
          .select("*");

        if (error) {
          console.log(error);
          return;
        }
        this.success_stories = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    this.page_is_loading = true;

    try {
      await this.get_stories();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
};
</script>
