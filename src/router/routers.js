import Main from '@/components/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/views/single-page/home')
      }
    ]
  },
  {
    path:'/user_center',
    name:'user_center',
    meta:{
      icon : 'md-contacts',
      title: '用户管理'
    },
    component : Main,
    children : [
      {
        path : '/test',
        name: 'test',
        meta: {
          icon:'ios-bug',
          title:'测试页面'
        },
        component: () => import('@/views/single-page/home')
      },
      {
        path : '/user_info',
        name: 'user_info',
        meta: {
          icon:'md-contact',
          title:'用户中心'
        },
        component: () => import('@/views/usercenter/userinfo.vue')
      } 
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/404.vue')
  }
]


