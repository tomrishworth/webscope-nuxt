<template>
  <article>
    <p>Hello {{ blog }}</p>
    <!-- {{ data.attributes.title }} -->
    <nuxt-link :to="'/'">Back</nuxt-link>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  // validate({ params }) {
  //   return !isNaN(+params.id)
  // },
  props: ['blog']
  // async asyncData({ params, error }) {
  //   const { data } = await axios.get(
  //     `http://dev-webscope-api.pantheonsite.io/jsonapi/node/article/${
  //       params.id
  //     }`
  //     // `https://jsonplaceholder.typicode.com/posts/${+params.id}`
  //   )
  //   return data
  // }
}
</script>
