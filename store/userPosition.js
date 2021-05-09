export const state = () => ({
  isAccess: false,
  userCoordination: null,
});

export const mutations = {
  saveUserCoordinates(state, position) {
    if (position) {
      state.isAccess = true;
      state.userCoordination = {
        lat: position.lat,
        lng: position.lng,
      };
    }
  },
};
