import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    step: 1,
    userData: {
      personalDetail : {},
      personalDetail : {},
    }
  },
  mutations: {
    nextStep: state => state.step++,
    resetStep: state => state.step = 1,
  },
  actions: {
  },
  modules: {
  }
})
