import Vuex from 'vuex';

const modules = {

}

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules,
  });
};

export default store;