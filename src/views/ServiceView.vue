<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <div
      class="w-full flex justify-center flex-wrap h-[60vh] relative bg-white"
    >
      <div class="w-full h-3/4 custom-linear-bg opacity-20 absolute"></div>
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
    <div class="w-full flex flex-wrap justify-center bg-white py-30">
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
    </div>
    <!-- description -->
    <div class="w-full flex justify-center">
      <div class="w-[90%] flex mt-30 gap-8 flex-wrap relative">
        <ScrollDots :bg_color="random_bg" />
        <div ref="feature_section" class="w-full flex gap-8 relative z-10">
          <!-- Left: Image -->
          <div class="w-[40%] overflow-hidden rounded-xl sticky top-0 h-[80vh]">
            <img
              src="/articles/pic-3.png"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>

          <!-- Right: Features -->
          <div class="w-[60%] flex justify-end">
            <div
              class="w-[80%] overflow-hidden transition-all duration-500 relative"
              :class="{ 'overflow-y-scroll h-[80vh] pr-4': isInView }"
            >
              <h1
                class="text-5xl font-extrabold text-default sticky top-0 py-4"
              >
                Talkcoms Omnichannel
                <span class="text-secondary static">Features</span>
              </h1>
              <div
                v-for="(feature, index) in service_features"
                :key="index"
                class="w-[90%] py-4 border-b border-[#e3e3e3]"
              >
                <h1 class="text-xl font-semibold mt-4">{{ feature.title }}</h1>
                <p class="mt-4 text-[#828282]">
                  {{ feature.description }}
                </p>
              </div>
              <!-- call to action -->
              <div class="w-full flex mt-8">
                <RoundedButton
                  button_link="/contact"
                  button_text="Request Free Demo"
                  button_icon="fa-solid fa-angle-right"
                  :defaultColor="'#333'"
                  :hoverColor="'#8dc63f'"
                  :iconColor="'#262262'"
                  button_circle_background="#262262"
                />
                <RoundedButton
                  class="ml-4"
                  button_link="/contact"
                  button_text="Learn More"
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
    <!-- benefits -->
    <div class="w-full flex justify-center mt-30">
      <div class="w-[90%] flex mt-30 gap-8 flex-wrap relative">
        <div ref="feature_section" class="w-full flex gap-8 relative z-10">
          <!-- Right: Features -->
          <div class="w-[50%] flex">
            <div
              class="w-[90%] overflow-hidden transition-all duration-500 relative"
              :class="{ 'overflow-y-scroll h-[40vh] pr-4': isInView }"
            >
              <h1
                class="text-5xl font-extrabold text-default sticky top-0 py-4 text-secondary"
              >
                Why Choose
                <span class="text-default">Talkcoms Omnichannel CC</span>
              </h1>
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="w-[90%] py-4 border-b border-[#e3e3e3] flex gap-4"
              >
                <div class="">
                  <i
                    class="fa-regular fa-circle-check mt-6 text-2xl"
                    :style="{ color: random_bg }"
                  ></i>
                </div>
                <div class="">
                  <h1 class="text-xl font-semibold mt-4">
                    {{ benefit.title }}
                  </h1>
                  <p class="mt-4 text-[#828282]">
                    {{ benefit.description }}
                  </p>
                </div>
              </div>
              <!-- call to action -->
              <div class="w-full flex mt-8">
                <RoundedButton
                  button_link="/contact"
                  button_text="Book A Demo"
                  button_icon="fa-solid fa-angle-right"
                  :defaultColor="'#333'"
                  :hoverColor="'#8dc63f'"
                  :iconColor="'#262262'"
                  button_circle_background="#262262"
                />
              </div>
            </div>
          </div>
          <!-- Left: Image -->
          <div
            class="w-[50%] overflow-hidden rounded-xl sticky top-0 h-[80vh] relative"
          >
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
                src="/articles/pic-3.png"
                class="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of content wrapper -->
    <!-- packages -->
    <div
      v-if="packages != ''"
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
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
    <div class="w-full flex flex-wrap mt-16 bg-white py-16">
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
import ScrollDots from "../components/patterns/ScrollPattern.vue";
import Spinner from "../components/Spinner.vue";
import BigTitle from "../components/text/BigTitle.vue";
import SmallTitle from "../components/text/SmallTitle.vue";
import { text_colors } from "../store/store";
import { supabase } from "../store/supabase";

//scroll within features
import { ref, onMounted, onBeforeUnmount } from "vue";
const isInView = ref(false);
const feature_section = ref(null);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isInView.value = entry.isIntersecting;
    },
    {
      threshold: 0.3,
    }
  );
  if (feature_section.value) {
    observer.observe(feature_section.value);
  }
});

onBeforeUnmount(() => {
  if (observer && feature_section.value) {
    observer.unobserve(feature_section.value);
  }
});

//end of scrolling

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
    ScrollDots,
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
      channels: [],
      related_story: "",
      success_story: "story",
      random_bg: "",
      service_features: [
        {
          title: "Predictive Dialer",
          description:
            "Experience seamless and customer centric inbound call center services. From inquiries to issue resolution, we ensure every interaction leaves a positive impression.",
        },
        {
          title: "Real-Time Analytics",
          description:
            "Leverage real-time analytics and reporting tools to gain insights into agent performance, customer interactions, and overall contact center efficiency, enabling data-driven decision-making.",
        },
        {
          title: "Omnichannel Support",
          description:
            "Empower your agents to engage with customers across various channels, including voice, email, chat, and social media, ensuring a consistent and seamless customer experience.",
        },
        {
          title: "Quality Monitoring",
          description:
            "Implement quality monitoring tools to assess agent performance, evaluate customer interactions, and maintain service excellence across every touchpoint.",
        },
        {
          title: "Intelligent Call Routing",
          description:
            "Optimize call handling with intelligent routing algorithms. Ensure each call is directed to the most qualified agent, reducing wait times and enhancing customer satisfaction.",
        },
        {
          title: "Workforce Management",
          description:
            "Efficiently manage agent schedules, track attendance, and optimize workforce distribution to ensure a balanced and productive contact center environment.",
        },
        {
          title: "Interactive Voice Response (IVR)",
          description:
            "Implement customizable multi-level IVR menus to automate call routing and provide self-service options, streamlining the customer journey and improving overall efficiency.",
        },
        {
          title: "CRM System Integration",
          description:
            "Integrate with leading CRM systems to centralize customer data. Equip agents with comprehensive information to provide personalized interactions and build lasting customer relationships.",
        },
        {
          title: "Remote Agent Support",
          description:
            "Enable remote agents to deliver exceptional customer service from anywhere. Maintain operational continuity and adapt to evolving work environments.",
        },
      ],
      benefits: [
        {
          title: "Enhanced Customer Experience",
          description:
            "Provide a superior customer experience with omnichannel support, personalized service, and efficient query resolution. Our software ensures that every interaction is handled with care and professionalism.",
        },
        {
          title: "Increased Efficiency",
          description:
            "Improve your operational efficiency with intelligent call routing, automated workflows, and AI-powered analytics. This reduces response times and enhances agent productivity.",
        },
        {
          title: "Cost Saving",
          description:
            "Reduce operational costs by streamlining processes and optimizing resource allocation. Our cloud-based solution also eliminates the need for expensive on-premise infrastructure.",
        },
        {
          title: "Flexibility and Scalability",
          description:
            "Our digital contact center software is designed to grow with your business. Easily adapt to changing needs and scale your operations based on demand.",
        },
        {
          title: "Improved Decision-Making",
          description:
            "Make informed decisions with access to real-time data and advanced analytics. Identify areas for improvement, track performance, and implement strategies to enhance your customer service operations.",
        },
      ],
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
        console.log(this.packages);
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
