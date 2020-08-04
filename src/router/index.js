import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import CategInfo from '../categs/CategInfo.vue';

Vue.use(Router);

export default new Router({
    routes:[{
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/categs/:title',
        name: 'Categs',
        component: CategInfo,
    }],
});
