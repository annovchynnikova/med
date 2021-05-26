export const actions = {
  async addPatient(context, params) {
    return await this.$axios.$post('patient', params)
  },
  // todo придумать як достати всі коментарі окремого товару
  async getById(context, id) {
    return await this.$axios.$get(`patient/${id}`)
  },
  async deleteOne(context, id) {
    return await this.$axios.$delete(`patient/${id}`)
  },
}
