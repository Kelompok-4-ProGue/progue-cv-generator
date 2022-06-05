import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonalDetail from '../views/PersonalDetail.vue'

// Layout Components
import Header from '../components/layouts/Header.vue'
import Footer from '../components/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/personal-detail',
    name: 'PersonalDetail',
    components: {default: PersonalDetail, header: Header, footer:Footer},
  },
  {
    path: '/',
    name: 'Home',
    components: {default: Home, header: Header, footer:Footer},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
