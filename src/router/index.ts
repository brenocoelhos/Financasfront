/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Cadastro from '@/components/Cadastro.vue';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import NotFound from '@/components/NotFound.vue'; 

const routes = [
  {
    path: '/',
    redirect: '/login', 
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
