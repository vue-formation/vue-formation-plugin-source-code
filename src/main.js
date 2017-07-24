// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFormation from 'vue-formation'
import SourceCode from './vue-formation-plugin-source-code'
import 'vue-formation/vue-formation.css'

Vue.config.productionTip = false
VueFormation.use(SourceCode)
Vue.use(VueFormation)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
