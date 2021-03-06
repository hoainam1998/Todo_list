import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home'
import Form from './views/Form'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        }
    ]
})