import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './module/user'
import Bus from '@/bus'
import savePlugin from './plugin/saveLocal'

Vue.use(Vuex)
Vue.prototype.$bus = Bus
 
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        user
    },
    plugins:[savePlugin]  //插件用法
})
