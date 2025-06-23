<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      class_height="h-[60vh]"
      page_title="ABOUT US"
      page_statement="Creating Intelligent Digital Solutions For Ambitious Businesses That Want To Keep Moving Foward"
      big_pic="/carousel/about-us.png"
      small_pic="/carousel/about-us.png"
      page_min_statement="Talkcoms is a Leading IT Solutions Provider Incorporated in the UK in 2016."
    />
    <!-- main about us -->
    <div class="w-full flex justify-center mt-32">
      <div class="w-[90%] flex justify-center">
        <div class="w-1/2">
          <p class="text-secondary">OUR STORY</p>
          <h1 class="text-4xl font-bold mt-4 p-2">
            Leading IT
            <span class="text-secondary mr-2 ml-2">Solutions</span> Provider
            since 2016
          </h1>
          <div class="w-full mt-6">
            <p class="mt-2">
              Talkcoms Limited was founded to provide organizations of all kinds
              a full-service canter where they can have all of their needs met.
              With strategic locations and qualified and trained employees, we
              strive to create a partnership with our clients built on expertise
              and trust. Since opening our doors in 2016, we have maintained a
              steady growth throughout the years and hope to continue increasing
              productivity, meeting our obligations, tripling the amount of
              current formal jobs and generating stable employment for our team
              members.
            </p>
            <!-- mission -->
            <div class="flex w-full mt-8">
              <div class="w-[80px] min-w-[80px]">
                <div class="w-[60px] h-[60px] relative">
                  <div
                    class="h-full w-full absolute bg-secondary rounded-full opacity-50"
                  ></div>
                  <div class="absolute z-10 h-full w-full flex justify-center">
                    <div class="h-full flex flex-col justify-center">
                      <span class="font-bold text-2xl text-secondary">
                        <i class="fa-solid fa-bullseye"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[70%]">
                <h1 class="text-xl font-semibold">Mission</h1>
                <p class="mt-2">
                  To offer innovative products (software and hardware) as well
                  as IT consulting services. delivered by exceptionally
                  committed people to enhance our client's satisfaction.
                </p>
              </div>
            </div>
            <!-- vision -->
            <div class="flex w-full mt-8">
              <div class="w-[80px] min-w-[80px]">
                <div class="w-[60px] h-[60px] relative">
                  <div
                    class="h-full w-full absolute bg-secondary rounded-full opacity-50"
                  ></div>
                  <div class="absolute z-10 h-full w-full flex justify-center">
                    <div class="h-full flex flex-col justify-center">
                      <span class="font-bold text-2xl text-secondary">
                        <i class="fa-solid fa-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[70%]">
                <h1 class="text-xl font-semibold">Vision</h1>
                <p class="mt-2">
                  To be the preferred business technology partner for;
                  Individuals, Start-ups and Enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex justify-center">
          <div
            class="w-[60%] flex justify-center overflow-hidden h-full rounded-2xl"
          >
            <img
              src="/services/why.png"
              class="h-full max-w-none min-w-full min-h-full max-h-none object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <Partners has_numbers />
    <!-- values -->
    <div
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">
          <router-link to="#">OUR VALUES</router-link>
        </p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          The
          <span class="text-secondary mr-2 ml-2">fundamental</span> principles
          guiding our agency
        </h1>
      </div>
      <div class="w-[90%] flex justify-center mt-16">
        <div class="w-1/2 flex justify-center">
          <div
            class="w-[60%] flex justify-center overflow-hidden h-full rounded-2xl"
          >
            <img
              src="/carousel/values.png"
              class="h-full max-w-none min-w-full min-h-full max-h-none object-cover"
            />
          </div>
        </div>
        <div class="w-1/2">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="flex w-full mt-8"
          >
            <div class="w-[80px] min-w-[80px]">
              <div class="w-[60px] h-[60px] relative">
                <div
                  class="h-full w-full absolute bg-secondary rounded-full opacity-50"
                ></div>
                <div class="absolute z-10 h-full w-full flex justify-center">
                  <div class="h-full flex flex-col justify-center">
                    <span class="font-bold text-2xl text-secondary">
                      <i :class="value.icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[70%]">
              <h1 class="text-xl font-semibold">{{ value.title }}</h1>
              <p class="mt-2">
                {{ value.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- solutions, what we offer -->
    <div class="w-full bg-white mt-32 p-4 pb-32 flex justify-center">
      <div class="w-[90%] flex flex-wrap">
        <div class="w-full flex pb-12 border-b-1 border-[#e3e3e3]">
          <div class="w-1/2">
            <p class="text-secondary">SOLUTIONS</p>
            <h1 class="text-4xl font-bold mt-8">What We Offer</h1>
            <p class="mt-6 w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
              aliquam tellus, nec congue urna.
            </p>
          </div>
          <div class="w-1/2 flex justify-end">
            <div class="flex flex-col h-full justify-center">
              <SquareButton
                button_text="Get Started"
                button_class="bg-secondary text-white rounded-lg p-3 h-fit w-[300px] cursor-pointer"
                hover_color="bg-secondary"
              />
            </div>
          </div>
        </div>
        <!-- the services -->
        <div class="w-full flex flex-wrap justify-center mt-12">
          <div
            v-for="(solution, index) in solutions"
            :key="index"
            class="w-[23%] mr-[1%] bg-body p-4 pb-16 zoom-animate"
          >
            <i :class="solution.icon"></i>
            <h1 class="text-lg font-semibold mt-8">{{ solution.title }}</h1>
            <p class="mt-8">{{ solution.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- <div
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">TEAM</p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          Meet our team of experts
        </h1>
        <div class="w-full flex-wrap flex justify-center mt-16">
          <div
            v-for="(member, index) in members"
            :key="index"
            class="w-[23%] mr-[1%] p-4 bg-white"
          >
            <div class="w-full flex justify-center mt-6">
              <img :src="member.pic" class="rounded-full" />
            </div>
            <p class="mt-12 flex justify-center">{{ member.name }}</p>
            <p class="mt-4 text-secondary text-sm flex justify-center">
              {{ member.position }}
            </p>
            <div class="mt-8 flex justify-center">
              <a :href="member.linkedin" class="mr-2" target="_blank"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a :href="member.x" class="mr-2" target="_blank"
                ><i class="fa-brands fa-x-twitter"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- location -->
    <div class="w-full flex justify-center mt-32">
      <div class="w-[90%] flex justify-center">
        <div class="w-[60%] flex justify-center">
          <div class="h-[50vh] w-[90%] rounded-2xl overflow-hidden">
            <Maps map_class="w-full h-full" />
          </div>
        </div>
        <div class="w-[40%]">
          <p class="text-secondary">OFFICES</p>
          <h1 class="text-4xl font-bold mt-4 p-2">
            Where to <span class="mr-2 ml-2 text-primary">Find</span> Us
          </h1>
          <div class="w-[80%] mt-6">
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
              aliquam tellusr Text
            </p>
            <!-- location details -->
            <div class="flex flex-wrap w-full mt-8">
              <div class="w-1/2">
                <p class="text-secondary">
                  <i class="fa-solid fa-phone"></i> +254 746 433 163
                </p>
              </div>
              <div class="w-1/2">
                <p class="text-secondary">
                  <i class="fa-solid fa-envelope"></i> info@talkcoms.co.uk
                </p>
              </div>
              <div class="w-full mt-10">
                <p class="mt-2">The Well Mall, Karen</p>
                <p class="mt-2">Skyrise Plaza, Eldama Ravine</p>
              </div>
              <div class="w-full mt-16">
                <RoundedButton
                  class="w-fit"
                  button_link="/contact"
                  button_text="Get Directions"
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
      </div>
    </div>
    <!-- CTA -->
    <Cta />
    <Footer />
  </div>
</template>
<script>
import RoundedButton from "../components/buttons/RoundedButton.vue";
import SquareButton from "../components/buttons/SquareButton.vue";
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Maps from "../components/Maps.vue";
import Navbar from "../components/Navbar.vue";
import Partners from "../components/Partners.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "About",
  components: {
    Spinner,
    HeroSection,
    Navbar,
    Cta,
    Footer,
    Partners,
    SquareButton,
    RoundedButton,
    Maps,
  },
  data() {
    return {
      page_is_loading: true,
      values: [
        {
          icon: "fa-regular fa-circle-check",
          title: "Execution",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. Cras id tempus sapien. Vestibulum et libero scelerisque, tempor tortor in, finibus ante.",
        },
        {
          icon: "fa-solid fa-user-check",
          title: "Accountability",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. Cras id tempus sapien. Vestibulum et libero scelerisque, tempor tortor in, finibus ante.",
        },
        {
          icon: "fa-solid fa-headset",
          title: "Support",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet varius est. Cras id tempus sapien. Vestibulum et libero scelerisque, tempor tortor in, finibus ante.",
        },
      ],
      solutions: [
        {
          icon: "fa-solid fa-headset text-secondary text-5xl",
          title: "Call Center Solutions",
          content:
            "Nullam eget mi et tellus vulputate tristique. In hac habitasse platea dictumst. ",
        },
        {
          icon: "fa-solid fa-phone text-secondary text-5xl",
          title: "PBX Solutions",
          content:
            "Nullam eget mi et tellus vulputate tristique. In hac habitasse platea dictumst. ",
        },
        {
          icon: "fa-solid fa-code text-secondary text-5xl",
          title: "Web/App Development",
          content:
            "Nullam eget mi et tellus vulputate tristique. In hac habitasse platea dictumst. ",
        },
        {
          icon: "fa-solid fa-microchip text-secondary text-5xl",
          title: "iTaaS",
          content:
            "Nullam eget mi et tellus vulputate tristique. In hac habitasse platea dictumst. ",
        },
      ],
      members: [
        {
          name: "Jackson Kimwaga",
          pic: "/profiles/1.png",
          position: "Product Designer",
          linkedin: "#",

          x: "#",
        },
        {
          name: "Carolyne Mwikali",
          pic: "/profiles/2.png",
          position: "Marketing Lead",
          linkedin: "#",
          x: "#",
        },
        {
          name: "Daniel Wandolo",
          pic: "/profiles/3.png",
          position: "Software Dev",
          linkedin: "#",
          x: "#",
        },
        {
          name: "Jane Wachira",
          pic: "/profiles/4.png",
          position: "Public Relations",
          linkedin: "#",
          x: "#",
        },
      ],
    };
  },
  mounted() {
    this.load_page();
  },
  methods: {
    load_page() {
      setTimeout(() => {
        this.page_is_loading = false;
      }, 2000);
    },
  },
};
</script>
