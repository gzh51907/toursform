import Vue from 'vue';

//引入Vuex
import Vuex from 'vuex';
//引入模块
import common from './common';

Vue.use(Vuex);

//创建store实例
const store = new Vuex.Store({

  // 只用模块化store后会影响state数据的获取
  // store.state.xxx -> store.state.cart.xxx
  modules:{
    common
  }
});

export default store;