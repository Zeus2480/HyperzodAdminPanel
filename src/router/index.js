import Vue from 'vue'
import VueRouter from 'vue-router'
import MicroserviceDashboard from "../views/MicroseriveDashboard.vue";
import ReachabilityAnalyzer from "../views/ReachabilityAnalyzer.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/microservice-dashboard',
  },
  {
    path: '/microservice-dashboard',
    name: 'MicroserviceDashboard',
    component: MicroserviceDashboard,
    meta: {
      title: `Microservices`,
    },
  },
  {
    path: '/reachability-analyzer',
    name: 'ReachabilityAnalyzer',
    component: ReachabilityAnalyzer,
    meta: {
      title: `Reachability Analyzer`,
    },
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
