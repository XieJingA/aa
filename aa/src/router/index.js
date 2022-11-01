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
    }
  ]
})

export default router