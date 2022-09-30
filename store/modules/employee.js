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
      state.employeeLists.push(data)
    },
    setEmployee: (state, data) => {
      state.employee = data
    },
    updateEmployee: (state, data) => {
      // state.employeeLists = state.employeeLists.map((item) => {
      //   if (item?.id === data?.id) {
      //     return { ...item, ...data }
      //   }
      //   return item
      // })
      state.employeeLists = data;
    },
    clearEmployee: (state) => {
      state.employee = {}
    },
  },
}
