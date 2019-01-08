<template>
  <div>
    <hero></hero>
    <clients></clients>
    <asset-one></asset-one>
    <lms></lms>
    <hireplants></hireplants>
    <post-teasers></post-teasers>
    <testimonials></testimonials>
  </div>
</template>

<script>
import Hero from "@/components/Homepage/Hero.vue";
import Clients from "@/components/Homepage/Clients.vue";
import AssetOne from "@/components/Homepage/AssetOne.vue";
import Lms from "@/components/Homepage/Lms.vue";
import Hireplants from "@/components/Homepage/Hireplants.vue";
import PostTeasers from "@/components/Blog/PostTeasers.vue";
import Testimonials from "@/components/Testimonial/Testimonials.vue";

export default {
  components: {
    Hero,
    Clients,
    AssetOne,
    Lms,
    Hireplants,
    PostTeasers,
    Testimonials
  }
};
</script>







