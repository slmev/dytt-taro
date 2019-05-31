export default {
  namespace: 'global',

  state: {
    scene: 1001,
  },

  effects: {

  },

  reducers: {
    changeData(state, { payload }) {
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      }
    }
  },
};
