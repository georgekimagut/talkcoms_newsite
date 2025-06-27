<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <div class="w-full flex justify-center flex-wrap h-[60vh]">
      <!-- <div class="w-full h-3/4 custom-linear-bg opacity-20 absolute"></div> -->
      <!-- new hero section -->
      <div
        v-for="(blog, index) in blogs.slice(0, 1)"
        :key="index"
        class="w-[90%] flex h-full gap-4 overflow-hidden mt-16"
      >
        <div class="w-1/2">
          <SmallTitle text="BLOGS" />
          <BigTitle :text="blog.title" title_class="mt-10 w-[90%]" />
          <p class="w-3/4 mt-10">
            {{ blog.description }}
          </p>
          <div class="w-full flex flex-wrap mt-10">
            <div class="w-full flex">
              <span class="bg-secondary rounded-full text-white pr-4 pl-4">
                {{ blog.category }}
              </span>
              <span class="ml-12"> {{ blog.created_at }} </span>
            </div>
            <div class="w-full mt-10">
              <Link
                text="READ FULL STORY"
                :link_to="`/blog/${this.id}`"
                class="text-third"
              />
            </div>
          </div>
        </div>
        <div class="w-1/2 h-full">
          <div class="w-full h-[90%] rounded-xl overflow-hidden">
            <img
              :src="blog.pic"
              alt="Blog image header"
              class="w-full min-w-full max-w-none h-auto max-h-none object-cover"
            />
          </div>
        </div>
      </div>
      <!-- end of new hero -->
    </div>
    <!-- blog panel -->
    <div
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-10"
    >
      <!-- panel -->
      <div class="w-[90%] flex flex-wrap justify-center mt-32">
        <div class="w-full flex justify-center">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="p-2 pr-4 pl-4 mr-2 rounded-full border-1 border-[#82bc00] flex justify-center cursor-pointer"
            :class="category.category_class"
            @click="change_category(index)"
          >
            {{ category.name }}
          </div>
        </div>
        <div class="w-[90%] flex mt-10">
          <div class="w-1/2">
            <h1 class="text-2xl font-bold p-2">Talkcoms Blog</h1>
          </div>
          <div class="w-1/2 flex justify-end">
            <div
              v-for="(category, index) in blog_categories"
              :key="index"
              class="mr-4 cursor-pointer font-semibold custom-default-hover"
              @click="change_blog_category(index)"
              :class="category.active_category"
            >
              {{ category.name }}
            </div>
          </div>
        </div>
        <!-- other blogs -->
        <div class="mt-10 flex justify-center flex-wrap">
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="w-[28%] m-2 mb-4 bg-white overflow-hidden zoom-animate"
          >
            <div class="w-full h-[30vh] overflow-hidden">
              <img
                :src="blog.pic"
                class="h-full min-w-full w-auto max-w-none object-cover"
              />
            </div>
            <div class="p-2">
              <div class="w-full flex mt-6">
                <span
                  class="pr-4 pl-4 rounded-full text-sm bg-secondary text-white"
                  >{{ blog.category }}</span
                >
                <div class="bg-secondary h-[20px] w-[1px] ml-6">
                  <!-- this is the green line -->
                </div>
                <span class="ml-6 text-sm">{{ blog.date }}</span>
              </div>
              <router-link :to="`/blog/${this.id}`"
                ><h3 class="font-semibold text-xl mt-4">
                  {{ blog.title }}
                </h3></router-link
              >
              <div class="w-full flex pb-4 mt-8">
                <div
                  class="w-[40px] h-[40px] bg-[#556080] rounded-full overflow-hidden flex justify-center"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-user text-white"></i>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="font-semibold">{{ blog.writer }}</p>
                  <p class="text-sm">{{ blog.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- cta -->
    <Cta />
    <Footer />
  </div>
</template>
<script>
import CustomCard from "../components/cards/CustomCard.vue";
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import BigTitle from "../components/text/BigTitle.vue";
import Link from "../components/text/Link.vue";
import { supabase } from "../store/supabase";
import SmallTitle from "../components/text/SmallTitle.vue";

export default {
  name: "Blogs",
  components: {
    HeroSection,
    Navbar,
    Spinner,
    Cta,
    Footer,
    Link,
    BigTitle,
    CustomCard,
    SmallTitle,
  },
  data() {
    return {
      page_is_loading: true,
      blogs: [],
      categories: [
        { name: "All", category_class: "text-secondary" },
        { name: "Articles", category_class: "text-secondary" },
        { name: "Webinars", category_class: "text-secondary" },
        { name: "Videos", category_class: "text-secondary" },
      ],
      blog_categories: [
        { name: "AI", active_category: false },
        { name: "Development", active_category: false },
        { name: "Information Tech", active_category: false },
        { name: "Data Science", active_category: false },
      ],
    };
  },
  async created() {
    this.page_is_loading = true;
    try {
      await this.get_blogs();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
  methods: {
    change_category(item_index) {
      this.categories = this.categories.map((category, index) => {
        return {
          ...category,
          category_class:
            index === item_index ? "bg-secondary text-white" : "text-secondary",
        };
      });
    },
    change_blog_category(item_index) {
      this.blog_categories = this.blog_categories.map((category, index) => {
        return {
          ...category,
          active_category: index === item_index ? "text-secondary" : "",
        };
      });
    },
    //get blogs
    async get_blogs() {
      try {
        const { data, error } = await supabase.from("blogs").select("*");

        if (error) {
          console.log(error);
          return;
        }

        this.blogs = data;
        console.log(this.blogs);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
