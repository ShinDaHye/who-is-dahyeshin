import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // redirect: 'main',
        component: Main,
        // children:
        // [
            
        // ]
    },
    {
        path: '/about',
        redirect: '/',
        component: Main,
    },
    {
        path: '/experience',
        redirect: '/',
        component: Main,
    },
    {
        path: '/skills',
        redirect: '/',
        component: Main,
    },
    {
        path: '/contact',
        redirect: '/',
        component: Main,
    },
    {
        path: '/projects',
        name :'projects',
        redirect:  '/',
        component: () => import(/* webpackChunkName: "about" */ '@/views/projects/ProjectHeader.vue'),
        children:[
          {
            path: 'ims',
            name:'ims',
            component: () => import(/* webpackChunkName: "about" */ '@/views/projects/Ims.vue')
          },
          {
            path: 'groupware',
            name:'groupware',
            component: () => import(/* webpackChunkName: "about" */ '@/views/projects/Groupware.vue')
          },
          {
            path: 'misewatch',
            name:'misewatch',
            component: () => import(/* webpackChunkName: "about" */ '@/views/projects/Misewatch.vue')
          },
          {
            path: 'mobeek',
            name:'mobeek',
            component: () => import(/* webpackChunkName: "about" */ '@/views/projects/Mobeek.vue')
          }
        ]
      },
]

const router = new VueRouter({
    routes
  })

export default router