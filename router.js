import Vue from 'vue'
import Router from 'vue-router'

import Chart from './charts/view/Index.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) { // 如果有锚点
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/chart'
    },
    {
      name: 'chart',
      path: '/chart',
      component: Chart
    }
  ]
})
