export const actions = {
  async find(context, data) {
    return await this.$axios.$get('box/find', {
      params: data,
    });
  },
  async getList(context, params) {
    return await this.$axios.$get('list', { params });
  },
  async getInfo(context, id) {
    return await this.$axios.$get(`box/${id}`);
  },
  async startRent(context, id) {
    return await this.$axios.$post(`rent/${id}`);
  },
  async buyPower(context) {
    return await this.$axios.$post(`rent/buy`);
  },
};
