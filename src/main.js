// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import '@/styles/reset.css'


Vue.use(Vuex)
Vue.config.productionTip = false

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
if (htmlWidth > 750) {
	htmlWidth = 750;
}
htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
