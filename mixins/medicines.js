export default {
  computed: {
    medicines() {
      return [...this.$store.state.medicine.medicines]
    },
  },
  mounted() {
    if (!this.medicines.length) {
      this.$store.dispatch('medicine/initAllMedicines')
    }
  },
}
