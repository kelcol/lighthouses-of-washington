import Vue from 'vue'
import Router from 'vue-router'
import Lighthouse from '@/components/Lighthouse'
import About from '@/components/About'
import TestMap from '@/components/TestMap'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Lighthouse
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/testmap',
      name: 'Test Map',
      component: TestMap
    },
    {

      path: '/lighthouse/:itemLabel',
      name: 'Lighthouse',
      component: Lighthouse
    }
  ]
})