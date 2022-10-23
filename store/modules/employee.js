export default {
  namespaced: true,
  state: () => ({
    employeeLists: [
      {
        id: 1,
        name: 'Logan Barr',
        email: 'nyga@mailinator.com',
        phone: '62345674233',
        title: 'Frontend Developer',
        imageUrl: '',
      },
      {
        id: 2,
        name: 'Mary Crane',
        email: 'divip@mailinator.com',
        phone: '17222222222',
        title: 'Team Lead',
        imageUrl: '',
      },
    ],
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
      state.employeeLists = data
    },
    clearEmployee: (state) => {
      state.employee = {}
    },
    deleteEmployee: (state, data) => {
      state.employeeLists = state.employeeLists.filter(
        (item) => item?.id !== data?.id
      )
    },
  },
}
