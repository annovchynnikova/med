export const actions = {
  async addNew(context, params) {
    return await this.$axios.$post('comment', params)
  },
  async getAll(context) {
    return await this.$axios.$get('comment')
  },
  // todo придумать як достати всі коментарі окремого товару
  async getById(context, id) {
    return await this.$axios.$get(`comment/${id}`)
  },
  async deleteOne(context, id) {
    return await this.$axios.$delete(`comment/${id}`)
  },
}
