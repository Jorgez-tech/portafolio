import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import ProjectList from '../components/ProjectList.vue';
import ProjectDetail from '../components/ProjectDetail.vue';
import LogTechnical from '../components/LogTechnical.vue';
import Motivation from '../components/Motivation.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/proyectos', name: 'Proyectos', component: ProjectList },
    { path: '/proyecto/:id', name: 'ProyectoDetalle', component: ProjectDetail, props: true },
    { path: '/log', name: 'LogTecnico', component: LogTechnical },
    { path: '/motivacion', name: 'Motivacion', component: Motivation },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
