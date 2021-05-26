export const state = {
  liked: [],
}

export const mutations = {
  setLiked(state, liked) {
    state.liked = liked
  },
}

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
  async toggleLiked({ commit }, params) {
    await this.$axios.$post('doctor/liked', params).then((liked) => {
      commit('setLiked', liked)
    })
  },
  async getLiked({ commit }, email) {
    await this.$axios.$get(`doctor/liked/${email}`).then((liked) => {
      commit('setLiked', liked)
    })
  },
}
