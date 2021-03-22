import { createRouter, createWebHashHistory } from 'vue-router'
import Tasks from "@/views/Tasks";
import Overview from "@/views/Overview";
import TaskDetails from "@/views/TaskDetails";

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/task/:id',
    name: 'TaskDetails',
    component: TaskDetails,
    props: true
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link'
})

export default router
