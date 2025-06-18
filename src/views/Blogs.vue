<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      v-for="(blog, index) in blogs.slice(0, 1)"
      :key="index"
      class_height="h-[60vh]"
      page_title="BLOG"
      :page_statement="blog.title"
      :blog_category="blog.category"
      :blog_date="blog.date"
      :big_pic="blog.pic"
      :page_min_statement="blog.description"
      :blog_link="blog.title"
      is_blog
    />
    <!-- blog panel -->
    <div
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">BLOG</p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          <span class="text-secondary mr-2 ml-2">Latest</span>
          Blogs
        </h1>
      </div>
      <!-- latest blog -->
      <div class="w-[94%] flex justify-center mt-16">
        <div
          v-for="(blog, index) in blogs.slice(0, 3)"
          :key="index"
          class="w-[28%] m-2 bg-white overflow-hidden zoom-animate"
        >
          <div class="w-full h-[30vh] overflow-hidden">
            <img :src="blog.pic" class="h-full min-w-full w-auto max-w-none" />
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
            <router-link to="#"
              ><h3 class="font-semibold text-xl mt-4">
                {{ blog.title }}
              </h3></router-link
            >
            <div class="w-full flex pb-4 mt-8">
              <div
                class="w-[40px] h-[40px] bg-[#556080] rounded-full overflow-hidden flex justify-center"
              >
                <div class="h-full flex flex-col justify-center">
                  <i :class="blog.icon"></i>
                </div>
              </div>
              <div class="ml-4">
                <p class="font-semibold">{{ blog.writer }}</p>
                <p class="text-sm">{{ blog.writer_position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- panel -->
      <div class="w-[94%] flex flex-wrap justify-center mt-32">
        <div class="w-[90%] flex justify-center">
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
                class="h-full min-w-full w-auto max-w-none"
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
              <router-link to="#"
                ><h3 class="font-semibold text-xl mt-4">
                  {{ blog.title }}
                </h3></router-link
              >
              <div class="w-full flex pb-4 mt-8">
                <div
                  class="w-[40px] h-[40px] bg-[#556080] rounded-full overflow-hidden flex justify-center"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i :class="blog.icon"></i>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="font-semibold">{{ blog.writer }}</p>
                  <p class="text-sm">{{ blog.writer_position }}</p>
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
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Blogs",
  components: { HeroSection, Navbar, Spinner, Cta, Footer },
  data() {
    return {
      page_is_loading: true,
      blogs: [
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog.jpg",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caroline Mwikali",
          writer_position: "Marketing Lead",
        },
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog-1.png",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caleb Ruto",
          writer_position: "General Manager",
        },
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog-2.png",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caroline Mwikali",
          writer_position: "Marketing Lead",
        },
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog-3.png",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caroline Mwikali",
          writer_position: "Marketing Lead",
        },
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog-4.png",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caroline Mwikali",
          writer_position: "Marketing Lead",
        },
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog-5.png",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caroline Mwikali",
          writer_position: "Marketing Lead",
        },
        {
          title:
            "The role of AI lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ips",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
          category: "Artifical Intelligence",
          date: "12 May 2025",
          pic: "/carousel/blogs/blog-6.png",
          icon: "fa-solid fa-user text-xl text-white",
          writer: "Caroline Mwikali",
          writer_position: "Marketing Lead",
        },
      ],
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
  mounted() {
    this.load_page();
  },
  methods: {
    load_page() {
      setTimeout(() => {
        this.page_is_loading = false;
      }, 2000);
    },
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
  },
};
</script>
