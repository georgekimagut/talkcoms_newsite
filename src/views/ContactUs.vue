<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <HeroSection
      class_height="h-[70vh]"
      page_title="CONTACT US"
      big_pic="/carousel/about-us.png"
      small_pic="/carousel/about-us.png"
      page_min_statement="Drop us a message or contact us directly via our phone
    numbers below."
      is_contact_us="true"
    />
    <!-- contact us -->
    <div class="w-full flex mt-32 justify-center">
      <div class="w-[80%] flex flex-wrap">
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
        <div class="w-1/2 flex h-full justify-center">
          <!-- contact us form -->
          <div class="w-[90%]">
            <form @submit.prevent="" class="w-full flex flex-wrap">
              <div class="w-full flex flex-wrap">
                <div class="w-1/2 p-2">
                  <label class="text-sm">First Name</label>
                  <DefaultInput
                    input_type="text"
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    input_placeholder="First Name"
                    is_required="true"
                  />
                </div>
                <div class="w-1/2 p-2">
                  <label class="text-sm">Last Name</label>
                  <DefaultInput
                    input_type="text"
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    input_placeholder="Last Name"
                    is_required="true"
                  />
                </div>
                <div class="w-1/2 p-2">
                  <label class="text-sm">Email</label>
                  <DefaultInput
                    input_type="email"
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    input_placeholder="Enter Your Email"
                    is_required="true"
                  />
                </div>
                <div class="w-1/2 p-2">
                  <label class="text-sm">Phone</label>
                  <DefaultInput
                    input_type="number"
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    input_placeholder="Enter Your Phone"
                    is_required="true"
                  />
                </div>
                <div class="w-1/2 p-2">
                  <label class="text-sm">Company</label>
                  <DefaultInput
                    input_type="text"
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    input_placeholder="Company Name"
                    is_required="true"
                  />
                </div>
                <div class="w-1/2 p-2">
                  <label class="text-sm">Company Phone</label>
                  <DefaultInput
                    input_type="number"
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    input_placeholder="Company Phone"
                    is_required="true"
                  />
                </div>
                <div class="w-full p-2">
                  <label class="text-sm">How can we help you?</label>
                  <DefaultSelect
                    select_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
                    is_required="true"
                    :select_options="subjects"
                  />
                </div>
                <div class="w-full p-2">
                  <label class="text-sm">Message</label>
                  <DefaultTextArea
                    input_class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px] h-[150px]"
                    input_placeholder="Enter Your Message"
                    is_required="true"
                  />
                </div>
                <div class="w-full p-2">
                  <DefaultInput
                    input_type="checkbox"
                    input_class="border-1 border-[#e3e3e3] p-2 w-fit mt-[5px]"
                    is_required="true"
                  />
                  <label class="text-sm ml-2"
                    >Agree to
                    <span class="underline"
                      ><router-link to="#"
                        >Terms & Conditions</router-link
                      ></span
                    ></label
                  >
                </div>
                <div class="w-full p-2">
                  <SquareButton
                    button_text="Get Started"
                    button_class="bg-secondary text-white rounded-lg p-3 h-fit w-full cursor-pointer"
                    hover_color="bg-secondary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- maps -->
    <div class="w-full mt-32 h-[80vh]">
      <Maps map_class="w-full h-full" />
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import HeroSection from "../components/HeroSection.vue";
import DefaultInput from "../components/inputs/DefaultInput.vue";
import DefaultSelect from "../components/inputs/DefaultSelect.vue";
import DefaultTextArea from "../components/inputs/DefaultTextArea.vue";
import Maps from "../components/Maps.vue";
import SquareButton from "../components/buttons/SquareButton.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact us",
  components: {
    Navbar,
    Spinner,
    HeroSection,
    DefaultInput,
    DefaultSelect,
    DefaultTextArea,
    SquareButton,
    Maps,
    Footer,
  },
  data() {
    return {
      page_is_loading: true,
      subjects: [
        { value: "1", content: "Option one" },
        { value: "2", content: "Option two" },
        { value: "3", content: "Option three" },
      ],
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
