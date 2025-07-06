<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <!-- hero section -->
    <div class="w-full h-[90vh]">
      <div class="h-full w-full absolute opacity-50">
        <img src="/icons/g26.svg" class="" />
      </div>
      <div class="w-full h-full flex justify-center overflow-hidden">
        <div class="w-[90%] flex flex-wrap mt-16 relative overflow-hidden">
          <!-- animation classes -->
          <!-- <div
            class="w-[100px] h-[100px] border-8 bg-body rounded-full absolute top-[40vh] border-[#8dc63f] opacity-15 custom-anime-random"
          ></div>
          <div
            class="w-[70px] h-[70px] left-[150px] border-8 bg-default rounded-full absolute top-[40vh] border-white opacity-15 custom-anime-movedown"
          ></div> -->
          <!-- Carousel Holder -->
          <div
            class="carousel-holder flex flex-nowrap transition-transform duration-500 ease-in-out w-full h-[60vh]"
            :style="{ transform: `translateX(-${current_slide * 100}%)` }"
          >
            <!-- Slide -->
            <div
              v-for="(slide, index) in carousel_data"
              :key="index"
              class="w-full flex-shrink-0 h-full flex"
            >
              <div class="w-1/2 h-full block">
                <p class="text-secondary text-lg w-3/4 uppercase">
                  {{ slide.sub_title }}
                </p>
                <h1 class="text-4xl font-extrabold mt-10 w-3/4">
                  {{ slide.title }}
                </h1>
                <p class="w-3/4 mt-10">
                  {{ slide.description }}
                </p>
                <div class="w-full flex mt-16">
                  <DarkButton
                    button_link="/contact-Us"
                    button_text="Learn More"
                  />
                  <LightButton
                    button_link="#"
                    button_text="Learn
                  More"
                    class="ml-4"
                  />
                </div>
              </div>
              <div class="w-1/2 h-full">
                <div class="w-full h-full relative">
                  <div class="img-holder h-[55vh] overflow-hidden rounded-2xl">
                    <img
                      :src="slide.pic"
                      class="rounded-2xl min-w-full object-cover"
                    />
                  </div>
                  <!-- stats board -->
                  <div
                    class="w-[65%] h-1/2 absolute z-10 bg-body top-[30vh] rounded-tr-2xl p-4 left-[-10%]"
                  >
                    <div
                      class="wrapper w-full bg-white rounded-tr-2xl rounded-bl-2xl"
                    >
                      <div class="w-full flex">
                        <div class="w-one flex flex-col justify-center">
                          <h1
                            class="w-full p-2 text-5xl font-bold ml-[8%] pt-4"
                          >
                            10+
                          </h1>
                        </div>
                        <div class="w-two">
                          <p class="w-full p-2 text-sm text-secondary pt-4">
                            Years
                          </p>
                          <p class="w-full text-sm pl-2">Experience</p>
                        </div>
                      </div>
                      <!-- end of stat -->
                      <div class="w-full flex">
                        <div class="w-one flex flex-col justify-center">
                          <h1
                            class="w-full p-2 text-5xl font-bold ml-[8%] pt-4"
                          >
                            50+
                          </h1>
                        </div>
                        <div class="w-two">
                          <p class="w-full p-2 text-sm text-secondary pt-4">
                            Complete
                          </p>
                          <p class="w-full pl-2 text-sm">Projects</p>
                        </div>
                      </div>
                      <!-- end of stat -->
                    </div>
                  </div>
                  <!-- reviews board -->
                  <div
                    class="w-[40%] absolute z-10 top-[50vh] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl left-[55%] bg-white"
                  >
                    <p class="w-ful p-2">Verified by Google</p>
                    <div class="w-full flex p-2">
                      <div class="w-one">
                        <img src="/icons/google.svg" class="w-[80px]" />
                      </div>
                      <div class="w-two flex justify-center">
                        <img
                          v-for="index in 5"
                          :key="index"
                          src="/icons/Star.svg"
                          class="w-[18px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end of slide -->
          </div>

          <!-- Navigation Arrows -->
          <div class="w-full flex justify-end h-[10vh]">
            <div class="h-full flex flex-col justify-center">
              <div class="flex flex-row flex-nowrap">
                <i
                  class="fa-solid fa-angle-left text-2xl text-secondary p-2 pr-4 pl-4 border border-[#8dc63f] cursor-pointer hover:bg-secondary hover:text-white"
                  @click="prevSlide"
                ></i>
                <i
                  class="fa-solid fa-angle-right text-2xl text-secondary p-2 pr-4 pl-4 border border-[#8dc63f] ml-6 cursor-pointer hover:bg-secondary hover:text-white"
                  @click="nextSlide"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- services highlights -->
    <div
      class="w-full flex flex-wrap justify-center overflow-hidden mt-16 autoShow"
    >
      <div class="w-[90%] flex justify-center flex-wrap">
        <div class="w-full">
          <p class="text-secondary text-center text-lg">OUR SERVICES</p>

          <h1 class="text-4xl font-bold mt-4 p-2 text-center">
            Services <span class="text-secondary mr-2 ml-2">Tailored</span>
            To Meet Your Business Needs
          </h1>
        </div>
        <MotionGroup
          preset="slideVisibleLeft"
          :duration="600"
          is="div"
          class="w-full flex justify-center mt-16 gap-4"
        >
          <CustomCard
            v-for="(service, index) in home_services"
            :key="index"
            :card_pic="service.imageUrl"
            :card_title="service.name"
            :card_description="service.title_description"
            card_class="w-[25%] "
            link_text="LEARN MORE"
            :link_to="`/service/${service.name}`"
            has_link
          />
        </MotionGroup>
      </div>
    </div>
    <!-- portfolio -->
    <div
      class="w-full flex flex-nowrap overflow-hidden justify-center top-56 mt-36"
    >
      <div
        class="w-[90%] bg-white p-4 h-full flex flex-nowrap transition-transform duration-500 ease-in-out overflow-hidden"
      >
        <div class="w-[30%] h-full p-6">
          <p class="text-secondary w-3/4 text-lg">PORTFOLIO</p>
          <h1 class="text-4xl font-bold mt-10 p-2">
            <span class="text-secondary">Solutions</span> We've Built For
            <span class="text-secondary">Businesses</span> Like Yours
          </h1>
          <p class="mt-2 p-2">
            Discover custom solutions we've developed to help businesses like
            yours grow and thrive efficiently
          </p>
          <!-- list item -->
          <div class="w-full p-2 h-[25px] flex flex-nowrap">
            <div class="h-full w-[10px] flex flex-col justify-center">
              <div class="h-[10px] w-full bg-black rounded-full"></div>
            </div>
            <div class="h-full flex ml-[10px]" style="width: calc(100% - 15px)">
              <div class="h-full flex flex-col justify-center">
                <li class="list-none">Managed Services and Products</li>
              </div>
            </div>
          </div>
          <!-- end of list -->
          <!-- list item -->
          <div class="w-full p-2 h-[25px] flex flex-nowrap">
            <div class="h-full w-[10px] flex flex-col justify-center">
              <div class="h-[10px] w-full bg-black rounded-full"></div>
            </div>
            <div class="h-full flex ml-[10px]" style="width: calc(100% - 15px)">
              <div class="h-full flex flex-col justify-center">
                <li class="list-none">Flexibility and Adaptability</li>
              </div>
            </div>
          </div>
          <!-- end of list -->
          <!-- list item -->
          <div class="w-full p-2 h-[25px] flex flex-nowrap">
            <div class="h-full w-[10px] flex flex-col justify-center">
              <div class="h-[10px] w-full bg-black rounded-full"></div>
            </div>
            <div class="h-full flex ml-[10px]" style="width: calc(100% - 15px)">
              <div class="h-full flex flex-col justify-center">
                <li class="list-none">Competitive Advantage</li>
              </div>
            </div>
          </div>
          <!-- end of list -->
        </div>
        <!-- 2nd part -->
        <div class="w-[70%] h-[65vh] flex justify-center pt-6">
          <div
            class="w-[96%] flex overflow-x-scroll overflow-y-hidden custom-scrollbar relative"
          >
            <!-- portfolio item -->
            <div
              v-for="(project, index) in portfolio_items"
              :key="index"
              class="w-[36%] min-w-[36%] h-[90%] relative cursor-pointer overflow-hidden ml-4 custom-portfolio-hover"
            >
              <img
                :src="project.pic"
                class="h-full absolute w-auto max-w-none"
              />
              <div class="h-full w-full flex flex-col absolute z-10">
                <div class="h-[40%] w-full bg-body">
                  <BigTitle :text="project.name" title_class="text-5xl p-4" />
                </div>
              </div>
              <div
                class="h-full w-full absolute z-10 bg-black opacity-0 c-background"
              ></div>
              <div
                class="h-full w-full absolute z-20 bg-transparent flex justify-center"
              >
                <div class="h-full flex-col justify-center c-layer hidden">
                  <BigTitle
                    :text="project.name"
                    title_class="text-5xl p-2 text-white ml-4"
                  />
                  <ExternalLink
                    :link_to="project.link"
                    link_text="Visit Site"
                    class="w-fit mt-4 ml-6"
                  />
                </div>
              </div>
            </div>
            <!-- end of it -->

            <!-- end of it -->
          </div>
        </div>
      </div>
    </div>
    <!-- industry -->
    <div class="w-full flex justify-center bg-white mt-32 pb-16 autoShow">
      <div class="w-[90%]">
        <div class="w-full">
          <h1
            class="text-5xl font-extrabold mt-10 p-2 text-default text-center"
          >
            Select your industry. Discover our impact.
          </h1>
        </div>
        <div class="w-full flex flex-wrap mt-16">
          <div
            v-for="(industry, index) in industries"
            :key="index"
            class="industry-card w-[49%] ml-[1%] flex flex-nowrap cursor-pointer pt-3 pb-3 ease-in-out border-b-1 border-[#dfdfdf] hover:border-b-2"
          >
            <router-link :to="`/solution/${industry.name}`" class="w-full flex"
              ><div class="w-[90%] flex flex-nowrap">
                <div class="w-[20px]">
                  <i
                    :class="industry.icon"
                    class="text-secondary ml-2 pt-2"
                  ></i>
                </div>

                <p class="ml-4 text-2xl">{{ industry.name }}</p>
              </div>
              <div class="w-[10%] flex justify-end">
                <i
                  class="fa-solid fa-arrow-right mr-6 opacity-0 mt-2 text-xl text-default"
                ></i>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- partners/companies -->
    <Partners class="autoShow" />
    <!-- stories -->
    <div class="w-full pt-36 p-4 flex justify-center bg-white">
      <div class="w-[90%] flex justify-center flex-wrap">
        <div class="w-full">
          <p class="text-secondary text-center text-lg">
            <router-link to="/stories">STORIES</router-link>
          </p>

          <h1 class="text-4xl font-extrabold mt-4 p-2 text-center">
            Success Stories From Our Clients
          </h1>
        </div>
        <div class="w-full flex justify-center mt-16 gap-4">
          <CustomCard
            v-for="(story, index) in success_stories"
            :key="index"
            :card_pic="story.pic"
            :card_title="story.client"
            :card_description="story.title"
            card_class="w-[25%] border-1 border-[#e3e3e3]"
            link_text="READ MORE"
            :link_to="`/resources/${success_story}/${story.title}`"
            has_link
          />
        </div>
      </div>
    </div>
    <!-- blogs -->
    <div class="w-full flex justify-center flex-wrap mt-36 p-4 pb-20">
      <div class="w-[90%]">
        <p class="text-secondary w-full flex justify-center">
          <router-link to="/blogs" class="text-lg">BLOG</router-link>
        </p>
        <h1 class="text-3xl font-extrabold mt-3 w-full flex justify-center">
          Tech <span class="text-secondary">Tips</span> &
          <span class="text-secondary">Trends</span>
        </h1>
      </div>
      <div class="w-full flex justify-center gap-4 mt-16">
        <div class="w-[80%] flex">
          <div class="w-[40%] m-1 flex justify-center">
            <div
              v-for="(blog, index) in blogs.slice(0, 1)"
              :key="index"
              class="w-[90%] m-2 bg-white overflow-hidden zoom-animate p-2"
            >
              <div class="w-full h-[40vh] overflow-hidden relative">
                <div
                  class="absolute pointer-to-show z-20 top-[30vh] h-[50px] w-[50px] left-[80%] rounded-full bg-secondary cursor-pointer text-white flex justify-center"
                  style="rotate: -45deg"
                >
                  <div class="h-full flex flex-col justify-center">
                    <router-link :to="`/resources/${is_blog}/${blog.slug}`"
                      ><i class="fa-solid fa-angle-right text-2xl"></i
                    ></router-link>
                  </div>
                </div>
                <img
                  :src="`${image_url}/${blog.hero_media.url}`"
                  class="min-h-full h-full min-w-full w-auto max-w-none"
                />
              </div>
              <div class="p-4">
                <div class="w-full pt-2 pb-2 flex">
                  <span
                    class="bg-secondary text-sm text-white rounded-full pl-2 pr-2"
                    >{{ blog.category ? blog.category : blog.Type }}</span
                  >
                  <div class="line w-[1px] bg-secondary ml-6 h-[23px]"></div>
                  <span class="ml-6 text-sm">{{
                    format_date(blog.createdAt)
                  }}</span>
                </div>
                <router-link :to="`/resources/${is_blog}/${blog.slug}`"
                  ><h3 class="font-semibold text-xl custom-default-hover">
                    {{ blog.Title }}
                  </h3></router-link
                >
                <div class="w-full mt-10 flex">
                  <div class="w-[50px] h-[50px]">
                    <img src="/icons/profile.png" />
                  </div>
                  <div class="pl-4 pr-4" style="width: calc(100% - 50px)">
                    <p class="text-sm">{{ blog.author }}</p>
                    <p class="text-sm">{{ blog.read_time }} mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[60%] m-1 flex flex-col">
            <div
              v-for="(blog, index) in blogs.slice(1, 3)"
              :key="index"
              class="w-full mb-2 flex bg-white h-[40vh] zoom-animate"
            >
              <div class="w-[40%] h-full overflow-hidden relative">
                <img
                  :src="`${image_url}/${blog.hero_media.url}`"
                  class="min-h-full h-full min-w-full w-auto max-w-none"
                />
                <div
                  class="absolute pointer-to-show z-20 top-[30vh] h-[50px] w-[50px] left-[80%] rounded-full bg-secondary cursor-pointer text-white flex justify-center"
                  style="rotate: -45deg"
                >
                  <div class="h-full flex flex-col justify-center">
                    <router-link :to="`/resources/${is_blog}/${blog.slug}`"
                      ><i class="fa-solid fa-angle-right text-2xl"></i
                    ></router-link>
                  </div>
                </div>
              </div>
              <div class="w-[60%] overflow-hidden p-4">
                <router-link :to="`/resources/${is_blog}/${blog.slug}`"
                  ><h3 class="font-semibold text-xl custom-default-hover">
                    {{ blog.Title }}
                  </h3></router-link
                >
                <div class="w-full h-full flex flex-col justify-around pb-4">
                  <div class="w-full pt-2 pb-2 flex">
                    <span
                      class="bg-secondary h-fit text-sm text-white rounded-full pl-2 pr-2"
                      >{{ blog.category ? blog.category : blog.Type }}</span
                    >
                    <div class="line w-[1px] bg-secondary ml-6 h-[23px]"></div>
                    <span class="ml-6 text-sm">{{
                      format_date(blog.createdAt)
                    }}</span>
                  </div>
                  <div class="w-full mt-10 flex">
                    <div class="w-[50px] h-[50px]">
                      <img src="/icons/profile.png" />
                    </div>
                    <div
                      class="pl-4 pr-4 pb-4"
                      style="width: calc(100% - 50px)"
                    >
                      <p class="text-sm">{{ blog.author }}</p>
                      <p class="text-sm">{{ blog.read_time }} mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cta />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import RoundedButton from "../components/buttons/RoundedButton.vue";
import Spinner from "../components/Spinner.vue";
import Cta from "../components/Cta.vue";
import Partners from "../components/Partners.vue";
import { supabase } from "../assets/js/supabase";
import CustomCard from "../components/cards/CustomCard.vue";
import ExternalLink from "../components/text/ExternalLink.vue";
import BigTitle from "../components/text/BigTitle.vue";
import { apiEndpoint, baseUrl } from "../assets/js/store";
import DarkButton from "@/components/ui/button/DarkButton.vue";
import LightButton from "@/components/ui/button/LightButton.vue";

//data imports
// import api from "../store/api";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    RoundedButton,
    Spinner,
    Cta,
    Partners,
    CustomCard,
    ExternalLink,
    BigTitle,
    DarkButton,
    LightButton,
  },
  data() {
    return {
      //spinner
      page_is_loading: true,
      current_slide: 0,
      total_slides: 3, // Number of slides
      //service carousel
      current_service_slide: 0,
      total_service_slides: 3,
      //drag
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      success_story: "story",
      is_blog: "blog",
      image_url: baseUrl,

      //carousel data
      carousel_data: [],
      home_services: [],
      portfolio_items: [],
      success_stories: [],
      stories: [
        {
          id: 1,
          pic: "/stories/1.png",
          company_name: "Chunic Machinery",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed aliquet tellus, et dignissim leo. ",
        },
        {
          id: 2,
          pic: "/stories/2.png",
          company_name: "Boresha Sacco",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed aliquet tellus, et dignissim leo. ",
        },
        {
          id: 3,
          pic: "/stories/3.png",
          company_name: "Chunic LTD",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed aliquet tellus, et dignissim leo. ",
        },
        {
          id: 4,
          pic: "/carousel/faqs-banner-big.png",
          company_name: "Simba Chai",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed aliquet tellus, et dignissim leo. ",
        },
      ],
      blogs: [],
      industries: [],
    };
  },
  async created() {
    this.page_is_loading = true;
    try {
      await this.get_carousel();
      this.get_services();
      this.get_portfolio_items();
      this.get_solutions();
      this.fetch_blogs();
      this.get_stories();
    } catch (error) {
      console.error("Loading failed:", error);
    } finally {
      this.page_is_loading = false;
    }
  },
  methods: {
    nextSlide() {
      if (this.current_slide < this.total_slides - 1) {
        this.current_slide++;
      } else {
        this.current_slide = 0; // Loop back to first
      }
    },

    prevSlide() {
      if (this.current_slide > 0) {
        this.current_slide--;
      } else {
        this.current_slide = this.total_slides - 1; // Loop to last
      }
    },
    //automatic slider
    autoSlide() {
      setTimeout(() => {
        if (this.current_service_slide < this.total_service_slides - 1) {
          this.current_service_slide++;
        } else {
          this.current_service_slide = 0; // Loop back to first
        }
        this.autoSlide();
      }, 7000);
    },

    //GET BLOGS
    async fetch_blogs() {
      const cacheKey = "blogPostsCache";
      const cacheExpiry = 10 * 60 * 1000; // 10 minutes

      const cachedData = localStorage.getItem(cacheKey);
      const now = Date.now();

      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (now - timestamp < cacheExpiry) {
          this.blogs = data;
          return;
        }
      }

      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        if (responseData.data) {
          const dataArray = Array.isArray(responseData.data)
            ? responseData.data
            : [responseData.data];

          this.blogs = dataArray;

          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              data: dataArray,
              timestamp: now,
            })
          );
        } else {
          console.error("Invalid response structure:", responseData);
          if (cachedData) {
            console.log("Falling back to stale cache");
            const { data } = JSON.parse(cachedData);
            this.blogs = data;
          }
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
        if (cachedData) {
          console.log("Using cached data after error");
          const { data } = JSON.parse(cachedData);
          this.blogs = data;
        }
      }
    },
    format_date(date_to_change) {
      const date = new Date(date_to_change);
      const date_options = { month: "long", day: "numeric", year: "numeric" };
      return date.toLocaleDateString("en-US", date_options);
    },
    // get services
    async get_services() {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("pic, title_description, name, icon")
          .limit(4);

        if (error) {
          console.log(error);
          return;
        }

        // Shuffle data randomly
        const shuffled = data.sort(() => 0.5 - Math.random());

        this.home_services = shuffled.map((service) => {
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
    //get stories
    async get_stories() {
      try {
        const { data, error } = await supabase
          .from("success_stories")
          .select("*");

        if (error) {
          console.log(error);
          return;
        }
        this.success_stories = data;
      } catch (error) {
        console.log(error);
      }
    },
    //get solutions
    async get_solutions() {
      try {
        const { data, error } = await supabase
          .from("solutions_by_industry")
          .select("id, name, is_department, icon")
          .order("created_at", { ascending: false });

        this.industries = data;
        if (error) {
          console.log(error);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //get portfolio
    async get_portfolio_items() {
      try {
        const { data, error } = await supabase.from("portfolio").select("*");

        if (error) {
          console.log(error);
          return;
        }
        this.portfolio_items = data;
      } catch (error) {
        console.log(error);
      }
    },
    //get carouses
    async get_carousel() {
      try {
        const { data, error } = await supabase.from("carousel").select("*");

        if (error) {
          console.log(error);
          return;
        }
        this.carousel_data = data;
        this.total_slides = this.carousel_data.length;
        // console.log(this.carousel_data);
        // console.log(this.total_slides);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
