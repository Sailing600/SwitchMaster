import Vue from 'vue'
import Router from 'vue-router'
import JsonExcel from 'vue-json-excel'
import Home from './views/Home.vue'
import Plan from './views/Plan.vue'
import Planning from './views/Planning.vue'

Vue.component('downloadExcel', JsonExcel)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/planning',
      name: 'planning',
      component: Planning
    }
  ]
})
