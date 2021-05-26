export default {
  computed: {
    medicines() {
      return [...this.$store.state.medicine.medicines]
    },
    isNotGuest() {
      return this.$auth.user
    },
    likedMeds() {
      return [...this.$store.state.doctor.liked]
    },
  },
  mounted() {
    if (!this.medicines.length) {
      this.$store.dispatch('medicine/initAllMedicines')

      if (this.isNotGuest) {
        this.$store.dispatch('doctor/getLiked', this.isNotGuest.id)
      }
    }
  },
}
