import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Enterprise from './pages/Enterprise';
import Login from './pages/Login';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: Enterprise
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
})