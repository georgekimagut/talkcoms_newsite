<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <!-- new hero -->
    <HeroSection
      v-for="(story, index) in all_stories_tracker.slice(0, 1)"
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
      <div class="w-[90%] mt-8 flex justify-end">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="mr-4 cursor-pointer font-semibold custom-default-hover"
          @click="change_category(index, service.id)"
          :class="service.active_category"
        >
          {{ service.name }}
        </div>
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
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
import RoundedButton from "../components/buttons/RoundedButton.vue";
import CustomCard from "../components/cards/CustomCard.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import BigTitle from "../components/text/BigTitle.vue";
import SmallTitle from "../components/text/SmallTitle.vue";
import { supabase } from "../assets/js/supabase";

export default {
  name: "SuccesStories",
  components: {
    Spinner,
    Navbar,
    HeroSection,
    Footer,
    SmallTitle,
    BigTitle,
    RoundedButton,
    CustomCard,
  },
  data() {
    return {
      page_is_loading: true,
      success_stories: [],
      all_stories_tracker: [],
      filtered_stories: [],
      success_story: "story",
      services: [{ id: "0", name: "All", active_category: "" }],
    };
  },
  methods: {
    //change category
    change_category(item_index, item_id) {
      this.services = this.services.map((category, index) => {
        return {
          ...category,
          active_category: index === item_index ? "text-secondary" : "",
        };
      });
      // change categories
      this.success_stories = this.all_stories_tracker;
      if (item_id == "0") {
        return;
      }
      const selected_category = item_id;
      this.filtered_stories = this.success_stories.filter(
        (story) => story.service_id === selected_category
      );
      // set stories to filtered
      this.success_stories = this.filtered_stories;
    },
    //get stories
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
        this.all_stories_tracker = this.success_stories;
        this.filtered_stories = this.success_stories;
      } catch (error) {
        console.log(error);
      }
    },
    async get_services() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("id, name")
          .order("created_at", { ascending: false });
        data.forEach((service) => {
          this.services.push({
            id: service.id,
            name: service.name,
            active_category: false,
          });
        });
        if (error) {
          console.log(error);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    this.page_is_loading = true;

    try {
      await this.get_stories();
      await this.get_services();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
};
</script>
