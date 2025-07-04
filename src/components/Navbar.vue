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
        <div class="w-1/6 flex justify-start p-4 w-16">
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
            to="#"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            @mouseenter="show_service_dropdown('solution')"
            @mouseleave="hide_service_dropdown('solution')"
          >
            <div class="w-full h-full flex flex-row">
              <div class="h-full flex flex-col justify-center">
                Solutions By Industry
              </div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i
                  class="fa-solid fa-angle-down transition-all duration-300 ease-in-out"
                  :style="{
                    transform: solutions_dropdown
                      ? 'rotate(180deg) translateY(2px)'
                      : 'rotate(0deg) translateY(0)',
                  }"
                ></i>
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
              class="w-[200px] absolute bg-white p-4 pt-0 top-[12vh] z-[100] resource-dropdown border-1 border-[#e3e3e3] rounded-b-sm"
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
        <div class="w-1/6 flex justify-end p-4 btn-side">
          <DarkButton button_link="/contact-us" button_text="Contact Us" />
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
            class="w-[95%] flex h-[40vh] bg-white z-20005 border-t-1 border-[#e3e3e3] rounded-b-sm flex-wrap"
          >
            <div class="w-full h-[5vh] flex pl-4 pr-4">
              <h1
                class="text-default ml-4 font-semibold text-sm uppercase pt-4"
              >
                Services
              </h1>
            </div>
            <div class="w-full h-[35vh] flex flex-wrap p-4 p-t-0 p-b-0">
              <div class="w-full h-full flex justify-center">
                <div
                  v-for="(service, index) in services"
                  :key="index"
                  class="p-4 mr-2 w-[30%] h-full flex flex-col justify-around"
                >
                  <div class="w-full h-3/4">
                    <h1 class="font-semibold mt-2">
                      <router-link :to="`/service/${service.name}`">{{
                        service.name
                      }}</router-link>
                    </h1>
                    <p class="mt-2">
                      {{ service.title_description }}
                    </p>
                  </div>
                  <div class="w-full h-1/4 flex">
                    <Link
                      :link_to="`/service/${service.name}`"
                      link_text="READ MORE"
                      class="h-fit"
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
          class="absolute w-full flex flex-wrap justify-center"
          @mouseenter="show_service_dropdown('product')"
          @mouseleave="hide_service_dropdown('product')"
        >
          <div
            class="w-[95%] flex h-[40vh] bg-white z-20005 border-t-1 border-[#e3e3e3] rounded-b-sm flex-wrap"
          >
            <div class="w-full h-[5vh] flex pl-4 pr-4">
              <h1
                class="text-default ml-4 font-semibold text-sm uppercase pt-4"
              >
                Products
              </h1>
            </div>
            <div class="w-full h-[35vh] flex flex-wrap p-4 p-t-0 p-b-0">
              <div class="w-full h-full flex justify-center">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="p-4 mr-2 w-[30%] h-full flex flex-col justify-around"
                >
                  <div class="w-full h-3/4">
                    <h1 class="font-semibold mt-2">
                      <router-link :to="`/service/${product.name}`">{{
                        product.name
                      }}</router-link>
                    </h1>
                    <p class="mt-2">
                      {{ product.title_description }}
                    </p>
                  </div>
                  <div class="w-full h-1/4 flex">
                    <Link
                      :link_to="`/service/${product.name}`"
                      link_text="READ MORE"
                      class="h-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- solutions dropdown -->
    <div
      class="w-full h-[100vh] ml-0 absolute service-dropdown services top-[10vh] flex z-3000"
      v-show="solutions_dropdown"
    >
      <div class="w-full h-full relative">
        <div class="absolute w-full h-full z-20001 bg-default opacity-40">
          <!-- dark panel -->
        </div>
        <div
          class="absolute w-full flex flex-wrap justify-center"
          @mouseenter="show_service_dropdown('solution')"
          @mouseleave="hide_service_dropdown('solution')"
        >
          <div
            class="w-[60%] flex h-fit bg-white z-20005 border-t-1 border-[#e3e3e3] rounded-b-sm flex-wrap"
          >
            <div class="w-1/2 flex flex-wrap pl-4 pr-4">
              <h1 class="text-default font-semibold text-sm uppercase pt-4">
                By Industry
              </h1>
              <div class="w-full mt-4 pb-6">
                <p
                  v-for="(industry, index) in industries"
                  :key="index"
                  class="mt-2 custom-default-hover w-fit"
                >
                  <router-link :to="`/solution/${industry.name}`">{{
                    industry.name
                  }}</router-link>
                </p>
              </div>
            </div>
            <div class="w-1/2 flex flex-wrap pl-4 pr-4">
              <h1 class="text-default font-semibold text-sm uppercase pt-4">
                By Department
              </h1>
              <div class="w-full mt-4 pb-6">
                <p
                  v-for="(dep, index) in departments"
                  :key="index"
                  class="mt-2 custom-default-hover w-fit"
                >
                  <router-link :to="`/solution/${dep.name}`">{{
                    dep.name
                  }}</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- phone navigation bar -->
  <div
    class="w-full flex justify-center flex-wrap sticky top-0 z-[1000] phone-navigation"
  >
    <div class="w-full bg-white flex justify-center">
      <div class="w-[90%] flex mt-6 py-4">
        <div class="w-1/2">
          <router-link to="/"
            ><img :src="site_logo" class="custom-logo min-w-[50px]"
          /></router-link>
        </div>
        <div class="w-1/2 flex justify-end">
          <i
            class="fa-solid fa-bars text-2xl rounded-sm text-white p-4 bg-third"
            @click="phone_navigation = !phone_navigation"
          ></i>
        </div>
      </div>
    </div>
    <!-- dropdowns -->
    <div
      v-show="phone_navigation"
      class="w-full bg-white flex justify-center h-[100vh]"
    >
      <div class="nav-bar-innner w-[90%] h-full">
        <li class="list-none">
          <router-link
            to="/"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
          >
            Home
          </router-link>
        </li>
        <li class="list-none">
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
        </li>
        <li class="list-none">
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
        </li>
        <li class="list-none">
          <router-link
            to="#"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            @mouseenter="show_service_dropdown('solution')"
            @mouseleave="hide_service_dropdown('solution')"
          >
            <div class="w-full h-full flex flex-row">
              <div class="h-full flex flex-col justify-center">
                Solutions By Industry
              </div>
              <div class="h-full flex flex-col justify-center ml-1 mt-1">
                <i
                  class="fa-solid fa-angle-down transition-all duration-300 ease-in-out"
                  :style="{
                    transform: solutions_dropdown
                      ? 'rotate(180deg) translateY(2px)'
                      : 'rotate(0deg) translateY(0)',
                  }"
                ></i>
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
              class="w-[200px] absolute bg-white p-4 pt-0 top-[12vh] z-[100] resource-dropdown border-1 border-[#e3e3e3] rounded-b-sm"
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
        </li>
        <li class="list-none">
          <router-link
            to="/about"
            class="pl-4 pr-4 h-full flex flex-col justify-center transition duration-500 ease-in-out p-4"
            active-class="text-secondary font-medium"
            >About us</router-link
          >
        </li>
      </div>
    </div>
  </div>
  <!-- drop down  -->
</template>
<script>
import DefaultButton from "./buttons/RoundedButton.vue";
import { supabase } from "../assets/js/supabase.js";
import Link from "./text/Link.vue";
import DarkButton from "./ui/button/DarkButton.vue";

export default {
  name: "Navbar",
  components: { DefaultButton, Link, DarkButton },
  data() {
    return {
      service_dropdown: false,
      product_dropdown: false,
      solutions_dropdown: false,
      phone_navigation: false,
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
      departments: [],
      industries: [],
    };
  },
  created() {
    this.get_services();
    this.get_solutions();
  },
  methods: {
    show_service_dropdown(key) {
      if (key === "service") {
        this.service_dropdown = true;
      } else if (key === "product") {
        this.product_dropdown = true;
      } else if (key === "solution") {
        this.solutions_dropdown = true;
      }
    },
    hide_service_dropdown(key) {
      if (key === "service") {
        this.service_dropdown = false;
      } else if (key === "product") {
        this.product_dropdown = false;
      } else if (key === "solution") {
        this.solutions_dropdown = false;
      }
    },
    async get_services() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("id, name, title_description, is_product")
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
    //get solutions
    async get_solutions() {
      try {
        const { data, error } = await supabase
          .from("solutions_by_industry")
          .select("id, name, is_department")
          .order("created_at", { ascending: false });

        const retrieved_data = data;
        retrieved_data.forEach((item) => {
          if (item.is_department === true) {
            this.departments.push(item);
          } else {
            this.industries.push(item);
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
<style scoped></style>
