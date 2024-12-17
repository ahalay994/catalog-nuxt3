import type { RouterConfig } from '@nuxt/schema'

export default {
    // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('@p/Home.vue')
        },
        {
            name: 'catalog',
            path: '/catalog',
            component: () => import('@p/Catalog.vue')
        },
    ],
} satisfies RouterConfig
