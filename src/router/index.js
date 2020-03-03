import Vue from 'vue'
import Router from 'vue-router'
import Sunbet from '@/components/Sunbet'
// import Baijiale from '@/components/togame/bajiale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: Sunbet
    },
    {
      path: '/:id',
      name: 'sunbet',
      component: Sunbet
    }
  ]
})
