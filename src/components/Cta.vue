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
          <RoundedButton
            button_link="/contact"
            button_text="Get Started"
            button_icon="fa-solid fa-angle-right text-white"
            :defaultColor="'#333'"
            :hoverColor="'#262262'"
            :iconColor="'#fefffe'"
            button_border="#8dc63f"
            button_background="#fefffe"
            button_circle_background="#8dc63f"
          />
          <RoundedButton
            class="ml-4"
            button_link="/contact"
            button_text="Contact us"
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
</template>
<script>
import RoundedButton from "./buttons/RoundedButton.vue";

export default {
  name: "Cta",
  components: { RoundedButton },
  props: { cta_class: String },
};
</script>
