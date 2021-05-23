export const actions = {
  async addNew(context, params) {
    return await this.$axios.$post('doctor', params)
  },
  async getAll(context) {
    return await this.$axios.$get('doctor')
  },
  async getOne(context, email) {
    return await this.$axios.$get(`doctor/${email}`)
  },
  async deleteOne(context, id) {
    return await this.$axios.$delete(`doctor/${id}`)
  },
  async addLiked(context, params) {
    return await this.$axios.$post('doctor/addLiked', params)
  },
}
