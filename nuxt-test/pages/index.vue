<template>
  <article>
    <h1>Index</h1>
    <div class="grid">
      <ul>
        <li v-for="blog in blogs.data" :key="blog.id" class="item">
          <nuxt-link :to="blog.attributes.path.alias" :blog="blog">{{ blog.attributes.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- <div class="grid">
      <ul>
        <li v-for="blog in blogs" :key="blog.id" class="item">
          <nuxt-link :to="'/blog/' + blog.id">{{ blog.title }}</nuxt-link>
        </li>
      </ul>
    </div>-->
  </article>
</template>


<script>
import axios from 'axios'

export default {
  title: 'Hey there',
  // data() {
  //   return {
  //     blogs: [
  //       {
  //         id: '1',
  //         title: 'Blog Title'
  //       }
  //     ]
  //   }
  // }
  async asyncData() {
    const { data } = await axios.get(
      'http://dev-webscope-api.pantheonsite.io/jsonapi/node/article?fields[node--article]=title,created,body,field_author,field_image,path&include=field_author,field_image'
    )
    return { blogs: data }
  }
}
</script>
