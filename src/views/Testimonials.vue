<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <!-- new hero -->
    <HeroSection
      v-for="(story, index) in success_stories.slice(0, 1)"
      :key="index"
      small_title="SUCCESS STORIES"
      :big_title="story.title"
      :hero_description="story.short_description"
      :read_more_link="`/resources/${success_story}/${story.title}`"
      :hero_image="story.pic"
      is_story
    />
    <!-- end of hero -->
    <!-- story body -->
    <div class="w-full flex justify-center flex-wrap mt-16">
      <div class="w-[90%]">
        <p class="text-secondary flex justify-center">STORIES</p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          Stories from our clients
        </h1>
      </div>
      <div class="w-[90%] flex justify-center gap-4 mt-16">
        <CustomCard
          v-for="(story, index) in success_stories"
          :key="index"
          :card_pic="story.pic"
          :card_title="story.client"
          :card_description="story.title"
          card_class="w-[31%] min-w-[28%] ml-[1.5%] mb-4"
          link_text="READ MORE"
          :link_to="`/resources/${success_story}/${story.title}`"
          has_link
        />
      </div>
    </div>
    <!-- testimonials -->
    <div class="w-full flex justify-center flex-wrap mt-32 bg-white py-10">
      <div class="w-[90%] flex justify-center flex-wrap mt-16 gap-2">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="w-[31%] mb-4 p-4 zoom-animate border-1"
        >
          <div class="w-full mt-4 flex">
            <div class="">
              <i class="fa-solid fa-user p-6 bg-third text-white text-lg"></i>
            </div>
            <div class="ml-[10px]">
              <h4 class="text-lg font-bold">{{ testimonial.reviewer }}</h4>
              <h2>
                {{ testimonial.company }}
              </h2>
            </div>
          </div>
          <div class="w-full">
            <p class="mt-4">
              {{ testimonial.review }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- footer & cta-->
    <Cta />
    <Footer />
  </div>
</template>
<script>
import RoundedButton from "../components/buttons/RoundedButton.vue";
import CustomCard from "../components/cards/CustomCard.vue";
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import BigTitle from "../components/text/BigTitle.vue";
import SmallTitle from "../components/text/SmallTitle.vue";
import { supabase } from "../assets/js/supabase";

export default {
  name: "Testimonials",
  components: {
    Spinner,
    Navbar,
    HeroSection,
    Footer,
    SmallTitle,
    BigTitle,
    RoundedButton,
    CustomCard,
    Cta,
  },
  data() {
    return {
      page_is_loading: true,
      success_stories: [],
      testimonials: [],
      success_story: "story",
    };
  },
  methods: {
    //get stories
    async get_stories() {
      try {
        const { data, error } = await supabase
          .from("success_stories")
          .select("*")
          .limit(6);

        if (error) {
          console.log(error);
          return;
        }
        this.success_stories = data;
      } catch (error) {
        console.log(error);
      }
    },
    async get_testimonials() {
      try {
        const { data, error } = await supabase.from("testimonials").select("*");

        if (error) {
          console.log(error);
          return;
        }
        this.testimonials = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.page_is_loading = true;

    try {
      await this.get_stories();
      await this.get_testimonials();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
};
</script>
