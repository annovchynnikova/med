<template>
  <div>
    <h2>Registration</h2>
    <!-- //todo validation + css -->
    <form>
      <input v-model="email" type="text" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <button @click="pressed">Submit</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          this.$router.push('/profile')
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
