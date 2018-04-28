import Vue from 'vue'
import Router from 'vue-router'
import Hi from '../components/hi.vue'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hi',
      component: Hi
    }
  ]
})
