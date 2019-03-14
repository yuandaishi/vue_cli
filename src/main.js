import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import rem from './assets/js/rem.js'
import scss from './assets/scss/wxui1.0.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    //   this.$router.push({name:'messagexxxx'})
  },
})
