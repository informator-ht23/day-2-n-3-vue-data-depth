import { createRouter, createWebHistory } from 'vue-router';
import Form from '../components/form/Form.vue';
import Details from '../components/details/Details.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/ticket",
      name: "ticket-form",
      component: Form,
    },
    {
      path: "/details",
      name: "ticket-details",
      component: Details,
    }
  ]
});

export default router;