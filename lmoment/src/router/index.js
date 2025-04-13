import { createRouter, createWebHistory } from 'vue-router'
import LmomentHelloPage from '../components/LmomentHelloPage.vue'
// import LmomentMainPage from '../components/LmomentMainPage.vue'

const routes = [
  { path: '/', name: 'Hello', component: LmomentHelloPage },
//   { path: '/main', name: 'Main', component: LmomentMainPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
