import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { HomeRouter } from '@/modules/home_page/router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [HomeRouter]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
