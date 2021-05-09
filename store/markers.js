export const state = () => ({
  reportedMapCenter: {},
  mapZoom: 16,
});

export const mutations = {
  setMapCenter(state, { lat, lng }) {
    state.reportedMapCenter.lat = lat;
    state.reportedMapCenter.lng = lng;
  },
  setMapZoom(state, zoom) {
    state.mapZoom = zoom;
  },
};

export const actions = {
  async getMarkers(context, payload) {
    return await this.$axios.$get('/map', { params: { ...payload } });
  },
};
