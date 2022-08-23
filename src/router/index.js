import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstadosAnimoView from '../views/EstadosAnimoView.vue'
import RegistroEventosView from '../views/Eventos/RegistroEventosView.vue'
import RegistroEmpresasView from '../views/Empresas/RegistroEmpresasView.vue'
import IniciarSesionView from '../views/IniciarSesionView.vue'
import dashboard from '../views/Dashboard/Dashboard.vue'

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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Dashboard/Overview.vue')
      },
      {
        path: 'messages',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Dashboard/Messages.vue')
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Dashboard/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Dashboard/Settings.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
