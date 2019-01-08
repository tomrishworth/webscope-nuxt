<template>
  <section class="section-padding my-5 pt-5">
    <h2 class="text-center font-weight-normal mb-4">Recent Blog Posts</h2>
    <div class="card-deck justify-content-center">
      <post-teaser v-for="post in posts.data" :key="post.id" :id="post.id"></post-teaser>
    </div>
  </section>
</template>

<script>
import PostTeaser from "@/components/Blog/PostTeaser.vue";

export default {
  components: {
    PostTeaser
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    }
  },
  beforeMount() {
    if (!this.$store.state.posts.length) {
      this.$store.dispatch("getPosts");
    }
  }
};
</script>
