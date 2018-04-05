import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home-page/home'
import Guh from './../components/portfolios/guh-portfolio'
import Lyt from './../components/portfolios/lyt-portfolio'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/guh',
      name: 'guh-portfolio',
      component: Guh
    },
    {
      path: '/lyt',
      name: 'lyt-portfolio',
      component: Lyt
    }
  ]
})

export default router
