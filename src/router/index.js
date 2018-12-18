import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import Projects from '@/components/Projects'
// step1
// import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    }
    // step2
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
    ,
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})
