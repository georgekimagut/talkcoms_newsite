<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <!-- hero section -->
    <div class="w-full flex justify-center">
      <div
        class="w-full flex justify-center h-[50vh] overflow-hidden relative"
        :style="{
          backgroundImage: `url('${resource.pic}')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }"
      >
        <div class="w-full h-full bg-black absolute opacity-50"></div>
        <div class="w-[96%] flex justify-end mt-2 absolute">
          <a href="#" class="mr-2"
            ><i class="fa-brands fa-facebook-f text-secondary text-lg"></i
          ></a>
          <a href="#" class="mr-2"
            ><i class="fa-brands fa-x-twitter text-secondary text-lg"></i
          ></a>
          <a href="#" class="mr-2"
            ><i class="fa-brands fa-whatsapp text-secondary text-lg"></i
          ></a>
          <a href="#" class="mr-2"
            ><i class="fa-brands fa-linkedin text-secondary text-lg"></i
          ></a>
        </div>
        <div class="w-[90%] h-fit flex justify-center flex-wrap absolute z-20">
          <BigTitle
            :text="resource.title"
            title_class="mt-10 w-[90%] text-center text-white text-5xl"
          />
          <p class="w-3/4 text-white text-center text-2xl mt-6">
            {{ resource.short_description ?? resource.description ?? "" }}
          </p>
        </div>
      </div>
    </div>
    <!-- end of hero section -->
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
          <div
            v-html="resource.content || resource.article"
            class="w-[80%] mt-20"
          ></div>
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
import { theme_colors, get_services } from "../store/store";
import { supabase } from "../store/supabase";
import BigTitle from "../components/text/BigTitle.vue";

export default {
  name: "ResourceView",
  props: ["id", "type"],
  components: { Navbar, Spinner, HeroSection, RoundedButton, Footer, BigTitle },
  data() {
    return {
      page_is_loading: true,
      resource: "",
      random_bg: "",
    };
  },
  async mounted() {
    this.page_is_loading = true;
    this.randomize_color();

    try {
      await this.get_resource();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
  methods: {
    randomize_color() {
      const random_color =
        theme_colors[Math.floor(Math.random() * theme_colors.length)];
      this.random_bg = random_color.color_name;
    },
    async get_resource() {
      try {
        //check the type of service before retrieval
        if (this.type === "story") {
          const { data, error } = await supabase
            .from("success_stories")
            .select("*")
            .eq("title", this.id)
            .limit(1);

          if (error) {
            console.log(error);
            return;
          }
          //map data
          this.resource = data[0];
        } else if (this.type === "blog") {
          //get blog
          const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("title", this.id)
            .limit(1);

          if (error) {
            console.log(error);
            return;
          }
          //map data
          this.resource = data[0];
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
