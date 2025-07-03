<template>
  <HeroPattern />
  <div class="w-full flex justify-center flex-wrap pb-10">
    <div class="w-[90%] flex h-full gap-4 overflow-hidden mt-16">
      <div class="w-1/2">
        <SmallTitle :text="small_title" />
        <BigTitle :text="big_title" title_class="mt-4 w-[90%]" />
        <p class="w-3/4 mt-4">
          {{ hero_description }}
        </p>
        <div class="w-full flex flex-wrap mt-4">
          <div v-show="is_blog" class="w-full flex">
            <span class="bg-secondary rounded-full text-white pr-4 pl-4">
              {{ blog_category ? blog_category : blog_type }}
            </span>
            <div class="bg-secondary h-[20px] w-[1px] ml-6">
              <!-- this is the green line -->
            </div>
            <span class="ml-6"> {{ blog_date }} </span>
          </div>
          <!-- if it's a blog -->
          <div v-show="is_blog" class="w-full mt-10 flex">
            <RoundedButton
              :button_link="read_more_link"
              button_text="Read Full Blog"
              button_icon="fa-solid fa-angle-right text-white"
              :defaultColor="'#333'"
              :hoverColor="'#262262'"
              :iconColor="'#ffffff'"
              button_border="#8dc63f"
              button_background="#ffffff"
              button_circle_background="#8dc63f"
              class="w-fit"
            />
          </div>
          <!-- if it's a service -->
          <div v-show="is_service" class="w-full flex mt-10">
            <RoundedButton
              :button_link="demo_link"
              button_text="Book A Free Demo"
              button_icon="fa-solid fa-angle-right"
              :defaultColor="'#333'"
              :hoverColor="'#8dc63f'"
              :iconColor="'#262262'"
              button_circle_background="#262262"
            />
            <RoundedButton
              class="ml-4"
              button_link="/contact-us"
              button_text="Talk to sales"
              button_icon="fa-solid fa-angle-right text-white"
              :defaultColor="'#333'"
              :hoverColor="'#262262'"
              :iconColor="'#ffffff'"
              button_border="#8dc63f"
              button_background="#ffffff"
              button_circle_background="#8dc63f"
            />
          </div>
          <!-- industry -->
          <div v-show="is_industry" class="w-full mt-10 flex">
            <RoundedButton
              :button_link="read_more_link"
              button_text="Read Full Blog"
              button_icon="fa-solid fa-angle-right text-white"
              :defaultColor="'#333'"
              :hoverColor="'#262262'"
              :iconColor="'#ffffff'"
              button_border="#8dc63f"
              button_background="#ffffff"
              button_circle_background="#8dc63f"
              class="w-fit"
            />
          </div>
          <!-- contacts -->
          <div v-show="is_contact" class="w-full mt-6 flex flex-wrap">
            <!-- offices -->
            <div class="w-full flex flex-wrap mt-4">
              <div class="w-full flex flex-nowrap">
                <div
                  class="w-[30px] min-w-[e0px] h-[30px] max-h-[30px] flex justify-center p-4 rounded-sm bg-secondary"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-envelope text-white"></i>
                  </div>
                </div>
                <!-- title -->
                <div class="w-full ml-4 h-full flex flex-col justify-end">
                  <h1 class="font-semibold">Offices</h1>
                </div>
              </div>

              <!-- emails -->
              <div class="w-full mt-4">
                <div
                  v-for="(office, index) in offices"
                  :key="index"
                  class="w-full"
                >
                  <p class="font-semibold">{{ office.name }}</p>
                  <p class="mb-2">{{ office.location }}</p>
                </div>
              </div>
            </div>
            <!-- phone -->
            <div class="w-1/2 flex flex-wrap mt-10">
              <div class="w-full flex flex-nowrap">
                <div
                  class="w-[30px] min-w-[e0px] h-[30px] max-h-[30px] flex justify-center p-4 rounded-sm bg-secondary"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-phone text-white"></i>
                  </div>
                </div>
                <!-- title -->
                <div class="w-full ml-4 h-full flex flex-col justify-end">
                  <h1 class="font-semibold">Phone</h1>
                </div>
              </div>

              <!-- phone -->
              <div class="w-full mt-4">
                <p
                  v-for="(phone, index) in phones"
                  :key="index"
                  class="text-sm"
                >
                  <a :href="`tel:${phone.phone}`" class="custom-default-hover">
                    {{ phone.phone }}
                  </a>
                </p>
              </div>
            </div>
            <!-- emails -->
            <div class="w-1/2 flex flex-wrap mt-10">
              <div class="w-full flex flex-nowrap">
                <div
                  class="w-[30px] min-w-[e0px] h-[30px] max-h-[30px] flex justify-center p-4 rounded-sm bg-secondary"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-envelope text-white"></i>
                  </div>
                </div>
                <!-- title -->
                <div class="w-full ml-4 h-full flex flex-col justify-end">
                  <h1 class="font-semibold">Email</h1>
                </div>
              </div>

              <!-- emails -->
              <div class="w-full mt-4">
                <p v-for="(email, index) in emails" :key="index">
                  <a
                    :href="`mailto:${email.email}`"
                    class="custom-default-hover"
                  >
                    {{ email.email }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-[55vh]">
        <div class="w-full h-full flex rounded-xl overflow-hidden">
          <div
            v-if="hero_small_image"
            class="h-full w-[30%] overflow-hidden rounded-xl"
          >
            <img
              :src="hero_small_image"
              alt="Blog image header"
              class="h-full min-w-full w-auto max-w-none max-h-none object-cover rounded-xl"
            />
          </div>
          <div
            class="h-full overflow-hidden rounded-xl"
            :class="hero_small_image ? 'w-[67%] ml-[3%]' : 'w-full ml-0'"
          >
            <img
              :src="hero_image"
              alt="Blog image header"
              class="w-full min-w-full max-w-none h-auto max-h-none object-cover rounded-xl"
              :class="hero_small_image ? 'min-h-full ' : ''"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RoundedButton from "./buttons/RoundedButton.vue";
import HeroPattern from "./patterns/HeroPattern.vue";
import BigTitle from "./text/BigTitle.vue";
import SmallTitle from "./text/SmallTitle.vue";

export default {
  name: "HeroSection",
  components: { RoundedButton, HeroPattern, SmallTitle, BigTitle },
  props: {
    small_title: String,
    big_title: String,
    hero_description: String,
    is_blog: Boolean,
    blog_category: String,
    blog_type: String,
    blog_date: String,
    read_more_link: String,
    demo_link: String,
    hero_image: String,
    is_service: Boolean,
    is_industry: Boolean,
    has_double_images: Boolean,
    hero_small_image: String,
    is_contact: Boolean,
  },
  data() {
    return {
      phones: [{ phone: "+2547 592 009 98" }, { phone: "+254 746 433 163" }],
      emails: [
        { email: "support@talkcoms.co.uk" },
        { email: "solutions@talkcoms.co.uk" },
      ],
      offices: [
        {
          name: "UK OFFICE",
          location:
            "The Kings Centre Main Road, Barleythorpe Oakham, LE15 7WD, United Kingdom",
        },
        {
          name: "NAIROBI OFFICE",
          location:
            "Great Jubilee Center ( The Well), Karen, Nairobi 1’st Floor Unit No. 07, Kenya",
        },
        {
          name: "ELDAMA RAVINE OFFICE",
          location:
            "3rd Floor, Skyrise Plaza, Eldama Ravine Township, Along Ravine - Nakuru Road",
        },
      ],
    };
  },
};
</script>
