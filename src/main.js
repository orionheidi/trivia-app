import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: TriviaApp },
  { path: '/trivia', component: TriviaApp },
 
]
const router = new VueRouter({
  routes 
})


new Vue({
  router,
  mode: 'history',
  render: h => h(App),
}).$mount('#app')
