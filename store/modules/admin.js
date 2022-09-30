export default {
  namespaced: true,
  state: () => ({
    adminLists: [],
    admin: {},
  }),
  actions: {},
  mutations: {
    setAdmins: (state, data) => {
      data.id = state.adminLists.length + 1
      state.adminLists.unshift(data)
    },
    setAdmin: (state, data) => {
      state.admin = data
    },
    clearAdmin: (state) => {
      state.admin = {}
    },
    updateAdmin: (state, data) => {
        state.adminLists = state.adminLists.map((item) => {
            if(item?.id === data?.id){
                return {...item, ...data}
            }
            return item;
        })
    },
    deleteAdmin:(state, data) => {
      state.adminLists = state.adminLists.filter((item) => item?.id !== data?.id);
    }
  },
}
