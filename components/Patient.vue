<template>
  <div class="container">
    <div v-if="patients" class="patient-lict">
      <div
        v-for="(item, index) of patients"
        :key="index"
        class="patients-item"
      ></div>
    </div>
    <div class="patient-add"></div>
  </div>
</template>

<script>
export default {
  props: {
    doctorEmail: {
      type: String,
      required: true,
    },
  },
  async asyncData({ params, store, redirect, app: { localePath, $auth } }) {
    try {
      const patients = await store.dispatch(
        'patient/getAllBy',
        $auth.user.email
      )
      return { patients }
    } catch (error) {
      redirect(localePath('/'))
    }
  },
}
</script>

<style lang="scss" scoped></style>
