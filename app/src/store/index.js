import Vue from 'vue'
import Vuex from 'vuex'

import scroll from './modules/scroll'

import bgImage from '@/assets/images/bg.png'
import defaultAvatar from '@/assets/images/avatar-default.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgImage,
    defaultAvatar
  },
  getters: {
    bgStyle(state) {
      return { backgroundImage: `url(${state.bgImage})` }
    }
  },
  mutations: {},
  actions: {},
  modules: {
    scroll
  }
})
