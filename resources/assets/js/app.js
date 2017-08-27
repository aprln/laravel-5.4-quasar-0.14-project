/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

window.Vue = require('vue');

require('quasar-framework/dist/quasar.mat.css');
require('quasar-extras/roboto-font');

import Quasar from 'quasar-framework';
import router from './router';

Vue.use(Quasar);

Vue.component('app', require('./components/App.vue'));

const app = new Vue(
    {
        el: '#app',
        router
    }
);

