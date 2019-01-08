<template>
  <div class="page-wrapper">
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 1540px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
}
</style>
