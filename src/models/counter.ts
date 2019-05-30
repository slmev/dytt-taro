export default {
  namespace: 'counter',

  state: {
    num: 0,
  },

  effects: {
    *asyncAdd(_, { call, put }) {
      async function delay(params) {
        return new Promise(resolve => setTimeout(resolve, params));
      }
      yield call (delay, 2000);
      yield put({
        type: 'add',
      });
    }
  },

  reducers: {
    add(state) {
      return {
        ...state,
        num: state.num + 1
      };
    },
    minus(state) {
      return {
        ...state,
        num: state.num - 1
      };
    },
  },
};
