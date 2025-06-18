<template>
  <div
    class="nav-bar w-full sticky top-0 bg-white z-[1000] border-b-1 border-[#e3e3e3]"
  >
    <div class="w-full h-[10vh] flex justify-center">
      <div class="w-full flex">
        <div class="w-1/6 flex justify-end p-4">
          <router-link to="/"
            ><img :src="site_logo" class="custom-logo"
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
            <router-link
              to="/"
              class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
              active-class="text-secondary font-medium"
              >Home</router-link
            >
          </router-link>
          <router-link
            to="/services"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
            @mouseenter="show_service_dropdown"
            @mouseleave="hide_service_dropdown"
          >
            <div class="w-full h-full flex flex-row">
              <div class="h-full flex flex-col justify-center">Services</div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i class="fa-solid fa-angle-down"></i>
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

          <!-- <router-link
            to="/success"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
            >Success Stories</router-link
          > -->
          <router-link
            to="/about"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
            >About us</router-link
          >
          <div
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4 relative drop-resource"
            active-class="text-secondary font-medium"
          >
            <div class="w-full h-full flex flex-row cursor-pointer">
              <div class="h-full flex flex-col justify-center">Resource</div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div
              class="w-[200px] absolute bg-white p-4 pt-0 top-[10vh] z-[100] resource-dropdown border-1 border-[#e3e3e3] rounded-sm"
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
        </div>
        <div class="w-1/4 h-full flex flex-col justify-center">
          <div class="w-1/2">
            <DefaultButton
              button_link="/contact-us"
              button_text="Contact Us"
              button_icon="fa-solid fa-angle-right"
              :defaultColor="'#333'"
              :hoverColor="'#8dc63f'"
              :iconColor="'#262262'"
              button_circle_background="#262262"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- services dropdown -->
    <div
      class="w-full h-[100vh] ml-0 absolute service-dropdown services top-[10vh] flex z-2000"
      v-show="service_dropdown"
    >
      <div class="w-full h-full relative">
        <div class="absolute w-full h-full z-20001 bg-default opacity-40"></div>
        <div
          class="absolute w-full h-fit bg-white z-20005 border-t-1 border-[#e3e3e3] flex flex-wrap justify-center"
          @mouseenter="show_service_dropdown"
          @mouseleave="hide_service_dropdown"
        >
          <div class="w-[90%] flex">
            <div class="w-[70%] flex mt-8 flex-wrap p-4">
              <div class="w-[60%] flex flex-wrap">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="w-1/2 p-2 flex flex-nowrap mb-4"
                >
                  <div class="w-[40px] h-[40px] relative">
                    <div
                      class="w-full h-full absolute z-10 bg-secondary opacity-40 rounded-xl"
                    ></div>
                    <div
                      class="w-full h-full absolute flex justify-center z-20"
                    >
                      <div class="h-full flex flex-col justify-center">
                        <i class="text-secondary" :class="product.icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="ml-2">
                    <p class="text-third font-semibold text-sm">
                      <router-link :to="'/' + product.name">{{
                        product.name
                      }}</router-link>
                    </p>
                    <p class="mt-2 text-sm">{{ product.product_subtitle }}</p>
                  </div>
                </div>
              </div>
              <div class="w-[20%]">
                <p class="mt-2 mb-2 font-semibold">Services</p>
                <p
                  v-for="(service, index) in services"
                  :key="index"
                  class="mt-2 text-sm"
                >
                  <router-link
                    :to="'/service/' + service.name"
                    class="custom-default-hover"
                    >{{ service.name }}</router-link
                  >
                </p>
              </div>
              <div class="w-[20%]">
                <p class="mt-2 mb-2 font-semibold">Our Fields</p>
                <p
                  v-for="(filed, index) in fields"
                  :key="index"
                  class="mt-2 text-sm"
                >
                  <router-link to="#" class="custom-default-hover">{{
                    filed.name
                  }}</router-link>
                </p>
              </div>
              <!-- bottom bar -->
              <div class="border-t-1 border-[#e3e3e3] w-full p-2 mt-8 flex">
                <a
                  v-for="(social, index) in socials"
                  :key="index"
                  :href="
                    social.name === 'phone'
                      ? 'tel:' + social.phone
                      : social.link
                  "
                  target="_blank"
                  class="text-secondary mr-2"
                  ><i :class="social.icon"></i>
                </a>
              </div>
            </div>
            <div class="w-[30%] bg-body flex justify-center pt-4 pb-4">
              <div class="h-full flex-col justify-center">
                <img src="/services/pbx.png" />
                <p class="mt-2 font-semibold ml-2">Our Newest Product</p>
                <p class="mt-2 text-sm ml-2">
                  Check out the latest product from our collection
                </p>
                <p class="mt-4 ml-2">
                  <router-link
                    to="#"
                    class="custom-link text-secondary text-sm"
                  >
                    Know More
                    <i
                      class="fa-solid fa-angle-right text-sm ml-2 rotate-[-45deg]"
                    ></i>
                  </router-link>
                </p>
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

export default {
  name: "Navbar",
  components: { DefaultButton },
  data() {
    return {
      service_dropdown: false,
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
    show_service_dropdown() {
      this.service_dropdown = true;
    },
    hide_service_dropdown() {
      this.service_dropdown = false;
    },
    async get_services() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("icon, name, is_product, product_subtitle")
          .order("created_at", { ascending: false });

        data.forEach((item) => {
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
