<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      :small_title="this.id"
      :big_title="service.title_description"
      :hero_description="service.product_subtitle"
      :read_more_link="`/demo/${this.id}`"
      :hero_image="service.imageUrl"
      is_service
    />
    <!-- main features -->
    <div class="w-full flex flex-wrap justify-center bg-white py-30">
      <div
        class="w-[90%] flex justify-center overflow-x-hidden gap-4 hide-scrollbar relative"
      >
        <div
          v-for="(channel, index) in channels"
          :key="index"
          class="shift-hover w-[25%] p-4 rounded-xl"
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
    </div>
    <!-- portfolio -->
    <div v-if="portfolio_items != ''" class="w-full flex justify-center mt-4">
      <div class="w-[90%] flex justify-center flex-wrap">
        <div class="w-full flex justify-center">
          <SmallTitle text="PORTFOLIO" text_class="text-center w-full" />
        </div>
        <div class="w-full flex justify-center">
          <BigTitle
            text="For a Clean & Professional Look"
            title_class="text-default text-center mt-10"
          />
        </div>
        <div class="w-full flex justify-center mt-16 overflow-hidden gap-4">
          <CustomCard
            v-if="portfolio_items"
            v-for="(project, index) in portfolio_items"
            :key="index"
            :card_pic="project.pic"
            :card_title="project.name"
            card_class="w-[33%]"
            link_text="VISIT SITE"
            :link_to="project.link"
            has_external_link
            has_link
          />
        </div>
      </div>
    </div>
    <!-- description -->
    <!-- css only scroll -->
    <div class="w-full flex justify-center py-20">
      <div class="w-[90%] flex flex-wrap relative">
        <ScrollDots :bg_color="random_bg" />
        <!-- Sticky sidebar -->
        <div class="w-[40%] sticky top-[15vh] self-start">
          <div class="w-full overflow-hidden rounded-xl h-[80vh]">
            <img
              :src="service.feature_pic"
              class="w-full h-full object-cover rounded-xl imageReveal"
            />
          </div>
        </div>

        <!-- Scrollable content -->
        <div class="w-[60%] flex justify-end autoShow">
          <div
            class="w-[80%] overflow-hidden transition-all duration-500 relative"
          >
            <h1 class="text-5xl font-extrabold text-default sticky top-0 py-4">
              {{ this.id }}
              <span class="text-secondary static">Features</span>
            </h1>
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="w-[90%] py-4 border-b border-[#e3e3e3]"
            >
              <h1 class="text-xl font-semibold mt-4">
                {{ feature.feature_name }}
              </h1>
              <p class="mt-4 text-[#828282]">
                {{ feature.feature_description }}
              </p>
            </div>
            <!-- call to action -->
            <div class="w-full flex mt-8">
              <DarkButton
                button_link="/contact-us"
                button_text="Request Free Demo"
              />
              <LightButton
                v-if="!service.material_link"
                button_link="/contact-us"
                button_text="Learn More"
                class="ml-4"
              />
              <LightButton
                v-if="service.material_link"
                :button_link="service.material_link"
                button_text="Download Material"
                class="ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end of new scroll -->
    <!-- intergrations -->
    <div v-if="intergrations != ''" class="w-full flex justify-center mt-32">
      <div class="w-[90%] flex gap-4">
        <div class="w-[40%]">
          <div class="w-[90%] flex flex-wrap">
            <SmallTitle text="INTERGRATIONS" />
            <BigTitle
              title_class="mt-10"
              text="Customize your customer experience with custom intergrations"
            />
            <p class="mt-10">
              Create a unique customer experience, customized to your contact
              center operations. Our tools range from fully integrated partners
              like CRMs to digital channels and custom workflow builders.
            </p>
          </div>

          <div class="w-[90%] flex mt-20">
            <DarkButton button_link="/contact-us" button_text="Get Started" />
            <LightButton
              button_link="/contact-us"
              button_text="Learn More"
              class="ml-4"
            />
          </div>
        </div>
        <div class="w-[60%]">
          <div class="w-full flex flex-wrap">
            <div
              v-for="(intergration, index) in intergrations"
              :key="index"
              class="shift-hover w-[48%] mr-[2%] p-4 rounded-xl mb-4"
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
                    <i
                      :style="{ color: random_bg }"
                      class="fa-solid fa-check"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="bottom-part">
                <h1 class="font-semibold text-xl mt-4 text-default">
                  {{ intergration.feature_name }}
                </h1>
                <p class="mt-4">
                  {{ intergration.feature_description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PBX -->
    <!-- benefits -->

    <div class="w-full flex justify-center py-20 bg-third">
      <div class="w-[90%] flex flex-wrap relative">
        <ScrollDots :bg_color="random_bg" />
        <!-- Scrollable content -->
        <div class="w-[50%] flex justify-end">
          <div
            class="w-[90%] overflow-hidden transition-all duration-500 relative autoShow"
          >
            <h1 class="text-5xl font-extrabold text-white sticky top-0 py-4">
              Here’s Why You’ll Love Talkcoms'
              <span class="text-white">{{ this.id }}</span>
            </h1>
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="w-[90%] py-4 border-b border-[#e3e3e3] flex gap-4"
            >
              <div class="">
                <i
                  class="fa-regular fa-circle-check mt-6 text-2xl text-white"
                ></i>
              </div>
              <div class="">
                <h1 class="text-xl font-semibold text-default mt-4">
                  {{ benefit.feature_name }}
                </h1>
                <p class="mt-4">
                  {{ benefit.feature_description }}
                </p>
              </div>
            </div>
            <!-- call to action -->
            <div class="w-full flex mt-8">
              <DarkButton button_link="/contact-us" button_text="Get Started" />
            </div>
          </div>
        </div>
        <!-- Sticky sidebar -->
        <div class="w-[50%] sticky top-[15vh] self-start">
          <div class="w-full overflow-hidden rounded-xl h-[80vh]">
            <div class="w-full absolute">
              <div
                class="w-[300px] h-[300px] rounded-xl custom-linear-bg p-5 -z-10"
              ></div>
            </div>
            <div class="w-full h-full flex justify-end absolute">
              <div class="h-full flex flex-col justify-end">
                <div
                  class="w-[300px] h-[300px] rounded-xl custom-linear-bg p-5 -z-10"
                ></div>
              </div>
            </div>

            <div class="h-full w-full p-8 absolute z-20">
              <img
                :src="service.benefit_pic"
                class="w-full h-full object-cover rounded-xl imageReveal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of content wrapper -->
    <!-- if has free demo -->
    <div
      v-if="service.has_demo"
      class="w-full flex justify-center bg-white pb-20"
    >
      <div
        class="w-[80%] flex rounded-2xl h-[50vh] border-1 border-[#82bc00] mt-32 overflow-hidden"
      >
        <div class="w-[64%] mr-[1%] h-full p-4 flex flex-col justify-center">
          <BigTitle text="Experience the Power—Live!" title_class="m-4" />
          <p class="text-xl m-4">
            Book a free
            <span v-if="service.has_demo === 1">demo</span>
            <span v-else-if="service.has_demo === 2">site visit</span>
            <span v-else-if="service.has_demo === 3">call</span>
            and see how our solution can simplify your workflow and boost
            efficiency—live and personalized.
          </p>
          <LightButton
            button_link="/contact-us"
            :button_text="
              service.has_demo === 1
                ? 'BOOK A FREE DEMO'
                : service.has_demo === 2
                ? 'BOOK A SITE VISIT'
                : 'BOOK A FREE CALL'
            "
            class="m-4"
          />
        </div>
        <div class="w-[35%] flex justify-center overflow-hidden">
          <img :src="service.imageUrl" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <!-- packages -->
    <div
      v-if="packages != ''"
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36 pb-20"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center text-2xl">
          <SmallTitle text="PACKAGES" />
        </p>

        <h1 class="text-4xl font-extrabold mt-4 p-2 flex justify-center">
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
          <RoundedButton
            :button_link="`/resources/${success_story}/${related_story.title}`"
            button_text="Read Full Story"
            button_icon="fa-solid fa-angle-right text-white"
            :defaultColor="'#333'"
            :hoverColor="'#262262'"
            :iconColor="'#ffffff'"
            button_border="#8dc63f"
            button_background="#ffffff"
            button_circle_background="#8dc63f"
          />
        </div>
      </div>
    </div>
    <!-- Cta -->
    <Cta cta_class="pt-32" />
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
//new imports
import RoundedButton from "../../components/buttons/RoundedButton.vue";
import RoundedExternal from "../../components/buttons/RoundedExternal.vue";
import CustomCard from "../../components/cards/CustomCard.vue";
import Cta from "../../components/Cta.vue";
import Footer from "../../components/Footer.vue";
import HeroSection from "../../components/HeroSection.vue";
import Navbar from "../../components/Navbar.vue";
import ScrollDots from "../../components/patterns/ScrollPattern.vue";
import Spinner from "../../components/Spinner.vue";
import BigTitle from "../../components/text/BigTitle.vue";
import ExternalLink from "../../components/text/ExternalLink.vue";
import SmallTitle from "../../components/text/SmallTitle.vue";
import { text_colors } from "../../assets/js/store";
import { supabase } from "../../assets/js/supabase";
import DarkButton from "@/components/ui/button/DarkButton.vue";
import LightButton from "@/components/ui/button/LightButton.vue";

//end of scrolling

export default {
  name: "SingleService",
  props: ["id"],
  components: {
    Spinner,
    Navbar,
    RoundedButton,
    Footer,
    SmallTitle,
    BigTitle,
    Cta,
    ScrollDots,
    ExternalLink,
    RoundedExternal,
    CustomCard,
    HeroSection,
    LightButton,
    DarkButton,
  },
  data() {
    return {
      page_is_loading: true,
      is_side_hero: true,
      //service details
      service: "",
      service_title: "",
      service_description: "",
      service_pic: "",
      content: "",
      features: [],
      benefits: [],
      packages: [],
      intergrations: [],
      services: [],
      service_id: "",
      channels: [],
      portfolio_items: [],
      related_story: [],
      success_story: "story",
      random_bg: "",
    };
  },
  async created() {
    this.page_is_loading = true;
    this.randomize_color();

    try {
      await this.get_service();
      await this.get_portfolio_items();
      await this.get_main_service_features();
      await this.get_features();
      await this.get_packages();

      if (this.service_id != "") {
        this.get_story();
      }
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
        this.randomize_color();

        try {
          await this.get_service();
          await this.get_portfolio_items();
          await this.get_main_service_features();
          await this.get_features();
          await this.get_packages();

          if (this.service_id != "") {
            this.get_story();
          }
        } catch (error) {
          console.error("Loading failed:", error);
        } finally {
          this.page_is_loading = false;
        }
      }
    );
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
        this.service = this.services[0];
        this.service_title = this.services[0].title_description;
        this.service_description = this.services[0].product_subtitle;
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
        const retrieved_data = data;
        retrieved_data.forEach((feature) => {
          if (feature.is_benefit === true) {
            this.benefits.push(feature);
          } else if (feature.is_intergration === true) {
            this.intergrations.push(feature);
          } else {
            this.features.push(feature);
          }
        });
        // this.features = data;
      } catch (error) {
        console.log(error);
      }
    },
    //carousel scrollbar

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
      } catch (error) {
        console.log(error);
      }
    },
    async get_main_service_features() {
      try {
        const { data, error } = await supabase
          .from("main_service_features")
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
    async get_portfolio_items() {
      try {
        const { data, error } = await supabase
          .from("portfolio")
          .select("*")
          .eq("service_id", this.service_id);

        if (error) {
          console.log(error);
          return;
        }
        this.portfolio_items = data;
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
