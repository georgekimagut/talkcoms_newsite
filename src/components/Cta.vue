<template>
  <div
    class="w-full h-[60vh] pt-8 pb-8 flex justify-center bg-white"
    :class="cta_class"
  >
    <div class="w-[55%] h-full flex justify-center">
      <div class="h-full flex flex-col justify-center">
        <div class="w-full">
          <h1 class="text-5xl font-extrabold mt-4 p-2 text-center">
            Ready To
            <span class="text-secondary ml-2 mr-2">Transform</span> Your
            Business
            <span class="text-secondary ml-2 mr-2">With Tech?</span>
          </h1>
          <p class="mt-2 text-center">
            Join thousands of professionals who have transformed their business
            with our solutions
          </p>
        </div>
        <div class="w-full flex justify-center mt-14">
          <DarkButton button_link="/contact-us" button_text="Get Started" />
          <LightButton
            button_link="/contact-us"
            button_text="Contact Us"
            class="ml-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RoundedButton from "./buttons/RoundedButton.vue";
import DarkButton from "./ui/button/DarkButton.vue";
import LightButton from "./ui/button/LightButton.vue";

export default {
  name: "Cta",
  components: { RoundedButton, DarkButton, LightButton },
  props: { cta_class: String },
};
</script>
