<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <!-- hero section -->
    <div class="w-full h-[80vh]">
      <!-- hero lines -->
      <!-- <div
        class="h-[400px] w-[500px] absolute left-[-20%] top-[-10vh] opacity-90 custom-anime-movein"
      > -->
      <div class="h-full w-full absolute opacity-40">
        <img src="/icons/g26.svg" class="" />
        <!-- <img src="/icons/lines.svg" class="h-auto w-full" /> -->
        <!-- <img src="/icons/hero-lines-light.svg" class="top-[-20vh]" /> -->
      </div>
      <div class="w-full h-full flex justify-center overflow-hidden">
        <div class="w-3/4 flex flex-wrap mt-16 relative overflow-hidden">
          <!-- animation classes -->
          <div
            class="w-[100px] h-[100px] border-8 bg-body rounded-full absolute top-[40vh] border-[#8dc63f] opacity-15 custom-anime-random"
          ></div>
          <div
            class="w-[70px] h-[70px] left-[150px] border-8 bg-default rounded-full absolute top-[40vh] border-white opacity-15 custom-anime-movedown"
          ></div>
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
                <p class="text-secondary w-3/4">{{ slide.sm_title }}</p>
                <h1 class="text-4xl font-extrabold mt-10 w-3/4">
                  {{ slide.title }}
                </h1>
                <p class="w-3/4 mt-10">
                  {{ slide.description }}
                </p>
                <div class="w-full flex mt-16">
                  <RoundedButton
                    button_link="/contact"
                    button_text="Learn More"
                    button_icon="fa-solid fa-angle-right"
                    :defaultColor="'#333'"
                    :hoverColor="'#8dc63f'"
                    :iconColor="'#262262'"
                    button_circle_background="#262262"
                  />
                  <RoundedButton
                    class="ml-4"
                    button_link="/contact"
                    button_text="Let's Talk"
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
              <div class="w-1/2 h-full">
                <div class="w-full h-full relative">
                  <div class="img-holder h-full overflow-hidden">
                    <img :src="slide.pic" class="rounded-2xl" />
                  </div>
                  <!-- stats board -->
                  <div
                    class="w-[65%] h-1/2 absolute z-10 bg-body top-[25vh] rounded-tr-2xl p-4 left-[-10%]"
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
                    class="w-[40%] absolute z-10 top-[42vh] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl left-[55%] bg-white"
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
                  class="fa-solid fa-angle-left text-2xl text-secondary p-2 pr-4 pl-4 border border-[#8dc63f] cursor-pointer"
                  @click="prevSlide"
                ></i>
                <i
                  class="fa-solid fa-angle-right text-2xl text-secondary p-2 pr-4 pl-4 border border-[#8dc63f] ml-2 cursor-pointer"
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
      class="w-full flex flex-wrap justify-center overflow-hidden top-56 mt-36"
    >
      <div class="w-3/4">
        <p class="text-secondary flex justify-center">
          <router-link to="/services">OUR SERVICES</router-link>
        </p>

        <h1 class="text-4xl font-bold mt-4 p-2 flex justify-center">
          Services <span class="text-secondary mr-2 ml-2">Tailored</span>
          To Meet Your Business Needs
        </h1>
      </div>
      <!-- prev h-[60vh] -->
      <div class="w-[90%] flex justify-center mt-16">
        <div class="w-full flex flex-wrap">
          <div
            v-for="(service, index) in home_services"
            :key="index"
            class="service-card h-[40vh] w-[45%] z-10 ml-[2.5%] flex flex-nowrap mb-4 relative"
          >
            <div
              class="w-[35%] absolute h-full flex justify-center overflow-hidden"
            >
              <img :src="service.imageUrl" class="max-w-none max-h-none
              min-h-full min-w-fullj abso"
            </div>
            <div
              class="w-[65%] content bg-white h-full z-20 p-4 absolute ml-[35%]"
            >
              <i class="text-secondary mt-4 text-3xl" :class="service.icon"></i>
              <h1 class="text-xl font-semibold text-default w-[96%] mt-6">
                {{ service.name }}
              </h1>
              <p class="mt-6 w-[96%]">{{ service.title_description }}</p>
              <div class="w-[96%] flex justify-end mt-6">
                <router-link
                  :to="'/service/' + service.name"
                  class="custom-link text-secondary"
                >
                  Get Started
                  <i
                    class="fa-solid fa-angle-right text-xl ml-1 rotate-[-45deg]"
                  ></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
        class="w-[86%] bg-white p-4 h-full flex flex-nowrap transition-transform duration-500 ease-in-out overflow-hidden"
      >
        <div
          v-for="(service, index) in home_services"
          :key="index"
          class="w-full h-full flex-shrink-0 p-4 flex rounded-2xl"
          :style="{ transform: `translateX(-${current_service_slide * 100}%)` }"
        >
          <div class="w-[40%] flex flex-col justify-around">
            <div class="" v-html="service.title"></div>

            <p class="w-3/4 p-2 mt-6">{{ service.description }}</p>
            <div class="w-fit mt-24 pb-6">
              <RoundedButton
                button_link="/contact"
                button_text="Get Started"
                button_icon="fa-solid fa-angle-right"
                :defaultColor="'#333'"
                :hoverColor="'#8dc63f'"
                :iconColor="'#262262'"
                button_circle_background="#262262"
              />
            </div>
          </div>
          <div class="w-[60%] d-flex justify-center h-full">
            <div class="w-[90%] relative h-full">
              <div
                class="absolute mt-14 w-3/4 h-[70%] bg-linear-[25deg,#262262_40%,#1D65AB_60%,#8DC63F_90%] rounded-xl"
              >
                <div class="w-full p-2">
                  <h1 class="text-2xl text-white font-bold p-4 w-3/4">
                    {{ service.service_name }}
                  </h1>
                </div>
                <div class="w-[40%] p-4">
                  <li
                    v-for="(feat, index) in service.features"
                    :key="index"
                    class="text-white w-full"
                  >
                    {{ feat.feature_title }}
                  </li>
                </div>
              </div>
              <div class="absolute z-10 w-[65%] mt-32 left-[40%] h-[250px]">
                <img :src="service.pic" class="h-full w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div> -->
      </div>
    </div>
    <!-- portfolio -->
    <div
      class="w-full flex flex-nowrap overflow-hidden justify-center top-56 mt-36"
    >
      <div
        class="w-[86%] bg-white p-4 h-full flex flex-nowrap transition-transform duration-500 ease-in-out overflow-hidden"
      >
        <div class="w-[30%] h-full p-6">
          <p class="text-secondary w-3/4">PORTFOLIO</p>
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
        <div class="w-[70%] h-[65vh] flex justify-center">
          <div
            class="w-[96%] flex overflow-x-scroll overflow-y-hidden custom-scrollbar relative"
          >
            <!-- portfolio item -->
            <div
              v-for="(project, index) in home_portfolio"
              :key="index"
              class="w-[36%] min-w-[36%] h-[90%] relative cursor-pointer rounded-2xl overflow-hidden ml-4 custom-portfolio-hover"
            >
              <img
                :src="project.pic"
                class="h-full absolute w-auto max-w-none"
              />
              <div
                class="h-full w-full absolute z-10 bg-black opacity-0 c-background"
              ></div>
              <div
                class="h-full w-full absolute z-20 bg-transparent flex justify-center"
              >
                <div class="h-full flex-col justify-center c-layer hidden">
                  <h2 class="text-4xl text-white w-[70%] flex p-2">
                    {{ project.project }}
                  </h2>
                  <a :href="project.link" target="_blank"
                    ><p
                      class="custom-link text-secondary mt-3 w-[70%] flex p-2"
                    >
                      Visit Site
                      <i
                        class="fa-solid fa-angle-right ml-2 rotate-[-45deg] text-xl"
                      ></i></p
                  ></a>
                </div>
              </div>
            </div>
            <!-- end of it -->
            <!-- portfolio item -->
            <div
              v-for="(project, index) in home_portfolio"
              :key="index"
              class="w-[36%] h-[90%] relative cursor-pointer rounded-2xl overflow-hidden ml-4 custom-portfolio-hover"
            >
              <img
                :src="project.pic"
                class="h-full absolute w-auto max-w-none"
              />
              <div
                class="h-full w-full absolute z-10 bg-black opacity-0 c-background"
              ></div>
              <div
                class="h-full w-full absolute z-20 bg-transparent flex justify-center"
              >
                <div class="h-full flex-col justify-center c-layer hidden">
                  <h2 class="text-4xl text-white w-[70%] flex p-2">
                    {{ project.project }}
                  </h2>
                  <a :href="project.link" target="_blank"
                    ><p
                      class="custom-link text-secondary mt-3 w-[70%] flex p-2"
                    >
                      Visit Site
                      <i
                        class="fa-solid fa-angle-right ml-2 rotate-[-45deg] text-xl"
                      ></i></p
                  ></a>
                </div>
              </div>
            </div>
            <!-- end of it -->
          </div>
        </div>
      </div>
    </div>
    <!-- industry -->
    <div class="w-full flex justify-center bg-white mt-32 pb-16">
      <div class="w-[90%]">
        <div class="w-full">
          <h1 class="text-4xl font-bold mt-10 p-2">
            Select your industry. Discover our impact.
          </h1>
        </div>
        <div class="w-full flex flex-wrap mt-16">
          <div
            v-for="(industry, index) in industries"
            :key="index"
            class="industry-card w-[49%] ml-[1%] flex flex-nowrap cursor-pointer pt-3 pb-3 ease-in-out border-b-1 border-[#dfdfdf] hover:border-b-2"
          >
            <div class="w-[90%] flex flex-nowrap">
              <i :class="industry.icon" class="text-secondary ml-2 pt-2"></i>
              <p class="ml-4 text-2xl text-default">{{ industry.name }}</p>
            </div>
            <div class="w-[10%] flex justify-end">
              <i
                class="fa-solid fa-arrow-right mr-6 opacity-0 mt-2 text-xl text-default"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- partners/companies -->
    <Partners />
    <!-- stories -->
    <div class="w-full mt-36 p-4 flex justify-center">
      <div class="w-[90%]">
        <div class="w-full">
          <p class="text-secondary w-full flex justify-center">STORIES</p>
          <h1 class="text-3xl font-bold mt-3 w-full flex justify-center">
            Success Stories From Our Clients
          </h1>
        </div>
        <div class="w-full flex justify-center mt-16">
          <div
            v-for="story in stories"
            :key="story.id"
            class="w-[28%] m-2 bg-white overflow-hidden zoom-animate"
          >
            <div class="w-full h-[30vh] overflow-hidden">
              <img :src="story.pic" class="h-full w-auto max-w-none" />
            </div>
            <div class="p-2">
              <router-link to="#"
                ><h3 class="font-semibold text-xl">
                  {{ story.company_name }}
                </h3></router-link
              >
              <p class="mt-4">{{ story.description }}</p>
              <div class="w-full flex justify-end pb-4">
                <router-link to="#" class="custom-link text-secondary mt-12">
                  Read More
                  <i
                    class="fa-solid fa-angle-right text-xl ml-2 rotate-[-45deg]"
                  ></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- blogs -->
    <div class="w-full mt-36 p-4">
      <div class="w-full p-10">
        <p class="text-secondary w-full flex justify-center">
          <router-link to="/blogs">BLOG</router-link>
        </p>
        <h1 class="text-3xl font-bold mt-3 w-full flex justify-center">
          Tech <span class="text-secondary">Tips</span> &
          <span class="text-secondary">Trends</span>
        </h1>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-[80%] flex">
          <div class="w-[40%] m-1 flex justify-center">
            <div
              v-for="blog in blogs.slice(0, 1)"
              :key="blog.id"
              class="w-[90%] m-2 bg-white overflow-hidden zoom-animate"
            >
              <div class="w-full h-[40vh] overflow-hidden relative">
                <div
                  class="absolute pointer-to-show z-20 top-[30vh] h-[50px] w-[50px] left-[80%] rounded-full bg-secondary cursor-pointer text-white flex justify-center"
                  style="rotate: -45deg"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-angle-right text-2xl"></i>
                  </div>
                </div>
                <img
                  :src="blog.pic"
                  class="min-h-full h-full min-w-full w-auto max-w-none"
                />
              </div>
              <div class="p-4">
                <div class="w-full pt-2 pb-2 flex">
                  <span
                    class="bg-secondary text-sm text-white rounded-full pl-2 pr-2"
                    >{{ blog.category }}</span
                  >
                  <div class="line w-[1px] bg-secondary ml-6 h-[23px]"></div>
                  <span class="ml-6 text-sm">{{ blog.date }}</span>
                </div>
                <router-link to="#"
                  ><h3 class="font-normal text-3xl">
                    {{ blog.title }}
                  </h3></router-link
                >
                <div class="w-full mt-10 flex">
                  <div class="w-[50px] h-[50px]">
                    <img src="/icons/profile.png" />
                  </div>
                  <div class="pl-4 pr-4" style="width: calc(100% - 50px)">
                    <p class="text-sm">{{ blog.writer }}</p>
                    <p class="text-sm">{{ blog.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[60%] m-1 flex flex-col">
            <div
              v-for="blog in blogs.slice(1, 3)"
              :key="blog.id"
              class="w-full mb-2 flex bg-white h-[40vh] zoom-animate"
            >
              <div class="w-[40%] h-full overflow-hidden relative">
                <img
                  :src="blog.pic"
                  class="min-h-full h-full min-w-full w-auto max-w-none"
                />
                <div
                  class="absolute pointer-to-show z-20 top-[30vh] h-[50px] w-[50px] left-[80%] rounded-full bg-secondary cursor-pointer text-white flex justify-center"
                  style="rotate: -45deg"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-angle-right text-2xl"></i>
                  </div>
                </div>
              </div>
              <div class="w-[60%] overflow-hidden p-4">
                <router-link to="#"
                  ><h3 class="font-normal text-2xl">
                    {{ blog.title }}
                  </h3></router-link
                >
                <div class="w-full h-full flex flex-col justify-around pb-4">
                  <div class="w-full pt-2 pb-2 flex">
                    <span
                      class="bg-secondary h-fit text-sm text-white rounded-full pl-2 pr-2"
                      >{{ blog.category }}</span
                    >
                    <div class="line w-[1px] bg-secondary ml-6 h-[23px]"></div>
                    <span class="ml-6 text-sm">{{ blog.date }}</span>
                  </div>
                  <div class="w-full mt-10 flex">
                    <div class="w-[50px] h-[50px]">
                      <img src="/icons/profile.png" />
                    </div>
                    <div
                      class="pl-4 pr-4 pb-4"
                      style="width: calc(100% - 50px)"
                    >
                      <p class="text-sm">{{ blog.writer }}</p>
                      <p class="text-sm">{{ blog.position }}</p>
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
import { supabase } from "../store/supabase";

export default {
  name: "Home",
  components: { Navbar, Footer, RoundedButton, Spinner, Cta, Partners },
  data() {
    return {
      //spinner
      page_is_loading: true,
      current_slide: 0,
      total_slides: 3, // Number of slides
      //service carousel
      current_service_slide: 0,
      total_service_slides: 3,
      x: 0,
      y: 0,
      //carousel data
      carousel_data: [
        {
          sm_title: "UNIFIED. SIMPLIFIED",
          title: "Handle All Customer Conversations from One Unified Platform",
          description:
            "Manage voice, chat, social, and email from one powerful system—streamline support, elevate customer experience.",
          pic: "/carousel/cc web.svg",
        },
        {
          sm_title: "STAFFING THAT SPEAKS",
          title: "Scale Faster with Expert Agents Representing Your Brand",
          description:
            "We provide the expertise and support to propel your business forward in the digital landscape.",
          pic: "/carousel/outsourced.jpg",
        },
        {
          sm_title: "FAST, RELIABLE, EVERYWHERE",
          title: "Dependable Internet Connectivity for Businesses",
          description:
            "Delivering high-speed, stable internet for homes and businesses—your gateway to a connected future.",
          pic: "/carousel/network.png",
        },
      ],
      home_services: [],
      home_portfolio: [
        {
          project: "Chunic Machinery",
          pic: "/portfolio/chunic.png",
          link: "https://machinery.chunic.com/",
        },
        {
          project: "Chunic Logistics",
          pic: "/portfolio/chunic-2.png",
          link: "/portfolio/chunic-2.png",
        },
        {
          project: "Boresha Sacco",
          pic: "/portfolio/portfolio1.png",
          link: "#",
        },
      ],
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
      ],
      blogs: [
        {
          id: 1,
          title: "OpenAI launches new alignment division",
          category: "Airtifical Intelligence",
          date: "12 May 2025",
          pic: "/blogs/1.png",
          writer: "Caroline Mwikali",
          position: "Marketing Lead",
        },
        {
          id: 2,
          title: "Optimizing Page Load Animations for Modern Web",
          category: "Development",
          date: "25 May 2025",
          pic: "/blogs/2.png",
          writer: "Danile Mwashumbe",
          position: "Dev Lead",
        },
        {
          id: 3,
          title: "The Tech Behind Seamless Page Load Effects",
          category: "Technology",
          date: "1 June 2025",
          pic: "/blogs/3.png",
          writer: "Billy Mild",
          position: "IT Lead",
        },
      ],
      industries: [
        { icon: "fa solid fa-microchip", name: "Information Technology" },
        { icon: "fa-solid fa-stethoscope", name: "Healthcare" },
        { icon: "fa-solid fa-piggy-bank", name: "Banking" },
        { icon: "fa-solid fa-coins", name: "Saccos and Chamas" },
        { icon: "fa-solid fa-plane", name: "Travel & Logistics" },
        { icon: "fa-solid fa-dollar-sign", name: "Insurance" },
        { icon: "fa-solid fa-building", name: "Schools" },
        { icon: "fa-solid fa-photo-film", name: "Media" },
      ],
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

      console.log(this.home_services);
    },
  },
};
</script>
