const pkg = require("./package");
import axios from "axios";

module.exports = {
  generate: {
    routes: function() {
      return axios
        .get(
          "http://dev-webscope-api.pantheonsite.io/jsonapi/node/article?fields[node--article]=title,created,body,field_author,field_image,path&include=field_author,field_image"
        )
        .then(res => {
          return res.data.data.map(post => {
            return { route: post.attributes.path.alias, payload: post };
          });
        });
    }
  },
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/jpy7qvw.css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/style.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/fontawesome.js",
    "~plugins/filters.js",
    { src: "~plugins/aos.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    ["bootstrap-vue/nuxt", { css: false }],
    [
      "nuxt-sass-resources-loader",
      [
        "@/assets/scss/_variables.scss",
        "@/node_modules/bootstrap/scss/_functions.scss",
        "@/node_modules/bootstrap/scss/_variables.scss",
        "@/node_modules/bootstrap/scss/_mixins.scss"
      ]
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
};
