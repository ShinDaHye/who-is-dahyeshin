import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.min.css'
import './assets/css/styles.css'
import './assets/js/scripts.js'
import './assets/libs/font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
