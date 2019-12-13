import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/saludarAmigos',
      name: 'saludarAmigos',
      component: () => import(/* webpackChunkName: "saludarAmigos" */ '@/views/Saludar.vue')
    },
    {
      path: '/agregarAmigos',
      name: 'agregarAmigos',
      component: () => import(/* webpackChunkName: "agregarAmigos" */ '@/views/Agregar.vue')
    },
    {
      path: '/eliminarAmigos',
      name: 'eliminarAmigos',
      component: () => import(/* webpackChunkName: "eliminarAmigos" */ '@/views/Eliminar.vue')
    }
  ]
})