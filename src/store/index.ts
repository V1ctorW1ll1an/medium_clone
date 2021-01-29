import Vue from 'vue'
import Vuex from 'vuex'
import { home } from '@/modules/home_page/store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { home }
})
