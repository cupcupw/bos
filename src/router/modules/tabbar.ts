import { RouteRecordRaw } from 'vue-router'
const tabbar: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/home',
    component: () => import('src/views/main/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/',
        name: '/home',
        component: () => import('src/views/main/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
]
export default tabbar
