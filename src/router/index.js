import Vue from 'vue'
import VueRouter from 'vue-router'

import VueInstance from '@/components/vueInstance'
import TemplateSyntax from '@/components/templateSyntax'

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    { path: '/vueInstance', component: VueInstance },
    { path: '/templateSyntax', component: TemplateSyntax }
  ]
})