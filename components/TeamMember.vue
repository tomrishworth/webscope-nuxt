<template>
  <div class="mb-5">
    <div class="text-center mb-2" v-if="teamMemberImage">
      <img
        class="rounded-circle"
        width="150"
        :src="'http://dev-webscope-api.pantheonsite.io/' + teamMemberImage.attributes.uri.url"
      >
    </div>
    <h2 class="text-md mb-0 text-center">{{ teamMember.attributes.title }}</h2>
    <div class="text-muted mb-2 text-center">{{ teamMember.attributes.field_role }}</div>
    <!-- <div v-html="teamMember.attributes.body.value"></div> -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    teamMember() {
      return this.$store.getters["teamMemberById"](this.id);
    },
    teamMemberImage() {
      return this.$store.getters["teamMemberImageById"](
        this.teamMember.relationships.field_image.data.id
      );
    }
  }
};
</script>

