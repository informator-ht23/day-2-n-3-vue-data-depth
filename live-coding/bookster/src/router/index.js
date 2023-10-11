import { createRouter, createWebHistory } from 'vue-router';
import Books from './../components/library/Books.vue';
import Staff from './../components/employee/Staff.vue';
import StaffInfo from './../components/employee/StaffInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/books/:bookId?",
      component: Books
    },
    {
      path: "/staff",
      component: Staff,
      children: [
        {
          path: "employee/:name",
          name: "employeeInfo",
          component: StaffInfo,
          props: true
        }
      ]
    }
  ]
})

export default router
