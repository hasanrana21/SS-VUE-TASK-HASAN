export default {
  namespaced: true,
  state: () => ({
    employeeLists: [],
    employee: {},
  }),
  actions: {},
  mutations: {
    setEmployees: (state, data) => {
      data.id = state.employeeLists.length + 1
      state.employeeLists.unshift(data)
    },
    setEmployee: (state, data) => {
      state.employee = data
    },
    updateEmployee: (state, data) => {
      state.employeeLists = data;
    },
    clearEmployee: (state) => {
      state.employee = {}
    },
  },
}
