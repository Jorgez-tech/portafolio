import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    // Agrega aquí rutas para proyectos, log técnico, motivación, etc.
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
