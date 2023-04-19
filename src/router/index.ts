import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '', redirect: { name: 'home' } },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue'),
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
