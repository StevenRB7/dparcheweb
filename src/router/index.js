import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstadosAnimoView from '../views/EstadosAnimoView.vue'
import RegistroEventosView from '../views/Eventos/RegistroEventosView.vue'
import RegistroEmpresasView from '../views/Empresas/RegistroEmpresasView.vue'
import IniciarSesionView from '../views/IniciarSesionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registroeventos',
    name: 'registroeventos',
    component: RegistroEventosView
  },
  {
    path: '/estadosanimo',
    name: 'estadosanimo',
    component: EstadosAnimoView
  },

  {
    path: '/registroempresas',
    name: 'registroEmpresas',
    component: RegistroEmpresasView
  },
  {
    path: '/Inicios',
    name: 'Inicios',
    component: IniciarSesionView
  }

]

const router = new VueRouter({
  routes
})

export default router
