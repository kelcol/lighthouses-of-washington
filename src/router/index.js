import Vue from 'vue'
import Router from 'vue-router'
import Lighthouse from '@/components/Lighthouse'
import About from '@/components/About'


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
  ]
})