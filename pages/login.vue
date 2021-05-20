<template>
  <div>
    <div class="login-container">
      <h2 class="login-title">Doctor Enter</h2>
      <!-- //todo validation + css -->
      <form @submit.prevent="userLogin">
        <div class="login-form">
          <p class="login-form-label">Phone number</p>
          <!-- //phone mask -->
          <input v-model="login.phone" type="number" placeholder="Number" />
          <p class="login-form-label">E-mail Address</p>
          <input
            v-model="login.email"
            type="e-mail"
            placeholder="Enter your e-mail address"
            autocomplete="off"
          />
          <p class="login-form-label">Password</p>
          <input
            v-model="login.password"
            type="password"
            placeholder="password"
            autocomplete="off"
          />
          <div class="login-submit">
            <button type="submit" class="login-button">ENTER</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
        phone: '',
      },
    }
  },
  methods: {
    pressed(logininfo) {
      this.data = {
        email: this.email,
        password: this.password,
      }
      console.log(logininfo)
      // firebase
      //   .auth()
      //   .singInWithEmailAndPassword(this.email, this.password)
      //   .then((user) => {
      //     console.log(user)
      //     this.$router.push('/profile')
      //   })
      //   .catch((error) => {
      //     this.error = error
      //   })
      alert(logininfo)
    },
    async userLogin() {
      console.log(this.login.email)
      this.$store
        .dispatch('doctor/getOne', this.login.email)
        .then((res) => {
          // this.email = ''
          // this.password = ''
          // this.phone = ''
          // this.error = ''
          console.log(res)
        })
        .catch((error) => {
          this.error = error.response.data.error.message
        })
        .finally(() => {})

      await this.$auth.loginWith('local', {
        data: {
          email: this.login.email,
          password: this.login.password,
        },
      })
      this.$nextTick(() => {
        console.log(this.$auth.user)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  &-container {
    border: 2px solid #5f9ea0;
    margin: 30px 60px 60px;
    max-width: 1058px;
    input {
      border: none;
      border-bottom: 2px solid rgba(88, 147, 127, 0.5);
      max-width: 266px;
      margin-right: 10px;
      outline: none;
    }
  }
  &-title {
    font-weight: normal;
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-shadow: none;
    text-align: center;
    background-color: #ffff;
    width: 61%;
    margin: auto;
    margin-top: -25px;
    color: #2b4a4b;
  }
  &-form {
    max-width: 592px;
    margin: auto;
    display: flex;
    flex-direction: column;
    color: rgb(95, 158, 160);
    padding: 15px;
    &-label {
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      margin-top: 20px;
      margin-bottom: 5px;
    }
    &-text {
      color: #2b4a4b;
      margin-top: 10px;
      font-size: 12px;
    }
  }
  &-button {
    background: #406f70;
    border-radius: 3px;
    width: 260px;
    height: 50px;
    justify-self: center;
    outline: none;
    border: none;
    font-weight: 800;
    font-size: 22px;
    line-height: 1.2em;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
  &-submit {
    margin: auto;
    margin-top: 30px;
    margin-bottom: -25px;
  }
  &-agree {
    input {
      margin-right: 0;
    }
  }
}
</style>
