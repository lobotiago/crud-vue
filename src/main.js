import Vue from 'vue'
import App from './App.vue'
import './quasar'
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(axios, VueAxios)
const base = axios.create({
  // baseURL: 'http://localhost:9009/api/v1'   // API Rodando localmente
  baseURL: 'https://teste-mageda-api.herokuapp.com/api/v1'   // API Rodando no servidor
})
Vue.prototype.axiosInstance = base

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
