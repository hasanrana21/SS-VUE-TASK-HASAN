export default {
  namespaced: true,
  state: () => ({
    employeeLists: [],
  }),
  actions: {},
  mutations: {
    setEmployee: (state, data) => {
      state.employeeLists.push(data)
    },
  },
}
