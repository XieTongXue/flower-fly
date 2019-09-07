import Vue from 'vue'
import Router from 'vue-router'
import ExampleOne from '@/views/ExampleOne'
import ExampleTwo from '@/views/ExampleTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExampleOne',
      component: ExampleOne
    },
    {
      path: '/ExampleTwo',
      name: 'ExampleTwo',
      component: ExampleTwo
    }
  ]
})
