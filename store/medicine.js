export const actions = {
  async addNew(context, params) {
    return await this.$axios.$post('medicine', params)
  },
  async getAll(context) {
    return await this.$axios.$get('medicine')
  },
  async getOne(context, id) {
    return await this.$axios.$get(`medicine/${id}`)
  },
  async deleteOne(context, id) {
    return await this.$axios.$delete(`medicine/${id}`)
  },
}
