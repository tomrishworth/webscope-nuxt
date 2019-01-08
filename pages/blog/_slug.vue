<template>
  <div class="blog-post">
    <div v-if="post.relationships.field_image.data">
      <img
        :src="'http://dev-webscope-api.pantheonsite.io/' + postImage(post.relationships.field_image.data.id).attributes.uri.url"
      >
    </div>
    <h1>{{ post.attributes.title }}</h1>
    {{ teamMember.attributes.title }}
    <div v-if="teamMemberImage">
      <img :src="'http://dev-webscope-api.pantheonsite.io/' + teamMemberImage.attributes.uri.url">
    </div>
    <div v-html="post.attributes.body.value"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async fetch({ store, params }) {
    await store.dispatch("getPosts");
  },
  async asyncData({ params }) {
    return {
      slug: params.slug
    };
  },
  computed: {
    post() {
      return this.$store.getters["postBySlug"](this.slug);
    },
    included() {
      return this.$store.getters.allPosts.included;
    },
    teamMember() {
      return this.$store.getters["teamMemberById"](
        this.post.relationships.field_author.data.id
      );
    },
    teamMemberImage() {
      return this.$store.getters["teamMemberImageById"](
        this.teamMember.relationships.field_image.data.id
      );
    }
  },
  methods: {
    // postAuthor(value) {
    //   return this.included.find(teamMember => {
    //     return teamMember.id === value;
    //   });
    // },
    postImage(value) {
      return this.included.find(image => {
        return image.id === value;
      });
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
};
</script>
