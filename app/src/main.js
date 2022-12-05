import '@/plugins/flexible'
import '@/plugins/vuescroll'
import '@/plugins/elementUI'
import '@/plugins/fontAwesomeIcon'
import '@/plugins/animate'
import '@/assets/scss/index.scss'

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
