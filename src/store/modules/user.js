// import { getToken, setToken, removeToken } from '@/utils/auth'
// import api from '@/api/user'

// import Cookies from 'js-cookie';

/* eslint-disable */
const axios = require('axios');
let url = ""
let config = {
  method: 'get',
  url: url,
  headers:{}
};
const user = {
  state: {
    rateData: {},
    calculatedRateData: {},
    timestamp: "",
    date: '',
    base: ''
  },

  mutations: {
    setData(state, val){ 
      state.rateData = val.rates;
      state.timestamp = val.timestamp;
      state.date = val.date;
      state.base = val.base;
      Object.keys(val.rates).map(function(key, index) {
        // console.log('a')
        state.calculatedRateData[key] = val.rates[key] + 10.0002 ;
      });

      
      // console.log(state)
    },
  },

  actions: {
    fetchRateData: async function(context){
      let result = []
      await axios
      .get('http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95')
      .then(response => {
        if(response.data.success == true){
          context.commit("setData", response.data)
          result = response.data
        } else {
          throw "unsuccessful connection"
        }
      })
      return result
    }
  },

  getters: {
    getOriginRate(state){ return state.rateData },
    getCalculatedRate(state){ return state.calculatedRateData },
  }
}

export default user
