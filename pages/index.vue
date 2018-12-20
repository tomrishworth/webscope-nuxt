<template>
  <section class="container">
    <div>
      <p>Homepage</p>
      <post-teaser v-for="post in posts.data" :key="post.id" :id="post.id"></post-teaser>
    </div>
  </section>
</template>

<script>
import PostTeaser from "@/components/Blog/PostTeaser.vue";

export default {
  async fetch({ store, params }) {
    await store.dispatch("getPosts");
  },
  components: {
    PostTeaser
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    }
  }
};
</script>



