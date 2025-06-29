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
        <div class="w-full h-full bg-black absolute opacity-60"></div>
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
        <div class="w-[90%] h-fit absolute z-20">
          <BigTitle
            :text="resource.title"
            title_class="mt-10 w-[90%] text-white text-5xl"
          />
          <p class="w-full text-white text-2xl mt-6">
            {{ resource.short_description ?? resource.description ?? "" }}
          </p>
          <!-- author -->
          <p class="w-full text-secondary mt-4">
            <span v-if="type === 'blog'"
              >By: {{ resource.writer }} ,
              {{ format_date(resource.created_at) }}</span
            >
            <span v-else class="text-2xl font-bold">{{ resource.client }}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- end of hero section -->

    <div class="w-full flex justify-center">
      <div class="w-[90%] flex">
        <!-- Sticky sidebar -->
        <div class="w-[30%] sticky top-[15vh] self-start">
          <div class="w-full pt-4 pb-4">
            <div
              class="w-full max-h-[50vh] overflow-y-scroll hide-scrollbar bg-white p-4"
            >
              <div class="w-full pb-4 border-b border-[#82bc00]">
                <p class="font-semibold">Table of Contents</p>
              </div>
              <ul class="content-body">
                <li class="list-disc hover:underline">Heading</li>
                <li class="list-disc hover:underline">Meeting and planning</li>
                <li class="list-disc hover:underline">Implementation stage</li>
                <li class="list-disc hover:underline">Implementation stage</li>
                <li class="list-disc hover:underline">Implementation stage</li>
                <li class="list-disc hover:underline">Implementation stage</li>
                <li class="list-disc hover:underline">Implementation stage</li>
                <!-- Add more as needed -->
              </ul>
            </div>
            <div v-if="type === 'blog'" class="mt-10 bg-white p-4">
              <div class="w-full bg-white pb-4 border-b border-[#82bc00]">
                <p class="font-semibold">Other Blogs</p>
              </div>
              <h3
                v-for="(blog, index) in blogs"
                :key="index"
                class="mt-2 font-semibold hover:underline"
              >
                <router-link
                  :to="`/resources/${is_blog}/${blog.title}`"
                  :class="resource.title === blog.title ? 'text-third' : ''"
                >
                  {{ blog.title }}</router-link
                >
              </h3>
            </div>
          </div>
        </div>

        <!-- Scrollable content -->
        <div class="w-[70%] pl-8">
          <div class="mt-10 space-y-20">
            <!-- contents of the resource -->
            <div
              v-html="resource.content || resource.article"
              class="w-[95%] ml-[5%] mt-20"
            ></div>
            <div class="w-full mt-32 flex justify-center flex-wrap">
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
import BigTitle from "../components/text/BigTitle.vue";

export default {
  name: "ResourceView",
  props: ["id", "type"],
  components: { Navbar, Spinner, HeroSection, RoundedButton, Footer, BigTitle },
  data() {
    return {
      page_is_loading: true,
      is_blog: "blog",
      resource: "",
      blogs: [],
    };
  },
  async created() {
    this.page_is_loading = true;

    try {
      await this.get_resource();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }

    //watch route changes
    this.$watch(
      () => this.$route.params,
      async () => {
        this.page_is_loading = true;

        try {
          await this.get_resource();
        } catch (error) {
          console.error("Loading failed:", error);
        } finally {
          this.page_is_loading = false;
        }
      }
    );
  },
  methods: {
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
          this.get_blogs();
        }
      } catch (error) {
        console.log(error);
      }
    },
    //get blogs
    async get_blogs() {
      try {
        const { data, error } = await supabase.from("blogs").select("title");

        if (error) {
          console.log(error);
          return;
        }

        this.blogs = data;
      } catch (error) {
        console.log(error);
      }
    },
    //change date format
    format_date(date_to_change) {
      const date = new Date(date_to_change);
      const date_options = { month: "long", day: "numeric", year: "numeric" };
      return date.toLocaleDateString("en-US", date_options);
    },
  },
};
</script>
