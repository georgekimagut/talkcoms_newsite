<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      class_height="h-[60vh]"
      page_title="SERVICES"
      page_statement="Smart Digital Solutions
    to Power Business Communication, Growth, and Efficiency"
      big_pic="/carousel/outsourced.jpg"
      small_pic="/carousel/about-2.png"
      f_review="Quick response time"
      sec_review="Amazing Service Delivery"
    />
    <!-- client and numbers  -->
    <Partners has_numbers="true" />
    <!-- services highlights -->
    <div
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">
          <router-link to="#">OUR SERVICES</router-link>
        </p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          Services <span class="text-secondary mr-2 ml-2">Tailored</span>
          To Meet Your Business Needs
        </h1>
      </div>
      <div class="w-[90%] flex justify-center mt-16">
        <div class="w-full flex justify-center flex-wrap">
          <!-- <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card h-[40vh] w-[45%] z-10 ml-[2.5%] flex flex-nowrap mb-4 relative"
          >
            <div
              class="w-[35%] absolute h-full flex justify-center overflow-hidden"
            >
              <img :src="service.pic" class="max-w-none max-h-none min-h-full
              min-w-fullj abso"
            </div>
            <div
              class="w-[65%] content bg-white h-full z-20 p-4 absolute ml-[35%]"
            >
              <img :src="service.icon" class="w-[45px] mt-4" />
              <h1 class="text-xl font-semibold text-default w-[96%] mt-6">
                {{ service.title }}
              </h1>
              <p class="mt-6 w-[96%]">{{ service.description }}</p>
              <div class="w-[96%] flex justify-end mt-6">
                <router-link to="#" class="custom-link text-secondary">
                  Get Started
                  <i
                    class="fa-solid fa-angle-right text-xl ml-1 rotate-[-45deg]"
                  ></i>
                </router-link>
                <router-link
                  to="single-service"
                  class="custom-link text-secondary ml-4"
                >
                  Read More
                  <i
                    class="fa-solid fa-angle-right text-xl ml-1 rotate-[-45deg]"
                  ></i>
                </router-link>
              </div>
            </div>
          </div>
        </div> -->
          <!-- end of prev -->
          <div
            v-for="(service, index) in services"
            :key="index"
            class="w-[28%] m-2 bg-white overflow-hidden zoom-animate"
          >
            <div class="w-full h-[30vh] flex justify-center overflow-hidden">
              <img
                :src="service.imageUrl"
                class="max-h-none min-h-full h-auto w-auto min-w-full max-w-none"
              />
            </div>
            <div class="p-2">
              <router-link to="#"
                ><h3 class="font-semibold text-xl">
                  {{ service.name }}
                </h3></router-link
              >
              <p class="mt-4">{{ service.title_description }}</p>
              <div class="w-full flex justify-end pb-4">
                <router-link to="#" class="custom-link text-secondary mt-12">
                  Get Started
                  <i
                    class="fa-solid fa-angle-right text-xl ml-2 rotate-[-45deg]"
                  ></i>
                </router-link>
                <router-link
                  :to="'/service/' + service.name"
                  class="custom-link text-secondary mt-12 ml-2"
                >
                  Read More
                  <i
                    class="fa-solid fa-angle-right text-xl ml-2 rotate-[-45deg]"
                  ></i>
                </router-link>
              </div>
            </div>
          </div>
          <!-- end of service 2 -->
        </div>
      </div>
    </div>
    <!-- how it works -->
    <div class="w-full flex mt-32 h-[80vh]">
      <div class="w-1/2 flex h-full justify-center">
        <div
          class="w-[60%] flex justify-center overflow-hidden h-full rounded-2xl"
        >
          <img
            src="/services/process.png"
            class="h-full max-w-none min-w-full min-h-full max-h-none"
          />
        </div>
      </div>
      <div class="w-1/2">
        <p class="text-secondary">HOW IT WORKS</p>
        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center w-3/4">
          From consultation to deployment — a clear and proven workflow
        </h1>
        <div
          v-for="(process, index) in processes"
          :key="index"
          class="flex w-[90%] mt-8"
        >
          <div class="w-[80px] min-w-[80px]">
            <div class="w-[70px] h-[70px] relative">
              <div
                class="h-full w-full absolute bg-secondary rounded-full opacity-50"
              ></div>
              <div class="absolute z-10 h-full w-full flex justify-center">
                <div class="h-full flex flex-col justify-center">
                  <span class="font-bold text-2xl text-secondary">{{
                    process.no
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[70%]">
            <h1 class="text-xl font-semibold">{{ process.title }}</h1>
            <p class="mt-2">{{ process.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- why choose us -->
    <div class="w-full flex justify-center mt-32">
      <div class="w-[90%] flex justify-center">
        <div class="w-1/2">
          <p class="text-secondary">WHY CHOOSE US</p>
          <h1 class="text-4xl font-bold mt-4 p-2">
            Discover The
            <span class="text-secondary mr-2 ml-2">Reasons</span> Why Brands
            Choose Us As Their Business Solutions Partner
          </h1>
          <div class="w-full flex justify-center flex-wrap mt-6">
            <div
              v-for="(reason, index) in reasons"
              :key="index"
              class="p-4 w-[48%] bg-white ml-[1%] mb-6 zoom-animate"
            >
              <h1 class="text-xl font-semibold">{{ reason.title }}</h1>
              <p class="mt-2">{{ reason.content }}</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex justify-center">
          <div
            class="w-[60%] flex justify-center overflow-hidden h-full rounded-2xl"
          >
            <img
              src="/services/why.png"
              class="h-full max-w-none min-w-full min-h-full max-h-none"
            />
          </div>
        </div>
      </div>
    </div>
    <Cta />
    <Footer />
  </div>
</template>
<script>
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/Navbar.vue";
import Partners from "../components/Partners.vue";
import Spinner from "../components/Spinner.vue";

import { supabase } from "../store/supabase.js";

export default {
  name: "Services",
  components: { Navbar, Spinner, HeroSection, Footer, Cta, Partners },
  data() {
    return {
      page_is_loading: true,
      processes: [
        {
          no: "01",
          title: "Meet With The Team",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
        {
          no: "02",
          title: "Make a Plan",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
        {
          no: "03",
          title: "Implementation & Deployment",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
      ],
      reasons: [
        {
          title: "Strategic Expertise",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
        {
          title: "Creative Innovation",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
        {
          title: "Data Driven Results",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
        {
          title: "Collaborative Partnerships",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. ",
        },
      ],
      services: [],
    };
  },
  async mounted() {
    this.page_is_loading = true;

    try {
      await this.get_services();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
  methods: {
    //get services
    async get_services() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("pic, title_description, name")
          .order("created_at", { ascending: false });

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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
