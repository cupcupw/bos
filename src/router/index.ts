import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import tabbar from '@/router/modules/tabbar'
const routes: Array<RouteRecordRaw> = [...tabbar]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
