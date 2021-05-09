<template>
  <div>
    <h2>Login</h2>
    <!-- todo validation + css -->
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
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .singInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          this.$router.push('/profile')
        })
        .catch((error) => {
          this.error = error
        })
      alert('form submited')
    },
  },
}
</script>

<style lang="scss" scoped></style>
