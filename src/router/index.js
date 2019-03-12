import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      component: resolve => require(['../components/index.vue'], resolve),
      redirect:"/home",
      children:[
        {
          path: '/home',
          component: resolve => require(['../components/page/home.vue'], resolve),
          children:[
            {
              path: '/warningInfo',
              component: resolve => require(['../components/page/warningInfo.vue'], resolve)
            },
          ]
        },
        {
          path: '/message',
          component: resolve => require(['../components/page/message.vue'], resolve)
        },
        {
          path: '/work',
          component: resolve => require(['../components/page/work.vue'], resolve)
        },
        {
          path: '/user',
          component: resolve => require(['../components/page/user.vue'], resolve)
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/Login.vue'], resolve)
    },
  ]
})

