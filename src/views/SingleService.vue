<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      class_height="h-[65vh] bg-white pb-16"
      :page_title="this.id"
      :big_pic="service_pic"
      :page_statement="service_title"
      :page_min_statement="service_description"
      is_service
      has_demo
    />
    <!-- other page details -->
    <div v-html="content" class="w-full flex flex-wrap mt-32"></div>
    <!-- features -->
    <div
      v-if="features != ''"
      class="w-full flex justify-center mt-32 pt-20 pb-20 bg-white"
    >
      <div class="w-[90%] flex flex-wrap justify-center">
        <div class="w-full">
          <p class="text-secondary">FEATURES</p>
          <h1 class="text-4xl font-bold mt-4">
            Talkcoms {{ id }}
            <span class="mr-2 ml-2 text-secondary">features</span>
          </h1>
          <div class="flex flex-wrap justify-center mt-20">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="w-[33%] flex flex-nowrap mb-20"
            >
              <div class="h-full">
                <i class="fa-regular fa-circle-check text-third"></i>
              </div>
              <div class="content-side ml-4">
                <p class="font-semibold">{{ feature.feature_name }}</p>
                <p class="mt-4">{{ feature.feature_description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- packages -->
    <div
      v-if="packages != ''"
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">
          <router-link to="#">PACKAGES</router-link>
        </p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          Our Pricing Plans
        </h1>
        <p class="flex justify-center mt-2">
          Aenean vitae felis commodo, ultricies augue in, lacinia ante. Maecenas
        </p>
      </div>
      <!-- the packages -->
      <div class="w-[90%] flex flex-wrap justify-center mt-16">
        <div
          v-for="(pack, index) in packages"
          :key="index"
          class="w-[22%] ml-[1.5%] relative flex flex-wrap justify-center h-fit"
        >
          <div
            v-if="pack.is_popular === true"
            class="w-[80%] flex justify-center text-sm bg-secondary rounded-t-sm text-white"
          >
            Popular
          </div>
          <div
            class="w-full rounded-xl border-1 p-4"
            :class="
              pack.is_popular === true ? 'border-[#82bc00]' : 'border-[#e3e3e3]'
            "
          >
            <p class="text-secondary font-semibold flex justify-center">
              {{ pack.package_name }}
            </p>
            <p class="mt-8 flex justify-center">
              {{ pack.description }}
            </p>
            <p v-if="pack.package_price" class="mt-8 flex justify-center">
              <span class="text-4xl font-extrabold text-default"
                >${{ pack.package_price }}</span
              >
              <span class="mr-2 ml-2 text-[#ababab] h-full flex justify-end"
                >/month</span
              >
            </p>
            <div class="w-full p-2 mt-15 border-t-1 border-[#e3e3e3]">
              <div v-html="pack.features"></div>
            </div>
            <router-link
              to="#"
              class="w-full flex justify-center p-2 rounded-sm mt-10"
              :class="
                pack.is_popular
                  ? 'bg-secondary text-white'
                  : 'border-1 border-[#131f6b] text-default btn-hover'
              "
              >Get Started</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- faqs -->
    <div class="w-full flex justify-center mt-32">
      <Accordion :faqs="faqs" />
    </div>
    <!-- Cta -->
    <Cta />
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
import Accordion from "../components/Accordion.vue";
import RoundedButton from "../components/buttons/RoundedButton.vue";
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import { supabase } from "../store/supabase";

export default {
  name: "SingleService",
  props: ["id"],
  components: {
    Spinner,
    Navbar,
    HeroSection,
    RoundedButton,
    Footer,
    Accordion,
    Cta,
  },
  data() {
    return {
      page_is_loading: true,
      //service details
      service_title: "",
      service_description: "",
      service_pic: "",
      content: "",
      features: [],
      packages: [],
      services: [],
      service_id: "",
      faqs: [],
    };
  },
  async mounted() {
    this.page_is_loading = true;

    try {
      await this.get_service();
      await this.get_features();
      await this.get_packages();
      await this.get_faqs();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
  methods: {
    async get_service() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .eq("name", this.id)
          .limit(1);

        if (error) {
          console.log(error);
          return;
        }

        this.services = data.map((service) => {
          const { data: imageData } = supabase.storage
            .from("talkcoms")
            .getPublicUrl(`services/${service.pic}`);

          return {
            ...service,
            imageUrl: imageData.publicUrl,
          };
        });

        //map data
        this.service_title = this.services[0].title_description;
        this.service_description = this.services[0].title_description;
        this.service_pic = this.services[0].imageUrl;
        this.content = this.services[0].description;
        this.service_id = this.services[0].id;
      } catch (error) {
        console.log(error);
      }
    },
    async get_features() {
      try {
        const { data, error } = await supabase
          .from("service_features")
          .select("*")
          .eq("service_id", this.service_id);

        if (error) {
          console.log(error);
          return;
        }
        this.features = data;
      } catch (error) {
        console.log(error);
      }
    },
    async get_packages() {
      try {
        const { data, error } = await supabase
          .from("service_packages")
          .select("*")
          .eq("service_id", this.service_id);

        if (error) {
          console.log(error);
          return;
        }
        this.packages = data;
        console.log(this.packages);
      } catch (error) {
        console.log(error);
      }
    },
    async get_faqs() {
      try {
        const { data, error } = await supabase
          .from("faqs")
          .select("*")
          .eq("service_id", this.service_id);

        if (error) {
          console.log(error);
          return;
        }
        this.faqs = data;
        console.log(this.faqs);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
