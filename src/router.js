import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario'
import Choise from './components/Choise'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formulario', component: Formulario},
        { path: '/choise', component: Choise}
    ]
})