export const state = () => ({
  error: {},
});

export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
};
