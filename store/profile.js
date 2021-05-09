export const state = () => ({
  coordinates: {},
});

export const mutations = {
  saveCoordinates(state, payload) {
    state.coordinates = payload;
  },
};

export const actions = {
  async getCoordinates(context) {
    if (context.state.coordinates.latitude) return context.state.coordinates;
    else {
      const response = await context.dispatch('loadCoordinates');
      return response;
    }
  },
  async loadCoordinates(context) {
    const response = await this.$axios.get('profile/coordinates');
    context.commit('saveCoordinates', response.data);
    return response.data;
  },
};
