import Vue from 'vue'
import Vuex from 'vuex'
import loginModules  from './Modules/loginModules';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginModules
  }
})
