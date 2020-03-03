// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ws from './api/socket'
import store from './store/main'
import 'video.js/dist/video-js.css'
// import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.prototype.global = Ws
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
