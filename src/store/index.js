import Vue from 'vue'
import Vuex from 'vuex'
import forexRates from './modules/forexRates'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        forexRates
    },
    // getters
})

export default store
