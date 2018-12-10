<template>
  <section class="container">
    <div>
      <p>Homepage</p>
      {{ teamMembers}}
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      query: ""
    };
  },
  computed: {
    teamMembers() {
      return this.$store.getters["teamMembers/list"];
    }
    // ...mapGetters(["teamMembers"])
  },
  mounted() {
    this.$store.dispatch("teamMembers/getTeamMembers");
  }
  // async fetch({ store }) {
  //   const response = await strapi.request("post", "/graphql", {
  //     data: {
  //       query: `query {
  //         teammembers {
  //           id
  //           Name
  //           Bio
  //         }
  //       }
  //       `
  //     }
  //   });
  //   console.log(response);
  //   response.data.teamMembers.forEach(teamMember => {
  //     store.commit('team')
  //   })
  // }
};
</script>


