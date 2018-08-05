import Vue from 'vue'
import App from '../../App'
import router from '../../router'
import wrap from '@vue/web-component-wrapper'
import componentA from './ComponentA'
import '@/assets/base.css'

// 注册全局组件
Vue.component('component-b', { // webpack中配置 alias: vue/dist/vue.esm.js 或 runtimeCompiler: true
  data () {
    return { b: '2' }
  },
  template: '<div>{{ b }}</div>'
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
console.log(`vm.$data ==> `) // Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问。
console.log(vm.$data)

console.log(`vm.$props ==> `) // 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。
// console.log(vm.$props)

console.log(`vm.$el ==> `) // Vue 实例使用的根 DOM 元素。
console.log(vm.$el)

console.log(`vm.$options ==> `) // 用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处
console.log(vm.$options)

console.log(`vm.$parent ==> `) // 父实例，如果当前实例有的话。
// console.log(vm.$parent)

console.log(`vm.$root ==> `) // 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
console.log(vm.$root)

console.log(`vm.$children ==> `) // 当前实例的直接子组件。
console.log(vm.$children)

console.log(`vm.$slots ==> `) // 用来访问被插槽分发的内容。
// console.log(vm.$slots)

console.log(`vm.$scopedSlots ==> `) // 用来访问作用域插槽。
// console.log(vm.$scopedSlots)

console.log(`vm.$refs ==> `) // 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。
// conosle.log(vm.$refs)

console.log(`vm.$isServer ==> `) // 当前 Vue 实例是否运行于服务器。
console.log(vm.$isServer)

console.log(`vm.$attrs ==> `) // 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
// console.log(vm.$attrs)

console.log(`vm.$listeners ==> `) // 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
// console.log(vm.$listeners)

export default vm