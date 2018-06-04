import Vue from 'vue'
import Router from 'vue-router'
import LighthouseSearch from '@/components/LighthouseSearch'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LighthouseSearch',
      component: LighthouseSearch
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },


  ]
})
