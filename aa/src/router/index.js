import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/introduce'
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('../views/Introduce.vue')
    },
    {
      path: '/level1',
      name: 'level1',
      component: () => import('../views/Level1.vue')
    },
    {
      path: '/level2',
      name: 'level2',
      component: () => import('../views/Level2.vue')
    },
    {
      path: '/level3',
      name: 'level3',
      component: () => import('../views/Level3.vue')
    },
    {
      path: '/valve1',
      name: 'valve1',
      component: () => import('../views/Valve1.vue')
    },
    {
      path: '/valve2',
      name: 'valve2',
      component: () => import('../views/Valve2.vue')
    },
    {
      path: '/flow',
      name: 'flow',
      component: () => import('../views/Flow.vue')
    },
    {
      path: '/pressure',
      name: 'pressure',
      component: () => import('../views/Pressure.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/Table.vue')
    },
    // 图表类型路由
    {
      path: '/chart/line',
      name: 'chartLine',
      component: () => import('../views/ChartLine.vue')
    },
    {
      path: '/chart/bar',
      name: 'chartBar',
      component: () => import('../views/ChartBar.vue')
    },
    {
      path: '/chart/pie',
      name: 'chartPie',
      component: () => import('../views/ChartPie.vue')
    },
    {
      path: '/chart/scatter',
      name: 'chartScatter',
      component: () => import('../views/ChartScatter.vue')
    },
    {
      path: '/chart/radar',
      name: 'chartRadar',
      component: () => import('../views/ChartRadar.vue')
    },
    {
      path: '/chart/gauge',
      name: 'chartGauge',
      component: () => import('../views/ChartGauge.vue')
    }
  ]
})

export default router