<template>
  <div>
    <div class="reg-container">
      <h2 class="reg-title">New Doctor Registration</h2>
      <!-- //todo validation -->
      <form class="reg-form" @submit.prevent="pressed">
        <p class="reg-form-label">Your name</p>
        <div class="reg-form-name">
          <input
            v-model="first_name"
            required
            type="text"
            placeholder="First name"
            minlength="3"
            maxlength="10"
          />
          <input
            v-model="last_name"
            required
            minlength="3"
            type="text"
            placeholder="Last name"
          />
        </div>
        <p class="reg-form-label">Phone number</p>
        <!-- //phone mask -->
        <input
          v-model="phone"
          minlength="10"
          type="number"
          required
          placeholder="Number"
        />
        <p class="reg-form-text">
          By Providing us your mobile number, you give us permission to contact
          you via text.
        </p>
        <p class="reg-form-label">E-mail Address</p>
        <input
          v-model="email"
          type="email"
          minlength="8"
          required
          placeholder="Enter your e-mail address"
          autocomplete="on"
        />
        <p class="reg-form-label">Choose password</p>
        <input
          v-model="password"
          type="password"
          required
          minlength="6"
          placeholder="Password"
          autocomplete="off"
        />
        <div class="reg-agree reg-form-text">
          <input id="agree" required type="checkbox" name="" />
          <label for="agree">
            I Agree to Terms of Use, Informed Consent and Privacy Policy.</label
          >
        </div>
        <p v-if="error">{{ error }}</p>
        <div class="reg-submit">
          <button type="submit" class="reg-button app-button">REGISTER</button>
        </div>
      </form>
    </div>
    <div v-if="$auth.loggedIn">
      {{ $auth.user.email }}
    </div>
    <div v-else>
      <!-- {{ $auth.user.email }} -->
      <nuxt-link to="/registration">registration</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      email: '',
      password: '',
      phone: '',
      first_name: '',
      last_name: '',
      error: '',
      middleware: 'auth',
    }
  },
  methods: {
    pressed() {
      // todo validation
      this.data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      }
      this.$store
        .dispatch('doctor/addNew', this.data)
        .then((res) => {
          this.$auth.loginWith('local', {
            data: { email: res.data.email, password: res.data.password },
          })
          this.$auth.fetchUser()
          setTimeout(() => {
            this.$router.push('/profile')
          }, 300)
        })
        .catch((error) => {
          this.error = error.response.data.error.message
        })
        .finally(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
.reg {
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
    label {
      color: #2b4a4b;
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
