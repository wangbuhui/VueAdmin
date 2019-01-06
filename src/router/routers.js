//import Home from '@/views/Home.vue'
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '用户登录',
      hideInMenu: true
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.SS
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home")
  }
]


