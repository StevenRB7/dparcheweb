import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstadosAnimoView from '../views/EstadosAnimoView.vue'
import RegistroEventosView from '../views/Eventos/RegistroEventosView.vue'
import RegistroEmpresasView from '../views/Empresas/RegistroEmpresasView.vue'
import IniciarSesionView from '../views/IniciarSesionView.vue'
import DashboardView from '../views/Dashboard/DashboardView.vue'

// import Messages from '../views/Dashboard/Messages.vue'
// import Overview from '../views/Dashboard/Overview.vue'
// import Profile from '../views/Dashboard/Profile.vue'
// import Settings from '../views/Dashboard/Settings.vue'

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
    path: '/IniciarSesion',
    name: 'IniciarSesion',
    component: IniciarSesionView
  },
  {
    path: '',
    component: DashboardView,
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/Dashboard/PublicacionesView.vue')
      },
      {
        path: '/eventos',
        component: () => import('../views/Dashboard/EventosView.vue')
      },
      {
        path: '/animos',
        component: () => import('../views/Dashboard/AnimosView.vue')
      },
      {
        path: '/usuarios',
        component: () => import('../views/Dashboard/UsuariosView.vue')

      },
      {
        path: '/intereses',
        component: () => import('../views/Dashboard/InteresesView.vue')
      },
      {
        path: '/frases',
        component: () => import('../views/Dashboard/FrasesView.vue')
      },
      {
        path: '/vereventos',
        component: () => import('../views/Dashboard/VerEventosView.vue')
      },
      {
        path: '/empresa',
        component: () => import('../views/Dashboard/EmpresasView.vue')
      },
      {
        path: '/crearEmpresa',
        component: () => import('../views/Dashboard/CrearEmpresaView.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
