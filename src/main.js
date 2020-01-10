import Vue from 'vue'
import App from './App.vue'

import router from '@/router/mainRoutes.js'
import store from '@/store/store.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './app.styl'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
