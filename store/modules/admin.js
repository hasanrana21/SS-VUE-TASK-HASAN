export default {
  namespaced: true,
  state: () => ({
    adminLists: [],
  }),
  actions: {},
  mutations: {
    setAdmins: (state, data) => {
      data.id = state.adminLists.length + 1
      state.adminLists.push(data)
    },
  },
}
