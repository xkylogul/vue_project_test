import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//if(process.env.NODE_ENV !== 'production') require('./mock')


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
