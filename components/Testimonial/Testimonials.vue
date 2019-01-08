<template>
  <section class="section-padding">
    <h2 class="text-center font-weight-normal mb-4">What our clients say</h2>
    <carousel :navigationEnabled="true">
      <slide v-for="testimonial in testimonials.data" :key="testimonial.id">
        <testimonial :id="testimonial.id"></testimonial>
      </slide>
    </carousel>
  </section>
</template>

<script>
import Testimonial from "@/components/Testimonial/Testimonial.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Testimonial,
    Carousel,
    Slide
  },
  computed: {
    testimonials() {
      return this.$store.getters.allTestimonials;
    }
  },
  beforeMount() {
    if (!this.$store.state.testimonials.length) {
      this.$store.dispatch("getTestimonials");
    }
  }
};
</script>
