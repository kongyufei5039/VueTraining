import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '../components/Foo'
import Bar from '../components/Bar'

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})