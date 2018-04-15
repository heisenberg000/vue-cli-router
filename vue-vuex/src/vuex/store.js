import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count : 1
}
// 相当于过滤器 每次操作count都会先调用getter
const getters = {
  count: state => state.count+=0
}
// mutations 同步修改状态
const mutations = {
  add(state,num){
    state.count+=num
  },
  reduce(state,num){
    state.count-=num
  }
}
// actions 异步修改状态
const actions = {
  addAction(context){
    context.commit('add',15)
    setTimeout(() => {
      context.commit('reduce',5)
    }, 3000);
    console.log('比reduce先执行')
  },
  reduceAction({commit}){
    commit('reduce',8)
  }
}

// 多个配置文件 import MB from '@/vuex/moduleB'
const moduleA = {
  state,mutations,getters,actions
}

export default new Vuex.Store({
  // state,
  // mutations,
  // getters,
  // actions,
  modules: {
    moduleA : moduleA
    // moduleB : MB
  }
})
