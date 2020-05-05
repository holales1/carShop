import Vue from 'vue'
import Vuex from 'vuex'
/*import axios from 'axios';*/
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carsForBuy:[
    ],
    carForBuy:''
    
  },
  mutations: {
    carsBuyStatus(state,carsBuy){
      state.carsForBuy=carsBuy;
    },
    carBuyStatus(state,carBuy){
      state.carForBuy=carBuy;
    }
  },
  actions: {
    /*addFromDatabase(state,{commit}){
      axios.get('http://localhost/Progressive%20Web%20Development/DBCarShop/dbCar.php')
      .then(response => {
          carsForBuy.push({
            ...itemCarForBuy   // Javascript Spread operator
          })
          state.carsForBuy=response.data;
          const carsForBuy=response.data;
          commit('fullCarsBuy',carsForBuy)
      })
      .catch(error => {
          console.log(error)
      })
    }*/

    setCarsBuy(context,carsBuy){
      context.commit('carsBuyStatus',carsBuy);
    },
    setCarBuy(context,carBuy){
      context.commit('carBuyStatus',carBuy);
    }
  },
  modules: {
  },
  getters:{
    getCarsBuy: state => state.carsForBuy,
    getCarBuy: state => state.carForBuy
  },
  
    
  
})
