import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import AboutMe from '@/pages/AboutMe.vue'
import Contact from '@/pages/Contact.vue'
import Thanks from '@/pages/Thanks.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/aboutme', name: 'About Me', component: AboutMe},
  { path: '/contact', name: 'Contact', component: Contact},
  { path: '/thanks', name: 'Thanks', component: Thanks}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
