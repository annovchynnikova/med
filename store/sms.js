export const actions = {
  async send(context, phone) {
    return await this.$axios.post('/auth/sms', { phone });
  },
  async resend(context, phone) {
    return await this.$axios.post('/auth/sms/resend', { phone });
  },
  async login(context, data) {
    return await this.$axios.post('/auth/login', data);
  },
};
