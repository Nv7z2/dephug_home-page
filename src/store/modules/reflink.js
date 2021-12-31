export default {
  state: {
    reflink: '',
  },
  mutations: {
    setReflink(state, reflinkerName) {
      state.reflink = reflinkerName;
    },
  },
  actions: {
    getReflinkerName({ commit }) {
      const urlParams = new URLSearchParams(window.location.search);
      const hasRefParam = urlParams.has('ref');
      const reflinker = hasRefParam ? urlParams.get('ref') : null;

      console.log(reflinker);

      if (hasRefParam) commit('setReflink', reflinker);
    },
  },
};
