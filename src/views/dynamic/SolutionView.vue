<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      :small_title="this.id"
      :big_title="solution.title"
      :hero_description="solution.description"
      :read_more_link="`/demo/${this.id}`"
      :hero_image="solution.pic"
      is_service
    />

    <!-- advantages section -->
    <div class="w-full flex justify-center mt-32 py-16">
      <div class="w-[90%] flex flex-wrap relative">
        <!-- Sticky sidebar -->
        <div class="w-[40%] sticky top-[15vh] self-start">
          <div class="w-full overflow-hidden rounded-xl h-[80vh]">
            <img
              :src="solution.main_section_pic"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <!-- Scrollable content -->
        <div class="w-[60%] flex justify-end">
          <div
            class="w-[80%] overflow-hidden transition-all duration-500 relative"
          >
            <SmallTitle :text="`Our Impact in ${this.id} `" />
            <h1 class="text-5xl font-extrabold text-default sticky top-0 py-4">
              {{ solution.section_title }}
            </h1>
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="w-[90%] py-4 border-b border-[#e3e3e3] flex flex-nowrap"
            >
              <div class="">
                <i
                  class="fa-solid fa-circle-check text-default mt-4 text-xl"
                ></i>
              </div>
              <div class="ml-[10px]">
                <p class="mt-2"><span></span>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- solutions -->
    <div class="w-full flex justify-center mt-32 bg-white py-16">
      <div class="w-[90%] flex gap-4">
        <IconCard
          v-if="related_solutions.length >= 1"
          v-for="(related_solution, index) in related_solutions"
          :key="index"
          card_class="w-[25%]"
          :icon_class="related_solution.icon"
          :card_title="related_solution.name"
          :card_text="related_solution.title_description"
        />
      </div>
    </div>
    <!-- call to action -->
    <div class="w-full flex justify-center bg-white pb-20">
      <div
        class="w-[80%] flex rounded-2xl h-[50vh] border-1 border-[#82bc00] mt-32 overflow-hidden"
      >
        <div class="w-[64%] mr-[1%] h-full p-4 flex flex-col justify-center">
          <BigTitle text="Experience the Power—Live!" title_class="m-4" />
          <p class="text-xl m-4">
            Get in touch and see how our solution can simplify your workflow and
            boost efficiency—live and personalized.
          </p>

          <LightButton
            button_link="/contact-us"
            button_text="Read Full Story"
            class="m-4"
          />
        </div>
        <div class="w-[35%] flex justify-center overflow-hidden">
          <img :src="solution.pic" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <!-- case study -->
    <div
      v-if="related_story"
      class="w-full flex flex-wrap mt-16 bg-white py-16"
    >
      <div class="w-1/2 flex h-full justify-center">
        <div class="w-[90%] flex flex-wrap justify-center">
          <div class="w-[80%] rounded-2xl flex justify-center overflow-hidden">
            <img
              :src="related_story.pic"
              class="h-full max-w-none min-w-full min-h-full max-h-none object-cover"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="w-[90%] mt-6">
          <h1 class="text-5xl font-bold mt-4 text-default">
            {{ related_story.title }}
          </h1>
          <p class="mt-6">{{ related_story.short_description }}</p>
          <p class="mt-6">{{ related_story.client }}</p>

          <div class="w-full h-[26px] flex flex-col justify-center mt-16">
            <p>
              Product/Service:
              <span class="p-2 border-1 border-[#007cba] rounded-full ml-4">
                {{ this.id }}
              </span>
            </p>
          </div>
        </div>
        <div class="w-full mt-10 flex">
          <LightButton
            :button_link="`/resources/${success_story}/${related_story.title}`"
            button_text="Read Full Story"
          />
        </div>
      </div>
    </div>
    <!-- footer and cta -->
    <Cta />
    <Footer />
  </div>
</template>
<script>
//new imports
import Spinner from "../../components/Spinner.vue";
import Navbar from "../../components/Navbar.vue";
import RoundedButton from "../../components/buttons/RoundedButton.vue";
import { supabase } from "../../assets/js/supabase";
import SmallTitle from "../../components/text/SmallTitle.vue";
import BigTitle from "../../components/text/BigTitle.vue";
import Footer from "../../components/Footer.vue";
import Cta from "../../components/Cta.vue";
import CustomCard from "../../components/cards/CustomCard.vue";
import IconCard from "../../components/cards/IconCard.vue";
import HeroSection from "../../components/HeroSection.vue";
import LightButton from "@/components/ui/button/LightButton.vue";

export default {
  name: "SolutionView",
  props: ["id"],
  components: {
    Spinner,
    Navbar,
    RoundedButton,
    SmallTitle,
    BigTitle,
    Footer,
    Cta,
    CustomCard,
    IconCard,
    LightButton,
    HeroSection,
  },
  data() {
    return {
      page_is_loading: true,
      solution: "",
      solution_id: "",
      features: [],
      related_solutions: [],
      product_ids: [],
      related_story: "",
      success_story: "case-study",
    };
  },
  async created() {
    this.page_is_loading = true;
    try {
      await this.get_solution();
      await this.get_products();
      if (this.solution_id != "") {
        this.get_features();
        this.get_study();
      }
    } catch (error) {
      console.log("Loading error:", error);
    } finally {
      this.page_is_loading = false;
    }

    //watch route changes
    this.$watch(
      () => this.$route.params,
      async () => {
        this.page_is_loading = true;

        try {
          await this.get_solution();
        } catch (error) {
          console.error("Loading failed:", error);
        } finally {
          this.page_is_loading = false;
        }
      }
    );
  },
  methods: {
    async get_solution() {
      try {
        const { data, error } = await supabase
          .from("solutions_by_industry")
          .select("*")
          .eq("name", this.id);
        if (error) {
          console.log(error);
          return;
        }
        //map data
        this.solution = data[0];
        this.solution_id = this.solution.id;
        this.product_ids = this.solution.solutions;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
    //get features
    async get_features() {
      try {
        const { data, error } = await supabase
          .from("solutions_features")
          .select("*")
          .eq("solution_id", this.solution_id);

        if (error) {
          console.log(error);
          return;
        }
        this.features = data;
        // this.features = data;
      } catch (error) {
        console.log(error);
      }
    },
    //get solutions
    async get_products() {
      // Clear the array first to avoid duplicates
      this.related_solutions = [];

      try {
        const promises = this.solution.solutions.map(async (solution_id) => {
          try {
            const { data, error } = await supabase
              .from("services")
              .select("name, icon, title_description")
              .eq("id", solution_id);

            if (error) throw error;
            return data; // data is an array
          } catch (error) {
            console.log("Error fetching product:", error);
            return []; // Return empty array on error
          }
        });

        // Wait for all promises and flatten the array of arrays
        const results = await Promise.all(promises);
        this.related_solutions = results.flat(); // Flatten the nested arrays

        console.log("Final related solutions:", this.related_solutions);
      } catch (error) {
        console.log("Error in Promise.all:", error);
      }
    },
    // get story
    async get_study() {
      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .eq("solution_id", this.solution_id)
          .limit(1);

        if (error) {
          console.log(error);
          return;
        }
        this.related_story = data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
