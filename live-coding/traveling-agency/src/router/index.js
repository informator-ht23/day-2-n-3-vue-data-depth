import { createRouter, createWebHistory } from 'vue-router';
import Form from '../components/form/Form.vue';
import Details from '../components/details/Details.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/ticket",
      component: Form
    },
    {
      path: "/details",
      component: Details
    }
  ]
});

export default router;