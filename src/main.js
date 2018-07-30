import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Vue.component('hello-world', {
//   template: '<div>Hello world</div>'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
