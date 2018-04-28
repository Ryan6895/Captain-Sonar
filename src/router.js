import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import NotFound from './components/NotFound.vue'

// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/Login', name: 'Login', component: Login },
    { path: '*', component: NotFound }
  ]
})
export default router
