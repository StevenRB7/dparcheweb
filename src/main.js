
// eslint-disable-next-line
/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/js/dist/carousel'
import 'bootstrap-vue/dist/bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import VWave from 'v-wave'
import Ripple from 'vue-material-design-ripple'
import 'vue-material-design-ripple/dist/vue-material-design-ripple.css'


// CommonJS
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VWave)
Vue.directive('ripple', Ripple)
Vue.use(VueAxios, axios)

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

