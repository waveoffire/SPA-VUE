import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  

    {
      path: '/formularz',
      name: 'formularz',
      props: { header: "New person" },
      component: () => import('../views/OsobyFormularz.vue')
    },
    {
      path: '/lista',
      name: 'lista',
      props: { header: "List of persons" },
      component: () => import('../views/OsobyLista.vue')
    }
  ]
})

export default router
