<template>
  <section class="container">
    <div>
      <p>Blog</p>
      <post-teasers></post-teasers>
    </div>
  </section>
</template>

<script>
import PostTeasers from "@/components/Blog/PostTeasers.vue";

export default {
  components: {
    PostTeasers
  }
};
</script>

