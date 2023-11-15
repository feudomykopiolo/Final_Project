import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import login from '../views/form/login.vue'
import registration from '../views/form/registration.vue'
import index from '../components/index.vue'
import about from '../views/info/about.vue'
import contact from '../views/info/contact.vue'
import category from '../views/info/category.vue'
import jobDetails from '../views/info/jobDetails.vue'
import testimonial from '../views/info/testimonial.vue'

// jobCategory section
import automotive from '../views/jobCategory/automotive.vue'
import business from '../views/jobCategory/business.vue'
import drafting from '../views/jobCategory/drafting.vue'
import education from '../views/jobCategory/education.vue'
import fashion from '../views/jobCategory/fashion.vue'
import information from '../views/jobCategory/information.vue'
import justice from '../views/jobCategory/justice.vue'
import psychology from '../views/jobCategory/psychology.vue'

// admin section
import index1 from '../views/admin/dashboard/index1.vue'
import index2 from '../views/admin/dashboard/index2.vue'
import index3 from '../views/admin/dashboard/index3.vue'
import index4 from '../views/admin/dashboard/index4.vue'

// forms
import adminLogin from '../views/admin/forms/adminLogin.vue'
import adminRegister from '../views/admin/forms/adminRegister.vue'
import forgotPassword from '../views/admin/forms/forgotPassword.vue'

// layout
import button from '../views/admin/layout/button.vue'
import fontAwesome from '../views/admin/layout/fontAwesome.vue'
import grid from '../views/admin/layout/grid.vue'
import modal from '../views/admin/layout/modal.vue'
import swch from '../views/admin/layout/swch.vue'
import tab from '../views/admin/layout/tab.vue'

// analytics
import calendar from '../views/admin/analytics/calendar.vue'
import card from '../views/admin/analytics/card.vue'
import chart from '../views/admin/analytics/chart.vue'
import table from '../views/admin/analytics/table.vue'

// functions
import alrt from '../views/admin/functions/alrt.vue'
import badge from '../views/admin/functions/badge.vue'
import progressBar from '../views/admin/functions/progressBar.vue'
import typo from '../views/admin/functions/typo.vue'

const routes = [
  {
    path: '/',
    // name: 'home',
    component: index
  },
  {
    path: '/login',
    // name: 'home',
    component: login
  },
  {
    path: '/registration',
    // name: 'home',
    component: registration
  },

  {
    path: '/about',
    // name: 'home',
    component: about
  },
  {
    path: '/contact',
    // name: 'home',
    component: contact
  },
  {
    path: '/category',
    // name: 'home',
    component: category
  },
  {
    path: '/jobDetails',
    // name: 'home',
    component: jobDetails
  },
  {
    path: '/testimonial',
    component: testimonial
  },

  // jobsection category
  {
    path: '/automotive',
    component: automotive
  },
  {
    path: '/business',
    component: business
  },
  {
    path: '/drafting',
    component: drafting
  },
  {
    path: '/education',
    component: education
  },
  {
    path: '/fashion',
    component: fashion
  },
  {
    path: '/information',
    component: information
  },
  {
    path: '/justice',
    component: justice
  },
  {
    path: '/psychology',
    component: psychology
  },

  // admin section
  {
    path: '/index1',
    component: index1
  },
  {
    path: '/index2',
    component: index2
  },
  {
    path: '/index3',
    component: index3
  },
  {
    path: '/index4',
    component: index4
  },

  // forms
  {
    path: '/adminLogin',
    component: adminLogin
  },
  {
    path: '/adminRegister',
    component: adminRegister
  },
  {
    path: '/forgotPassword',
    component: forgotPassword
  },

  // layout
  {
    path: '/button',
    component: button
  },
  {
    path: '/fontAwesome',
    component: fontAwesome
  },
  {
    path: '/grid',
    component: grid
  },
  {
    path: '/modal',
    component: modal
  },
  {
    path: '/swch',
    component: swch
  },
  {
    path: '/tab',
    component: tab
  },
  // analytics
  {
    path: '/calendar',
    component: calendar
  },
  {
    path: '/card',
    component: card
  },
  {
    path: '/chart',
    component: chart
  },
  {
    path: '/table',
    component: table
  },
  // funtions
  {
    path: '/alrt',
    component: alrt
  },
  {
    path: '/badge',
    component: badge
  },
  {
    path: '/progressBar',
    component: progressBar
  },
  {
    path: '/typo',
    component: typo
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router