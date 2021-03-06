import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputText: {},
  },
  mutations: {
    setTextValue (state, payload) {
      // εζ΄ηΆζ
      if (payload) {
        state.inputText = payload
      }
    }
  },
  actions: {
    setTextValue (context, payload) {
      setTimeout(() => {
        context.commit('setTextValue', payload)
      })
    }
  }
})
