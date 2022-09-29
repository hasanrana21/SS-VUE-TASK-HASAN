import Vuex from 'vuex'

import Employee from './modules/employee'
const modules = {
  Employee,
}
const store = new Vuex.Store({
  namespaced: true,
  modules,
})

export { store, modules }
