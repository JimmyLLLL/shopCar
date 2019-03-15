import Vue from 'vue'
import Router from 'vue-router'
import shoppingCar from '@/pages/shoppingCar'
import car from '@/pages/car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingCar',
      component: shoppingCar,
    },{
      path: '/car',
      name: 'car',
      component: car,
    }
  ]
})
