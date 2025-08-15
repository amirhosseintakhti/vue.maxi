import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BookDetails from '../views/BookDetails.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/book/:id', component: BookDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
