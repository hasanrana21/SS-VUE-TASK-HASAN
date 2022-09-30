import Vuex from 'vuex'

import Employee from './modules/employee'
import Admin from './modules/admin'
const modules = {
  Employee,
  Admin
}
const store = new Vuex.Store({
  namespaced: true,
  modules,
})

export { store, modules }
