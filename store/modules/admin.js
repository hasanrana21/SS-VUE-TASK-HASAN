export default {
  namespaced: true,
  state: () => ({
    adminLists: [
      {
        id: 1,
        name: 'Lamar Snider',
        email: 'wofu@mailinator.com',
        phone: '22423423432',
        title: 'Backend Developer',
      },
      {
        id: 2,
        name: 'Octavia Whitney',
        email: 'dybuz@mailinator.com',
        phone: '24234234233',
        title: 'CEO',
      },
      {
        id: 3,
        name: 'Jana Rosales',
        email: 'hagehunuf@mailinator.com',
        phone: '38234234234',
        title: 'Project Manager',
      },
    ],
    admin: {},
  }),
  actions: {},
  mutations: {
    setAdmins: (state, data) => {
      data.id = state.adminLists.length + 1
      state.adminLists.push(data)
    },
    setAdmin: (state, data) => {
      state.admin = data
    },
    clearAdmin: (state) => {
      state.admin = {}
    },
    updateAdmin: (state, data) => {
      state.adminLists = state.adminLists.map((item) => {
        if (item?.id === data?.id) {
          return { ...item, ...data }
        }
        return item
      })
    },
    deleteAdmin: (state, data) => {
      state.adminLists = state.adminLists.filter(
        (item) => item?.id !== data?.id
      )
    },
  },
}
