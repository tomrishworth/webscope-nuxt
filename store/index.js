import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: []
    }),
    mutations: {
      setPosts(state, payload) {
        state.posts = payload;
      }
    },
    actions: {
      async getPosts({ commit }) {
        const { data } = await axios.get(
          "http://dev-webscope-api.pantheonsite.io/jsonapi/node/article?fields[node--article]=title,created,body,field_author,field_image&include=field_author,field_image"
        );
        commit("setPosts", data);
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
      }
    }
  });
};

export default createStore;
