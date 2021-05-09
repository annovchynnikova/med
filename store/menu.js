export const state = () => ({
  isOpened: false,
  mapActiveTab: 1,
});

export const mutations = {
  toggleMenu(state) {
    state.isOpened = !state.isOpened;
  },
  changeTab(state, tab) {
    state.mapActiveTab = tab;
  },
};
