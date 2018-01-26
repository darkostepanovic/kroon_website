import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home-page/home'
import Portfolio1 from './../components/portfolios/portfolio_1'

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
      path: '/portfolio-1',
      name: 'portfolio-1',
      component: Portfolio1
    }
  ]
})

export default router
