import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import OpenSource from '../views/OpenSource.vue';
import Forum from '../views/Forum.vue';
import Articles from '../views/Articles.vue';
import WriteUp from '../views/WriteUp.vue';
import Ressources from '../views/Ressources.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/news', name: 'News', component: News },
    { path: '/open-source', name: 'Open source', component: OpenSource },
    { path: '/forum', name: 'Forum', component: Forum },
    { path: '/articles', name: 'Articles', component: Articles },
    { path: '/write-up', name: 'Write-up', component: WriteUp },
    { path: '/ressources', name: 'Ressources', component: Ressources },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const defaultTitle = 'archX';
    document.title = `${defaultTitle} | ${to.name}`;
    next();
});

export default router;