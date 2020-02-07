import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import Public from '@/views/Public'
import Gallery from '@/components/public/Gallery'

import Admin from '@/views/Admin'
import Dashboard from '@/components/admin/Dashboard'

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "public",
      component: Public,
      children: [
        {
          path: "",
          name: "gallery",
          component: Gallery,
        },
        {
          path: "categoria/:category",
          name: "gallery",
          component: Gallery,
        },
      ]
    },
    {
      path: "/administracion",
      name: "admin",
      component: Admin,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
      ]
    },
  ]
})

export default router;