import Vue from 'vue'
import App from '../App'
import router from '../router'
import wrap from '@vue/web-component-wrapper'
import componentA from '../components/componentA'

// 注册全局组件
Vue.component('component-b', { // webpack中配置 alias: vue/dist/vue.esm.js 或 runtimeCompiler: true
  data () {
    return { hi: 'hi' }
  },
  template: '<div>{{ hi }}</div>'
})

// 在 Web Components 模式中，Vue 是外置的。
const CustomElement = wrap(Vue, componentA)
window.customElements.define('component-a', CustomElement)

var data = { a: 1 }

// 创建vm实例
let vm = new Vue({
  data,
  customOption: 'foo',
  router,
  render: h => h(App)
}).$mount('#app')

console.log(vm)

console.log( `vm.a == data.a ==> ${vm.a == data.a}`)

vm.a = 2
console.log(`data.a ==> ${data.a}`)

data.a = 3
console.log(`vm.a ==> ${vm.a}`)

// 实例属性
console.log(`vm.$data ==> `)
console.log(vm.$data)

console.log(`vm.$el ==> `)
console.log(vm.$el)

console.log(`vm.$options ==> `)
console.log(vm.$options)

console.log(`vm.$parent ==> `)
console.log(vm.$parent)

console.log(`vm.$root ==> `)
console.log(vm.$root)

console.log(`vm.$children ==> `)
console.log(vm.$children)

export default vm