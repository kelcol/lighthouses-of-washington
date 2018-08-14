import Vue from 'vue'
import Router from 'vue-router'
import Lighthouse from '@/components/Lighthouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lighthouse',
      component: Lighthouse
    }
  ]
})
  