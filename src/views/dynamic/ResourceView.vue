<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full bg-white">
    <Navbar />
    <div class="w-full flex justify-center flex-wrap">
      <div class="w-[90%] flex flex-wrap">
        <!-- Sticky sidebar -->
        <div class="w-[30%] sticky top-[15vh] self-start">
          <div class="w-full pt-4 pb-4">
            <div
              class="w-full overflow-y-scroll hide-scrollbar bg-white p-4 border-1 border-[#e3e3e3]"
            >
              <div class="w-full pb-4 border-b border-[#82bc00]">
                <p class="font-semibold">Table of Contents</p>
              </div>
              <ul class="content-body px-4 mt-4">
                <li
                  v-for="(item, index) in table_of_contents"
                  :key="index"
                  class="list-disc"
                >
                  <a
                    :href="'#' + item.id"
                    class="custom-default-hover"
                    active-class="text-third"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Scrollable content -->
        <div class="w-[70%] pl-8">
          <div class="w-[95%] ml-[5%] mt-10 space-y-20">
            <!-- resource details -->
            <div class="w-full">
              <BigTitle :text="resource.Title" title_class="mt-4 text-2xl" />
              <!-- <p class="w-full mt-6">
                {{ resource.short_description ?? resource.description ?? "" }}
              </p> -->
              <!-- author -->
              <div class="w-full flex">
                <div class="w-1/2">
                  <p class="w-full text-secondary mt-4">
                    <span v-if="type === 'blog'"
                      >By: {{ resource.author }} ,
                      {{ format_date(resource.createdAt) }}</span
                    >
                    <span v-else class="font-bold">{{ resource.client }}</span>
                  </p>
                </div>
                <div class="w-1/2 flex justify-end">
                  <p class="w-full text-end mt-4">
                    <span v-if="type === 'blog'">
                      {{ resource.read_time }} mins</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <!-- image -->
            <div class="w-full h-[60vh] overflow-hidden mt-[-8vh]">
              <img
                :src="`${resource_image_url}/${resource.hero_media.url}`"
                class="w-full h-auto object-cover"
              />
            </div>

            <!-- contents of the resource -->
            <div
              ref="content_body"
              v-html="sanitized_resource || sanitized_resource"
              class="w-full mt-10 block"
            ></div>
            <div class="w-full mt-20 flex justify-center flex-wrap">
              <p class="text-lg">Was this helpful?</p>
              <div class="w-full flex justify-center flex-nowrap mt-8">
                <SquareButton
                  button_text="Yes, Thank You!"
                  button_class="bg-default border-1 text-white rounded-lg p-3 h-fit w-fit cursor-pointer"
                  hover_color="bg-secondary"
                />
                <SquareButton
                  button_text="No, not really"
                  button_class="bg-secondary ml-4 text-white rounded-lg p-3 h-fit w-fit cursor-pointer"
                  hover_color="bg-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer  -->
    <Cta class="mt-40" />
    <Footer />
  </div>
</template>
<script>
//new imports
import RoundedButton from "../../components/buttons/RoundedButton.vue";
import Footer from "../../components/Footer.vue";
import Navbar from "../../components/Navbar.vue";
import Spinner from "../../components/Spinner.vue";
import { supabase } from "../../assets/js/supabase";
import BigTitle from "../../components/text/BigTitle.vue";
import SquareButton from "../../components/buttons/SquareButton.vue";
import { baseUrl } from "../../assets/js/store";

import Cta from "../../components/Cta.vue";

//markup content
import DOMPurify from "dompurify";
import { marked } from "marked";

export default {
  name: "ResourceView",
  props: ["id", "type"],
  components: {
    Navbar,
    Spinner,
    RoundedButton,
    Footer,
    BigTitle,
    SquareButton,
    Cta,
  },

  data() {
    return {
      page_is_loading: true,
      has_no_hero: false,
      is_blog: "blog",
      resource: "",
      sanitized_resource: "",
      resource_image_url: baseUrl,
      // blogs: [],
      table_of_contents: [],
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
      this.$nextTick(() => {
        setTimeout(() => this.generate_table_of_contents(), 200);
      });
    }
  },
  methods: {
    //create table of contents
    generate_table_of_contents() {
      const headings = this.$refs.content_body.querySelectorAll("h1, h2, h3");
      this.table_of_contents = [];

      headings.forEach((heading, index) => {
        if (!heading.id) heading.id = `heading-${index}`;
        this.table_of_contents.push({
          id: heading.id,
          text: heading.innerText,
          level: heading.tagName,
        });
      });
      // console.log(this.table_of_contents);
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
          const response = await fetch(
            `${baseUrl}/api/blog-posts?filters[slug][$eq]=${this.id}&populate=*`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const response_data = await response.json();

          if (response_data.data) {
            const data = Array.isArray(response_data.data)
              ? response_data.data[0]
              : response_data.data;

            this.resource = data;
            let markdown = this.resource?.articles_section || "";
            marked.setOptions({
              headerIds: true,
              headerPrefix: "",
              mangle: false,
            });

            const html = marked.parse(markdown);
            this.sanitized_resource = DOMPurify.sanitize(html);
            console.log(data);
          } else {
            throw new Error("No data found in response");
          }

          // this.get_blogs();
        } else if (this.type === "case-study") {
          const { data, error } = await supabase
            .from("case_studies")
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
    //get blogs
    // async get_blogs() {
    //   try {
    //     const { data, error } = await supabase.from("blogs").select("title");

    //     if (error) {
    //       console.log(error);
    //       return;
    //     }

    //     this.blogs = data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    //change date format
    format_date(date_to_change) {
      const date = new Date(date_to_change);
      const date_options = { month: "long", day: "numeric", year: "numeric" };
      return date.toLocaleDateString("en-US", date_options);
    },
  },
};
</script>
