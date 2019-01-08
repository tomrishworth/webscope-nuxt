<template>
  <div>
    <div v-html="testimonial.attributes.body.value"></div>
    <div class="d-flex align-items-center">
      <div class="mr-3" v-if="testimonial.relationships.field_profile_pic.data">
        <img
          class="rounded-circle"
          :src="'http://dev-webscope-api.pantheonsite.io/' + profilePic.attributes.uri.url"
        >
      </div>
      <div>
        <h3 class="text-md mb-1">{{testimonial.attributes.title}}</h3>
        <h4
          class="text-md text-muted font-weight-normal mb-2"
        >{{testimonial.attributes.field_company}}</h4>
        <a
          class="btn btn-link btn-right-arrow"
          v-if="testimonial.attributes.field_case_study_link"
          :href="testimonial.attributes.field_case_study_link.uri"
        >View Case Study</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    testimonial() {
      return this.$store.getters["testimonialById"](this.id);
    },
    profilePic() {
      return this.$store.getters["testimonialImageById"](
        this.testimonial.relationships.field_profile_pic.data.id
      );
    }
  }
};
</script>
