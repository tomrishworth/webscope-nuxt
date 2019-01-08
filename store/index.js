import Vuex from "vuex";
import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: [],
      teamMembers: [],
      testimonials: []
    }),
    mutations: {
      setPosts(state, payload) {
        state.posts = payload;
      },
      setTeamMembers(state, payload) {
        state.teamMembers = payload;
      },
      setTestimonials(state, payload) {
        state.testimonials = payload;
      }
    },
    actions: {
      async getPosts({ commit, dispatch }) {
        const { data } = await axios.get(
          "http://dev-webscope-api.pantheonsite.io/jsonapi/node/article?fields[node--article]=title,created,body,field_author,field_image,path&include=field_author,field_image"
        );
        commit("setPosts", data);
        dispatch("getAuthors");
      },
      async getAuthors({ commit }) {
        const { data } = await axios.get(
          "http://dev-webscope-api.pantheonsite.io/jsonapi/node/team_member?fields[node--team-member]=title,body,field_linkedin,role,field_image,&include=field_image"
        );
        commit("setTeamMembers", data);
      },
      async getTestimonials({ commit }) {
        console.log("Getting testimonials");
        const { data } = await axios.get(
          "http://dev-webscope-api.pantheonsite.io/jsonapi/node/testimonial?fields[node--testimonial]=title,body,field_case_study_link,field_company,field_profile_pic,&include=field_profile_pic"
        );
        commit("setTestimonials", data);
      }
    },
    getters: {
      allPosts: state => {
        return state.posts;
      },
      postById: state => id => {
        return state.posts.data.find(post => {
          return post.id === id;
        });
      },
      postBySlug: state => slug => {
        return state.posts.data.find(post => {
          const fullPath = "/blog/" + slug;
          return post.attributes.path.alias === fullPath;
        });
      },
      allTeamMembers: state => {
        return state.teamMembers;
      },
      teamMemberById: state => id => {
        return state.teamMembers.data.find(teamMember => {
          return teamMember.id === id;
        });
      },
      teamMemberImageById: state => id => {
        return state.teamMembers.included.find(image => {
          return image.id === id;
        });
      },
      allTestimonials: state => {
        return state.testimonials;
      },
      testimonialById: state => id => {
        return state.testimonials.data.find(testimonial => {
          return testimonial.id === id;
        });
      },
      testimonialImageById: state => id => {
        return state.testimonials.included.find(image => {
          return image.id === id;
        });
      }
    }
  });
};

export default createStore;
