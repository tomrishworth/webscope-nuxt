<template>
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      v-if="post.relationships.field_image.data"
      width="300"
      :src="'http://dev-webscope-api.pantheonsite.io/' + postImage.attributes.uri.url"
    >
    <div class="card-body">
      <h5 class="card-title">{{ post.attributes.title }}</h5>
      <div class="font-weight-bold">{{ postAuthor.attributes.title }}</div>
      <p class="card-text">{{ post.attributes.body.summary }}</p>
      <nuxt-link :to="post.attributes.path.alias">Read More</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters["postById"](this.id);
    },
    postAuthor() {
      return this.included.find(teamMember => {
        return teamMember.id === this.post.relationships.field_author.data.id;
      });
    },
    postImage() {
      return this.included.find(image => {
        return image.id === this.post.relationships.field_image.data.id;
      });
    },
    included() {
      return this.$store.getters.allPosts.included;
    }
  }
};
</script>
