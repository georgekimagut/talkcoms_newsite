<template>
  <div class="w-full flex justify-center flex-wrap bg-white">
    <div class="w-[90%] flex">
      <div class="w-full flex justify-end">
        <a
          class="mr-2 inline-flex items-center"
          v-for="(social, index) in socials"
          :key="index"
          :href="social.phone ? `tel:${social.phone}` : social.link"
          :target="!social.phone ? '_blank' : null"
          :rel="!social.phone ? 'noopener noreferrer' : null"
        >
          <template v-if="social.phone">
            <span class="text-gray-500">Talk to an expert:</span>
            <span class="ml-1 border-b border-dotted">{{ social.phone }}</span>
          </template>
          <template v-else>
            <i :class="social.icon" class="text-secondary"></i>
          </template>
        </a>
      </div>
    </div>
  </div>
  <!-- end -->
  <div
    class="nav-bar w-full flex justify-center flex-wrap sticky top-0 bg-white z-[1000] border-b-1 border-[#e3e3e3]"
  >
    <div class="w-[90%] h-[12vh] flex justify-center">
      <div class="w-full flex">
        <div class="w-1/6 flex justify-start p-4">
          <router-link to="/"
            ><img :src="site_logo" class="custom-logo min-w-[50px]"
          /></router-link>
        </div>
        <div
          class="nav-bar-innner w-3/4 flex flex-nowrap h-full justify-center"
        >
          <router-link
            to="/"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
          >
            Home
          </router-link>
          <router-link
            to="#"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            @mouseenter="show_service_dropdown('product')"
            @mouseleave="hide_service_dropdown('product')"
          >
            <div class="w-full h-full flex flex-row">
              <div class="h-full flex flex-col justify-center">Products</div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i
                  class="fa-solid fa-angle-down transition-all duration-300 ease-in-out"
                  :style="{
                    transform: product_dropdown
                      ? 'rotate(180deg) translateY(2px)'
                      : 'rotate(0deg) translateY(0)',
                  }"
                ></i>
              </div>
            </div>
          </router-link>
          <router-link
            to="#"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            @mouseenter="show_service_dropdown('service')"
            @mouseleave="hide_service_dropdown('service')"
          >
            <div class="w-full h-full flex flex-row">
              <div class="h-full flex flex-col justify-center">Services</div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i
                  class="fa-solid fa-angle-down transition-all duration-300 ease-in-out"
                  :style="{
                    transform: service_dropdown
                      ? 'rotate(180deg) translateY(2px)'
                      : 'rotate(0deg) translateY(0)',
                  }"
                ></i>
              </div>
            </div>
          </router-link>
          <router-link
            to="/solutions"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
          >
            <div class="w-full h-full flex flex-row">
              <div class="h-full flex flex-col justify-center">
                Solutions By Industry
              </div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </router-link>
          <div
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4 relative drop-resource"
            active-class="text-secondary font-medium"
          >
            <div class="w-full h-full flex flex-row cursor-pointer">
              <div class="h-full flex flex-col justify-center">Resources</div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div
              class="w-[200px] absolute bg-white p-4 pt-0 top-[12vh] z-[100] resource-dropdown border-1 border-[#e3e3e3] rounded-sm"
            >
              <li class="mb-2 list-none">
                <router-link to="/blogs" class="custom-default-hover"
                  >Blogs</router-link
                >
              </li>
              <li class="mb-2 list-none">
                <router-link to="/success-stories" class="custom-default-hover"
                  >Success stories</router-link
                >
              </li>
              <li class="mb-2 list-none">
                <router-link to="/testimonials" class="custom-default-hover"
                  >Testimonials</router-link
                >
              </li>
              <li class="mb-2 list-none">
                <router-link to="/faqs" class="custom-default-hover"
                  >FAQs</router-link
                >
              </li>
              <li class="mb-2 list-none">
                <router-link to="/case-studies" class="custom-default-hover"
                  >Case Studies</router-link
                >
              </li>
            </div>
          </div>
          <router-link
            to="/about"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
            >About us</router-link
          >
        </div>
        <div class="w-1/6 flex justify-end p-4">
          <DefaultButton
            button_link="/contact-us"
            button_text="Contact Us"
            button_icon="fa-solid fa-angle-right"
            :defaultColor="'#333'"
            :hoverColor="'#8dc63f'"
            :iconColor="'#262262'"
            button_circle_background="#262262"
            class="w-fit h-fit"
          />
        </div>
      </div>
    </div>
    <!-- new service dropdown -->
    <div
      class="w-full h-[100vh] ml-0 absolute service-dropdown services top-[10vh] flex z-2000"
      v-show="service_dropdown"
    >
      <div class="w-full h-full relative">
        <div class="absolute w-full h-full z-20001 bg-default opacity-40">
          <!-- dark panel -->
        </div>
        <div
          class="absolute w-full h-fit flex flex-wrap justify-center"
          @mouseenter="show_service_dropdown('service')"
          @mouseleave="hide_service_dropdown('service')"
        >
          <div
            class="w-[95%] flex flex-wrap bg-white z-20005 border-t-1 border-[#e3e3e3] rounded-sm"
          >
            <div class="w-full flex pl-4 pr-4 mt-8">
              <h1 class="text-default ml-4 font-semibold text-sm uppercase">
                Services
              </h1>
            </div>
            <div class="w-full flex flex-wrap p-4 p-t-0 p-b-0">
              <div class="w-full flex justify-center">
                <div
                  v-for="(service, index) in services"
                  :key="index"
                  class="p-4 mr-2 w-[30%]"
                >
                  <h1 class="font-semibold mt-4">
                    <router-link :to="`/service/${service.name}`">{{
                      service.name
                    }}</router-link>
                  </h1>
                  <p class="mt-4">
                    {{ service.title_description }}
                  </p>
                  <div class="w-full mt-6 flex justify-end">
                    <Link
                      :link_to="`/service/${service.name}`"
                      link_text="READ MORE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- products dropdown -->
    <div
      class="w-full h-[100vh] ml-0 absolute service-dropdown services top-[10vh] flex z-3000"
      v-show="product_dropdown"
    >
      <div class="w-full h-full relative">
        <div class="absolute w-full h-full z-20001 bg-default opacity-40">
          <!-- dark panel -->
        </div>
        <div
          class="absolute w-full h-fit flex flex-wrap justify-center"
          @mouseenter="show_service_dropdown('product')"
          @mouseleave="hide_service_dropdown('product')"
        >
          <div
            class="w-[95%] flex bg-white z-20005 border-t-1 border-[#e3e3e3] rounded-sm flex-wrap"
          >
            <div class="w-full flex pl-4 pr-4 mt-8">
              <h1 class="text-default ml-4 font-semibold text-sm uppercase">
                Products
              </h1>
            </div>
            <div class="w-full flex flex-wrap p-4 p-t-0 p-b-0">
              <div class="w-full flex justify-center">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="p-4 mr-2 w-[30%]"
                >
                  <h1 class="font-semibold mt-2">
                    <router-link :to="`/service/${product.name}`">{{
                      product.name
                    }}</router-link>
                  </h1>
                  <p class="mt-2">
                    {{ product.title_description }}
                  </p>
                  <div class="w-full mt-6 flex justify-end">
                    <Link
                      :link_to="`/service/${product.name}`"
                      link_text="READ MORE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from "./buttons/RoundedButton.vue";
import { supabase } from "../store/supabase.js";
import Link from "./text/Link.vue";
import TopBar from "./TopBar.vue";

export default {
  name: "Navbar",
  components: { DefaultButton, Link },
  data() {
    return {
      service_dropdown: false,
      product_dropdown: false,
      site_logo: "/logo.svg",
      products: [],
      socials: [
        {
          link: "#",
          icon: "fa-solid fa-phone",
          name: "phone",
          phone: "0759200998",
        },
        {
          link: "https://www.facebook.com/TalkcomsLimited",
          icon: "fa-brands fa-facebook-f",
          name: "facebook",
        },
        {
          link: "https://x.com/TALKCOMS1",
          icon: "fa-brands fa-x-twitter",
          name: "twitter",
        },
        {
          link: "https://www.linkedin.com/company/talkcoms-ltd/mycompany",
          icon: "fa-brands fa-linkedin-in",
          name: "linkedin",
        },
        {
          link: "https://www.instagram.com/talkcoms",
          icon: "fa-brands fa-instagram",
          name: "linkedin",
        },
      ],
      services: [],
      fields: [
        { name: "Information Technology" },
        { name: "Healthcare" },
        { name: "Banking" },
        { name: "Saccos and Chamas" },
        { name: "Travel & Logistics" },
        { name: "Insurance" },
      ],
    };
  },
  mounted() {
    this.get_services();
  },
  methods: {
    show_service_dropdown(key) {
      if (key === "service") {
        this.service_dropdown = true;
      } else if (key === "product") {
        this.product_dropdown = true;
      }
    },
    hide_service_dropdown(key) {
      if (key === "service") {
        this.service_dropdown = false;
      } else if (key === "product") {
        this.product_dropdown = false;
      }
    },
    async get_services() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .order("created_at", { ascending: false });

        const retrieved_data = data.map((service) => {
          const { data: imageData } = supabase.storage
            .from("talkcoms")
            .getPublicUrl(`services/${service.pic}`);

          return {
            ...service,
            pic: imageData.publicUrl,
          };
        });
        retrieved_data.forEach((item) => {
          if (item.is_product === 1) {
            this.products.push(item);
          } else {
            this.services.push(item);
          }
        });

        if (error) {
          console.log(error);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
