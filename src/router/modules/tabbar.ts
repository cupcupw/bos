import { RouteRecordRaw } from 'vue-router'
const tabbar: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: '/home',
    component: () => import('src/views/main/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('src/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/todoMain',
        name: 'TodoMain',
        component: () => import('src/views/todoMain/index.vue'),
        meta: {
          title: '待办事项',
        },
      },
      {
        path: '/dataReport',
        name: 'DataReport',
        component: () => import('src/views/dataReport/index.vue'),
        meta: {
          title: '数据报表',
        },
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('src/views/mine/index.vue'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
]
export default tabbar
