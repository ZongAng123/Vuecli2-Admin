import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../components/LoginView.vue'
import ShouYe from '../views/ShouYeView.vue'
import TabbleData from '../views/TabData.vue'
import CardView from '../views/CardData.vue'
import DateView from '../views/DateView.vue'
import TimelineView from '../views/TimelineView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  }, {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [ //子目录
      {
        path: '/shouye',
        name: 'shouye',
        component: ShouYe
      },
      {
        path: '/shujudata',
        name: 'shujudata',
        component:TabbleData
      },
      {
        path: '/cardview',
        name: 'cardview',
        component:CardView
      },
      {
        path: '/dateview',
        name: 'dateview',
        component:DateView
      },
      {
        path: '/timeline',
        name: 'timeline',
        component:TimelineView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
