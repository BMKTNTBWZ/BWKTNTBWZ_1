import Vue from 'vue'
import Vuex from 'vuex'
import loginModules  from './Modules/loginModules';
import pagerModules from './Modules/pagerModules';
import pubModule from './Modules/pubModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginModules,
    pagerModules,
    pubModule
  }
})
