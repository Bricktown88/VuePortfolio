import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import Projects from '@/components/Projects'
// import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
    // }
    // ,
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})
