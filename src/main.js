import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueInstance from './components/vueInstance'

Vue.config.productionTip = false

new Vue({
  comments: { vueInstance },
  router,
  render: h => h(App)
}).$mount('#app')
