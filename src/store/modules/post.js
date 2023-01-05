import postService from '@/services/post.service';

const postsModule = {
  state: () => ({
    items: [],
    loading: false,
    error: null,
    limit: 10,
  }),

  getters: {},

  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },

    setLoading(state, payload) {
      state.loading = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },

    createItem(state, payload) {
      state.items.push(payload);
    },

    removeItem(state, payload) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },

  actions: {
    async fetchPost({ state, commit }) {
      try {
        commit('setLoading', true);
        const data = await postService.get({ limit: state.limit });
        commit('setItems', data);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },

    async deletePost({ commit }, payload) {
      try {
        await postService.delete(payload);
        commit('removeItem', payload);
      } catch (error) {
        commit('setError', error.message);
      }
    },
  },

  namespaced: true,
};

export default postsModule;
