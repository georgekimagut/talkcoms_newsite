<template>
  <Chat />
  <!-- back to top -->
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed z-1000 bottom-2 right-[4%] w-[50px] h-[50px] flex justify-center rounded-sm cursor-pointer transition-all duration-300"
    aria-label="Back to top"
  >
    <div class="w-full h-full bg-default"></div>
    <div class="w-full h-full flex justify-center absolute">
      <div class="h-full flex flex-col justify-center">
        <i class="fa-solid fa-angle-up text-3xl text-white"></i>
      </div>
    </div>
  </button>
  <!-- end of back to top -->
  <div class="w-full flex flex-wrap mt-32 p-4">
    <div class="w-full flex justify-center">
      <div class="w-[90%] flex">
        <div class="w-1/2">
          <p class="text-secondary text-lg">NEWSLETTER</p>
          <h1 class="text-4xl font-extrabold mt-4 w-3/4">
            Join Our Community To Receive
            <span class="ml-1 text-secondary">Updates</span>
          </h1>
        </div>
        <div class="w-1/2 h-full flex flex-col justify-end">
          <div class="w-full flex justify-end">
            <form
              class="h-[55px] w-full min-w-[350px] max-w-[500px] bg-white flex flex-nowrap"
            >
              <input
                type="email"
                class="h-full p-2 w-[80%] ml-2 focus:outline-0"
                placeholder="Enter Your Email"
                required
              />
              <DefaultSquareButton
                button_class="h-full bg-secondary w-[20%] text-white  cursor-pointer"
                button_text="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- footer content -->
    <div class="w-full flex justify-center mt-18">
      <div class="w-[90%] flex gap-4">
        <div class="w-[15%]">
          <div class="w-full flex justify-center">
            <router-link to="/"
              ><img :src="site_logo" class="w-[80px] mt-4"
            /></router-link>
          </div>
          <div class="w-full mt-2 flex justify-center">Stay Connected</div>
        </div>
        <div class="w-[15%] p-1">
          <p class="mt-2 font-semibold">Company</p>
          <div class="w-full mt-4">
            <p
              v-for="(link, index) in footer_company_links"
              :key="index"
              class="mb-2"
            >
              <router-link :to="link.link" class="hover:text-[#8dc63f]">
                {{ link.title }}
              </router-link>
            </p>
          </div>
        </div>
        <div class="w-[15%] p-1">
          <p class="mt-2 font-semibold">Products</p>
          <div class="w-full mt-4">
            <p
              v-for="(product, index) in footer_products"
              :key="index"
              class="mb-2"
            >
              <router-link :to="product.link" class="hover:text-[#8dc63f]">
                {{ product.title }}
              </router-link>
            </p>
          </div>
        </div>
        <div class="w-[15%] p-1">
          <p class="mt-2 font-semibold">Services</p>
          <div class="w-full mt-4">
            <p
              v-for="(service, index) in footer_services"
              :key="index"
              class="mb-2"
            >
              <router-link :to="service.link" class="hover:text-[#8dc63f]">
                {{ service.title }}
              </router-link>
            </p>
          </div>
        </div>
        <div class="w-[15%] p-1">
          <p class="mt-2 font-semibold">Legal</p>
          <div class="w-full mt-4">
            <p v-for="(legal, index) in footer_legal" :key="index" class="mb-2">
              <router-link :to="legal.link" class="hover:text-[#8dc63f]">
                {{ legal.title }}
              </router-link>
            </p>
          </div>
        </div>
        <div class="w-[15%] p-1 border-l-1 border-[#e3e3e3]">
          <p class="mt-2 ml-4 font-semibold">Phone</p>
          <div class="w-full mt-4">
            <p
              v-for="(contact, index) in footer_contacts"
              :key="index"
              class="ml-4 mb-2"
            >
              <a :href="`tel:${contact.title}`">
                {{ contact.title }}
              </a>
            </p>
            <p class="mt-8 font-semibold ml-4">Email</p>
            <div class="w-full mt-4">
              <p
                v-for="(email, index) in footer_emails"
                :key="index"
                class="ml-4 mb-2"
              >
                <a :href="`mailto:${email.title}`">{{ email.title }} </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer bottom -->
    <div class="w-full flex justify-center mt-10">
      <div class="w-3/4 flex p-4 justify-center border-t border-[#e3e3e3]">
        <p class="text-sm">
          <span class="text-secondary mr-2">&copy;</span>Talkcoms 2025. All
          Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultSquareButton from "./buttons/SquareButton.vue";
import DefaultInput from "./inputs/DefaultInput.vue";
import BigTitle from "./text/BigTitle.vue";
import Chat from "./Chat.vue";

export default {
  name: "Footer",
  components: { DefaultSquareButton, DefaultInput, BigTitle, Chat },
  data() {
    return {
      isVisible: false,
      site_logo: "/logo.svg",
      footer_company_links: [
        { title: "About us", link: "/about" },
        { title: "Contact us", link: "/contact-us" },
        { title: "Blog", link: "/blogs" },
      ],
      footer_products: [
        { title: "Contact Center Solution", link: "#" },
        { title: "Web/App Development", link: "#" },
        { title: "iTaaS", link: "#" },
      ],
      footer_services: [
        { title: "Outsourced CC", link: "#" },
        { title: "CRM", link: "#" },
        { title: "PBX", link: "#" },
      ],
      footer_legal: [
        { title: "Cookie Policy", link: "#" },
        { title: "Terms & Conditions", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Sitemap", link: "#" },
      ],
      footer_contacts: [
        { title: " +254 746 433 163" },
        { title: "+447 746 433 163" },
      ],
      footer_emails: [
        { title: "support@talkcoms.co.uk" },
        { title: "solutions@talkcoms.co.uk" },
      ],
      footer_locations: [
        {
          title: "UNITED KINGDOM",
          name: "Barleythorpe Oakham, LE15 7WD, United Kingdom",
        },
        { title: "NAIROBI", name: "Great Jubilee Center, Karen, Nairobi" },
        { title: "ELDAMA RAVINE", name: "Skyrise Plaza, Eldama Ravine" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
