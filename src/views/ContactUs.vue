<template>
  <!-- load spinner before -->
  <Spinner v-if="page_is_loading" />
  <div v-if="page_is_loading === false" class="w-full">
    <Navbar />
    <!-- <HeroSection
      small_title="CONTACT US"
      hero_description="Drop us a message or contact us directly via our phone numbers below."
      hero_image="/static/pic-3.png"
      hero_small_image="/static/about-us.png"
      is_contact
    /> -->
    <div class="bg-danger text-white p-4">
      If this is red, Tailwind config is working
    </div>
    <Input type="email" placeholder="Test" />
    <!-- contact us -->
    <div class="w-full flex mt-16 justify-center">
      <div class="w-[90%] flex flex-wrap">
        <div class="w-1/2">
          <p class="text-secondary">CONTACT US</p>
          <div class="w-[90%]">
            <BigTitle text="Get in" title_class="mt-4 text-5xl" />
            <BigTitle text="touch with us" title_class="mt-4 text-5xl" />
            <p class="mt-2">
              We're here to help! Whether you have a question about our
              services, general assistance or want to give feedback, our team is
              ready to assist you. Drop us a message or contact us directly via
              our phone numbers below.
            </p>
            <div class="w-full mt-6">
              <p>Email:</p>
              <p v-for="(email, index) in emails.slice(0, 1)" :key="index">
                <a
                  :href="`mailto:${email.email}`"
                  class="text-2xl font-semibold mt-2"
                >
                  {{ email.email }}
                </a>
              </p>
              <p class="mt-6">Phone:</p>
              <p
                v-for="(phone, index) in phones.slice(0, 1)"
                :key="index"
                class="text-2xl font-semibold mt-2"
              >
                <a :href="`tel:${phone.phone}`">
                  {{ phone.phone }}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex h-full">
          <!-- contact us form -->
          <div class="w-full bg-white p-5 rounded-xl shadow-sm">
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
                      ><router-link to="/legal/Terms & Conditions"
                        >Terms & Conditions</router-link
                      ></span
                    ></label
                  >
                </div>
                <div class="w-full p-2 flex justify-end">
                  <Button
                    class="relative overflow-hidden p-5 px-8 bg-secondary text-white cursor-pointer group"
                  >
                    <span class="relative z-10"
                      >Send <i class="fa-regular fa-paper-plane ml-3"></i
                    ></span>
                    <span
                      class="absolute inset-0 bg-default transform scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100 z-0"
                    ></span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- contact details -->
    <div class="w-full flex justify-center">
      <div class="w-[905] flex">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent> Card Content </CardContent>
          <CardFooter> Card Footer </CardFooter>
        </Card>
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
import DefaultInput from "../components/ui/input/DefaultInput.vue";
import DefaultSelect from "../components/inputs/DefaultSelect.vue";
import DefaultTextArea from "../components/inputs/DefaultTextArea.vue";
import Maps from "../components/Maps.vue";
import SquareButton from "../components/buttons/SquareButton.vue";
import Footer from "../components/Footer.vue";
import BigTitle from "@/components/text/BigTitle.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    BigTitle,
  },
  data() {
    return {
      page_is_loading: true,
      subjects: [
        { value: "1", content: "Option one" },
        { value: "2", content: "Option two" },
        { value: "3", content: "Option three" },
      ],
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
