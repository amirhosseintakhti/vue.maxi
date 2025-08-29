import { createRouter, createWebHistory } from 'vue-router';
import BookDetails from '../views/BookDetails.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/book/:id', component: BookDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
