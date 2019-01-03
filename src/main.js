// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.use(Vuetify, {
  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
  theme: {
    color1: 'E63946',
    color2: 'F1FAEE',
    color3: 'A8DADC',
    color4: '457B9D',
    color5: '1D3557'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
