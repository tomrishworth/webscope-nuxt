<template>
  <section class="section-padding">
    <h1>About Us</h1>
    <div class="row">
      <div
        v-for="teamMember in teamMembersOrdered.data[0].relationships.items.data"
        :key="teamMember.id"
        class="col-3"
      >
        <team-member :id="teamMember.id"></team-member>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import teamMember from "@/components/TeamMember.vue";

export default {
  components: {
    teamMember
  },
  async asyncData() {
    let { data } = await axios.get(
      "http://dev-webscope-api.pantheonsite.io/jsonapi/entity_subqueue/team_members"
    );
    return { teamMembersOrdered: data };
  }
};
</script>
