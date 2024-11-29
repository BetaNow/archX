import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';

const routes = [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
    { path: '/news', name: 'News', component: News, meta: { title: 'News' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const defaultTitle = 'archX';
    document.title = `${defaultTitle} | ${to.meta.title}`;
    next();
});

export default router;