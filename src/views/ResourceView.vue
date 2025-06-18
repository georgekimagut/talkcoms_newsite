<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      class_height="h-[65vh] bg-[#131f6b] pb-16 text-white"
      page_title="STORY"
      :big_pic="resource.pic"
      :page_statement="resource.title"
      :page_min_statement="resource.short_description"
      is_shuffled
    />
    <div class="w-full flex justify-center">
      <div class="w-[90%] flex justify-center flex-wrap">
        <div class="w-[30%] relative">
          <div class="absolute w-full flex justify-center z-20 top-[-80px]">
            <div class="w-[80%] bg-white pt-4 pb-4 p-2">
              <div class="w-full pb-4 border-b-1 border-[#82bc00]">
                <p class="font-semibold">Table of Contents</p>
              </div>
              <div class="content-body">
                <li>Heading</li>
                <li>Meeting and planning</li>
                <li>Implementation stage</li>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[70%] flex justify-center flex-wrap">
          <!-- contents of the resource -->
          <div v-html="resource.content" class="w-[80%] mt-20"></div>
          <div class="mt-32 flex justify-center flex-wrap">
            <p class="text-lg">Was this story helpful?</p>
            <div class="w-full flex justify-center mt-8">
              <RoundedButton
                button_link="#"
                button_text="No"
                button_icon="fa-solid fa-angle-right"
                :defaultColor="'#333'"
                :hoverColor="'#8dc63f'"
                :iconColor="'#262262'"
                button_circle_background="#262262"
                class="w-[100px]"
              />
              <RoundedButton
                class="ml-4"
                button_link="#"
                button_text="Yes"
                button_icon="fa-solid fa-angle-right text-white"
                :defaultColor="'#333'"
                :hoverColor="'#262262'"
                :iconColor="'#f5f5f5'"
                button_border="#8dc63f"
                button_background="#f5f5f5"
                button_circle_background="#8dc63f"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer  -->
    <Footer />
  </div>
</template>
<script>
import RoundedButton from "../components/buttons/RoundedButton.vue";
import HeroSection from "../components/HeroSection.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import { supabase } from "../store/supabase";

export default {
  name: "ResourceView",
  props: ["id", "type"],
  components: { Navbar, Spinner, HeroSection, RoundedButton, Footer },
  data() {
    return {
      page_is_loading: true,
      resource: [],
    };
  },
  async mounted() {
    this.page_is_loading = true;

    try {
      await this.get_resource();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
  methods: {
    async get_resource() {
      try {
        const { data, error } = await supabase
          .from("success_stories")
          .select("*")
          .eq("title", this.id)
          .limit(1);

        if (error) {
          console.log(error);
          return;
        }

        this.services = data.map((service) => {
          const { data: imageData } = supabase.storage
            .from("talkcoms")
            .getPublicUrl(`stories/${service.pic}`);

          return {
            ...service,
            imageUrl: imageData.publicUrl,
          };
        });

        //map data
        this.resource = data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
