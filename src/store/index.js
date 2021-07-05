import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputText: {},
  },
  mutations: {
    setTextValue (state, payload) {
      // 变更状态
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
