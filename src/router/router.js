import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/tokens',
        component: () => import('../modules/pages/ObtenerToken.vue')
    },
    {
        path: '/estudiantes',
        component: () => import('../modules/pages/IngresarEstudiantes.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router