import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/tabs/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/tabs/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/tabs/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/tabs/Tab3Page.vue')
      },
      {
        path: 'providers_clients',
        component: () => import('@/views/providers_clients/IndexPage.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
