<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <div class="w-full flex justify-center flex-wrap h-[75vh]">
      <!-- <div class="w-full h-3/4 custom-linear-bg opacity-20 absolute"></div> -->
      <!-- new hero section -->
      <div
        v-for="(blog, index) in all_blog_tracker.slice(0, 1)"
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
              <div class="bg-secondary h-[20px] w-[1px] ml-6">
                <!-- this is the green line -->
              </div>
              <span class="ml-6"> {{ format_date(blog.created_at) }} </span>
            </div>
            <div class="w-full mt-10 flex">
              <RoundedButton
                :button_link="`/resources/${is_blog}/${blog.title}`"
                button_text="Read Full Story"
                button_icon="fa-solid fa-angle-right text-white"
                :defaultColor="'#333'"
                :hoverColor="'#262262'"
                :iconColor="'#ffffff'"
                button_border="#8dc63f"
                button_background="#ffffff"
                button_circle_background="#8dc63f"
                class="w-fit"
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
            @click="change_category(index, category.name, 'Type')"
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
              @click="change_category(index, category.name, 'Category')"
              :class="category.active_category"
            >
              {{ category.name }}
            </div>
          </div>
        </div>
        <!-- other blogs -->
        <div class="w-full mt-10 flex justify-center flex-wrap">
          <CustomCard
            v-for="(blog, index) in blogs"
            :key="index"
            :card_pic="blog.pic"
            :card_title="blog.title"
            :blog_category="blog.category"
            :blog_date="`${format_date(blog.created_at)}`"
            card_class="w-[31%] min-w-[28%] ml-[1.5%] mb-4"
            :link_to="`/resources/${is_blog}/${blog.title}`"
            :writer="blog.writer"
            :position="blog.position"
            is_blog
          />
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
import RoundedButton from "../components/buttons/RoundedButton.vue";

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
    RoundedButton,
  },
  data() {
    return {
      page_is_loading: true,
      blogs: [],
      filtered_blogs: [],
      all_blog_tracker: [],
      categories: [],
      blog_categories: [],
      is_blog: "blog",
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
    change_category(item_index, item_name, action_type) {
      if (action_type == "Type") {
        this.categories = this.categories.map((category, index) => {
          return {
            ...category,
            category_class:
              index === item_index
                ? "bg-secondary text-white"
                : "text-secondary",
          };
        });
        //filter and show only specific blogs
        this.blogs = this.all_blog_tracker;
        if (item_name == "All") {
          return;
        }
        const selected_category = item_name;
        this.filtered_blogs = this.blogs.filter(
          (blog) => blog.blog_type === selected_category
        );
        // set blogs to filtered
        this.blogs = this.filtered_blogs;

        // actions for categories
      } else if (action_type == "Category") {
        this.blog_categories = this.blog_categories.map((category, index) => {
          return {
            ...category,
            active_category: index === item_index ? "text-secondary" : "",
          };
        });
        this.blogs = this.all_blog_tracker;
        if (item_name == "All") {
          return;
        }
        const selected_category = item_name;
        this.filtered_blogs = this.blogs.filter(
          (blog) => blog.category === selected_category
        );
        // set blogs to filtered
        this.blogs = this.filtered_blogs;
      }
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
        this.filtered_blogs = this.blogs;
        this.all_blog_tracker = this.blogs;
        const retrieved_types = [
          { name: "All", category_class: "text-secondary" },
        ];
        const retrieved_categories = [
          { name: "All", category_class: "text-secondary" },
        ];
        //take blog categories from blogs
        this.blogs.forEach((blog) => {
          //push types to types arrays
          retrieved_types.push({
            name: blog.blog_type,
            category_class: "text-secondary",
          });
          //push categories to categories array
          retrieved_categories.push({
            name: blog.category,
            active_category: false,
          });
        });
        // filter blogs with similar types
        this.categories = Object.values(
          retrieved_types.reduce((blog_type, item) => {
            blog_type[item.name] = item;
            return blog_type;
          }, {})
        );
        //filter blogs with similary
        this.blog_categories = Object.values(
          retrieved_categories.reduce((category, item) => {
            category[item.name] = item;
            return category;
          }, {})
        );
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
