import Vue from 'vue'
import Index from './Index.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app')
