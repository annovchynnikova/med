export const actions = {
  redirect(context, type) {
    return this.$axios
      .$get('auth/social', {
        params: {
          social_type: type,
        },
      })
      .then(({ url }) => {
        window.location.href = url;
      })
      .catch((error) => {
        this.$toast.error(this.$getErrorTextByResponse(error.response));
      });
  },
  async auth(context, payload) {
    return await this.$axios.$post('auth/social', payload);
  },
};
