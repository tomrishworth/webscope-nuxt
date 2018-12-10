import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export const state = () => ({
  list: []
});

export const mutations = {
  gotTeamMembers(state, payload) {
    state.list = payload;
  }
};

export const actions = {
  async getTeamMembers({ commit }) {
    const response = await strapi.request("post", "/graphql", {
      data: {
        query: `query {
              teammembers {
                id
                Name
                Bio
                Linkedin
                Image {
                  url
                }
              }
            }
            `
      }
    });
    console.log(response);
    commit("gotTeamMembers", response.data.teammembers);
  }
};

export const getters = {
  list: state => {
    return state.list;
  }
};
