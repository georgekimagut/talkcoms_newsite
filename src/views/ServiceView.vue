<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <div class="w-full flex justify-center flex-wrap h-[60vh] relative">
      <div class="w-full h-3/4 custom-linear-bg opacity-10 absolute"></div>
      <div
        class="w-[90%] flex h-full gap-4 overflow-hidden mt-16 absolute z-10"
      >
        <div class="w-1/2">
          <SmallTitle :text="this.id" />
          <BigTitle :text="service_title" title_class="mt-10" />
          <p class="w-3/4 mt-10">
            {{ service_description }}
          </p>
          <div class="w-fit mt-10">
            <RoundedButton
              :button_link="`/demo/${this.id}`"
              button_text="Book A Free Demo"
              button_icon="fa-solid fa-angle-right"
              :defaultColor="'#333'"
              :hoverColor="'#8dc63f'"
              :iconColor="'#262262'"
              button_circle_background="#262262"
            />
          </div>
        </div>
        <div class="w-1/2 h-full">
          <div class="w-full h-3/4 rounded-xl overflow-hidden">
            <img
              :src="service_pic"
              class="w-full min-w-full max-w-none h-auto max-h-none"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- main features -->
    <div class="w-full flex flex-wrap justify-center mt-32">
      <div class="w-[90%] flex overflow-x-hidden gap-4 hide-scrollbar relative">
        <div
          v-for="(channel, index) in channels"
          :key="index"
          class="shift-hover w-[25%] p-4 rounded-xl h-fit"
        >
          <div
            class="w-[50px] h-[50px] min-w-[50px] min-h-[50px] flex justify-center rounded-sm mt-6 relative overflow-hidden"
          >
            <div
              class="w-full h-full absolute z-5 opacity-30"
              :style="{ backgroundColor: random_bg }"
            ></div>
            <div class="h-full w-full absolute flex justify-center z-10">
              <div class="h-full flex flex-col justify-center">
                <i :style="{ color: random_bg }" :class="channel.icon"></i>
              </div>
            </div>
          </div>
          <div class="bottom-part">
            <h1 class="font-semibold text-xl mt-4 text-default">
              {{ channel.name }}
            </h1>
            <p class="mt-4">
              {{ channel.description }}
            </p>
          </div>
        </div>
      </div>
      <div v-html="content" class="w-full flex flex-wrap mt-10"></div>
    </div>
    <!-- content wrapper -->

    <!-- end of content wrapper -->
    <!-- packages -->
    <div
      v-if="packages != ''"
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center text-2xl">
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
              to="/contact-us"
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
    <!-- related story -->
    <div class="w-full flex flex-wrap mt-20 bg-white pb-8 pt-8">
      <div class="w-1/2 flex h-full justify-center">
        <div class="w-[90%] flex flex-wrap justify-center">
          <div class="w-[80%] rounded-2xl flex justify-center overflow-hidden">
            <img
              :src="related_story.pic"
              class="h-full max-w-none min-w-full min-h-full max-h-none"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="w-[90%] mt-6">
          <h1 class="text-5xl font-bold mt-4 text-default">
            {{ related_story.title }}
          </h1>
          <p class="mt-6">{{ related_story.client }}</p>
        </div>
        <div class="w-full mt-10 flex">
          <RoundedButton
            :button_link="`/resources/${success_story}/${related_story.title}`"
            button_text="Read Story"
            button_icon="fa-solid fa-angle-right text-white"
            :defaultColor="'#333'"
            :hoverColor="'#262262'"
            :iconColor="'#ffffff'"
            button_border="#8dc63f"
            button_background="#ffffff"
            button_circle_background="#8dc63f"
            class="p-1"
          />
        </div>
      </div>
    </div>
    <!-- faqs -->
    <div class="w-full flex justify-center mt-32 flex-wrap">
      <div class="w-full flex justify-center">
        <h1 class="text-4xl font-bold mt-4">FAQs</h1>
      </div>
      <div class="w-full flex justify-center mt-10">
        <Accordion :faqs="faqs" />
      </div>
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
import BigTitle from "../components/text/BigTitle.vue";
import SmallTitle from "../components/text/SmallTitle.vue";
import { text_colors } from "../store/store";
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
    SmallTitle,
    BigTitle,
    Cta,
  },
  data() {
    return {
      page_is_loading: true,
      is_side_hero: true,
      //service details
      service_title: "",
      service_description: "",
      service_pic: "",
      content: "",
      // features: [],
      packages: [],
      services: [],
      service_id: "",
      faqs: [],
      channels: [],
      related_story: "",
      success_story: "story",
      random_bg: "",
    };
  },
  async mounted() {
    this.page_is_loading = true;

    try {
      await this.get_service();
      this.randomize_color();
      await this.get_features();
      await this.get_packages();
      await this.get_channels();
      await this.get_faqs();
      await this.get_story();
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
    //randomize color
    randomize_color() {
      const random_color =
        text_colors[Math.floor(Math.random() * text_colors.length)];
      this.random_bg = random_color.color_name;
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
      } catch (error) {
        console.log(error);
      }
    },
    async get_channels() {
      try {
        const { data, error } = await supabase
          .from("channels")
          .select("*")
          .eq("service_id", this.service_id);

        if (error) {
          console.log(error);
          return;
        }
        this.channels = data;
      } catch (error) {
        console.log(error);
      }
    },
    async get_story() {
      try {
        const { data, error } = await supabase
          .from("success_stories")
          .select("*")
          .eq("service_id", this.service_id)
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
