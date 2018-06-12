import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2Touch from 'vue2-touch'

Vue.use(Vue2Touch)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
