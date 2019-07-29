import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/pages/Homepage.vue';
import Rank from '@/pages/Rank.vue';
import Friends from '@/pages/Friends.vue';
import Setting from '@/pages/Setting.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Homepage
        },
        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/friends',
            component: Friends
        },
        {
            path: '/mine',
            component: Setting
        }
    ]
});