<template>
  <nuxt-link :to="post.attributes.path.alias">
    <div v-if="post.relationships.field_image.data">
      <img
        width="300"
        :src="'http://dev-webscope-api.pantheonsite.io/' + postImage(post.relationships.field_image.data.id).attributes.uri.url"
      >
    </div>
    <div>{{ post.attributes.title }}</div>
    <div>{{ postAuthor(post.relationships.field_author.data.id).attributes.title}}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    included() {
      return this.$store.getters.allPosts.included;
    }
  },
  methods: {
    postAuthor(value) {
      return this.included.find(teamMember => {
        return teamMember.id === value;
      });
    },
    postImage(value) {
      console.log(value);
      return this.included.find(image => {
        return image.id === value;
      });
    }
  }
};
</script>
