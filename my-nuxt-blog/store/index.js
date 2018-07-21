import Vue from "vue";
import Vuex from "vuex";
import service from "../api/";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      article: {
        // 热门文章
        hotArt: {
          pagination: {},
          list: []
        },

        // 列表文章
        art: {
          list: []
        },

        fetch: false,

        // 文章详情
        details: {}
      }
    },
    mutations: {
      FETCH_ART(state) {
        state.article.fetch = true;
      },

      SET_HOT_ART(state, data) {
        state.article.hotArt = data;
      },

      SET_ART_SUCCESS(state, data) {
        state.article.art = data;
        state.article.fetch = false;
      },

      SET_ART_FAIL(state) {
        state.article.art = { pagination: {}, list: [] };
        state.article.fetch = false;
      },

      SET_DETAILS(state, data) {
        state.article.details = data;
      },

      ADD_COMMENT(state) {
        state.article.details.meta.comments += 1;
      }
    },
    actions: {
      // 获取文章
      async getArtList({ commit, state }) {
        commit("article/FETCH_ART");
        const res = await service
          .getArts()
          .catch(err => console.error(err));
        if (res && res.code === 1) {
          let list;
          list = [...state.article.art.list, res];
          console.log(list)
          commit("article/SET_ART_SUCCESS", {
            list,
            pagination: 1
          });
        } else commit("article/SET_ART_FAIL");
      }
    }
  });
/**
 * aiticle
 */

export default store;
