import VueRouter from 'vue-router';

import HomeComponent from './views/Home.vue';
import AboutComponent from './views/About.vue';
import ContactComponent from './views/Contact.vue';

let routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/about',
        component: AboutComponent
    },
    {
        path: '/contact',
        component: ContactComponent
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});