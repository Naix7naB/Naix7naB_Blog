export default {
  namespaced: true,
  state: {
    isDown: false,
    scrollY: 0,
    maxTransY: 1000
  },
  getters: {},
  mutations: {
    SET_DOWN(state, flag) {
      state.isDown = flag
    },
    SET_SCROLLY(state, y) {
      state.scrollY = y
    }
  },
  actions: {
    setScrollY({ commit, state }, y) {
      const flag = y - state.scrollY > 0 || false
      commit('SET_DOWN', flag)
      commit('SET_SCROLLY', y)
    }
  }
}
