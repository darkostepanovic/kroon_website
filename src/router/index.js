import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home-page/home'
import About from './../components/about-page/about'
import OurWork from './../components/our-work-page/our-work'
import Guh from './../components/portfolios/guh-portfolio'
import Lyt from './../components/portfolios/lyt-portfolio'
import Trainerize from './../components/portfolios/trainerize-portfolio'
import Hasler from './../components/portfolios/hasler-portfolio'

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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/our-work',
      name: 'our-work',
      component: OurWork
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
    },
    {
      path: '/trainerize',
      name: 'trainerize-portfolio',
      component: Trainerize
    },
    {
      path: '/hasler',
      name: 'hasler-portfolio',
      component: Hasler
    }
  ]
})

export default router
