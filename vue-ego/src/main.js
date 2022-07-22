import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/common.css'
import "./router/permission"

Vue.config.productionTip = false


// 初始化

if(localStorage.getItem("ego")){
  store.commit("loginModules/updateToken",JSON.parse(localStorage.getItem("ego")).token);
  store.commit("loginModules/updateUsername",JSON.parse(localStorage.getItem("ego")).username);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
