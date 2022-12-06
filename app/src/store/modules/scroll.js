export default {
  namespaced: true,
  state: {
    scrollY: 0,
    maxTransY: 1000
  },
  getters: {},
  mutations: {
    SET_SCROLLY(state, y) {
      state.scrollY = y
    }
  },
  actions: {
    setScrollY({ commit }, y) {
      commit('SET_SCROLLY', y)
    }
  }
}
