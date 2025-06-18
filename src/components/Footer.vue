<template>
  <div class="w-full flex flex-wrap mt-32 p-4">
    <div class="w-full flex justify-center">
      <div class="w-[90%] flex">
        <div class="w-1/2">
          <p class="text-secondary">NEWSLETTER</p>
          <h1 class="text-4xl font-bold mt-4 w-3/4">
            Join Our Community To Receive
            <span class="ml-1 text-secondary">Updates</span>
          </h1>
        </div>
        <div class="w-1/2 h-full flex flex-col justify-end">
          <form
            class="h-[55px] w-[70%] min-w-[350px] bg-white flex flex-nowrap"
          >
            <input
              type="email"
              class="h-full p-2 w-[80%] ml-2"
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
    <div class="w-full flex justify-center mt-24">
      <div class="w-3/4 flex">
        <div class="w-1/2"></div>
      </div>
    </div>
    <div class="w-1/6">
      <div class="w-full flex justify-center">
        <div class="h-full flex flex-col justify-center">
          <router-link to="/"
            ><img :src="site_logo" class="custom-logo"
          /></router-link>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="h-full flex flex-col justify-center mt-6">
          Stay Connected
        </div>
      </div>
    </div>
    <div class="w-1/6 p-1">
      <p class="mt-2 font-semibold">Company</p>
      <div class="w-full mt-4">
        <p v-for="(link, index) in footer_company_links" :key="index" class="">
          <router-link :to="link.link" class="hover:text-[#8dc63f]">
            {{ link.title }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="w-1/6 p-1">
      <p class="mt-2 font-semibold">Products/Services</p>
      <div class="w-full mt-4">
        <p v-for="(product, index) in footer_products" :key="index" class="">
          <router-link :to="product.link" class="hover:text-[#8dc63f]">
            {{ product.title }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="w-1/6 p-1">
      <p class="mt-2 font-semibold">Legal</p>
      <div class="w-full mt-4">
        <p v-for="(legal, index) in footer_legal" :key="index">
          <router-link :to="legal.link" class="hover:text-[#8dc63f]">
            {{ legal.title }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="w-1/6 p-1 border-l-1 border-[#e3e3e3]">
      <p class="mt-2 ml-4 font-semibold">Phone</p>
      <div class="w-full mt-4">
        <p
          v-for="(contact, index) in footer_contacts"
          :key="index"
          class="ml-4"
        >
          {{ contact.title }}
        </p>
        <p class="mt-8 font-semibold ml-4">Email</p>
        <div class="w-full mt-4">
          <p v-for="(email, index) in footer_emails" :key="index" class="ml-4">
            {{ email.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-1/6 p-1">
      <p class="mt-2 font-semibold">Offices</p>
      <div class="w-full mt-4">
        <p v-for="(office, index) in footer_locations" :key="index">
          {{ office.title }}
        </p>
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

export default {
  name: "Footer",
  components: { DefaultSquareButton },
  data() {
    return {
      site_logo: "/logo.svg",
      footer_company_links: [
        { title: "About us", link: "/about" },
        { title: "Contact us", link: "/contact-us" },
        { title: "Blog", link: "/blogs" },
      ],
      footer_products: [
        { title: "Outsourced CC", link: "#" },
        { title: "Contact Center Solution", link: "#" },
        { title: "Web/App Development", link: "#" },
        { title: "iTaaS", link: "#" },
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
        { title: " support@talkcoms.co.uk" },
        { title: "support@talkcoms.io" },
      ],
      footer_locations: [
        { title: "Eldama Ravine, Baringo" },
        { title: "The Well Mall, Karen" },
      ],
    };
  },
};
</script>
