<template>
  <div>
    <div class="login-container">
      <h2 class="login-title">Вхід лікаря</h2>
      <!-- //todo validation + css -->

      <form @submit.prevent="userLogin">
        <p v-if="error" class="error">Невірні дані</p>
        <div class="login-form">
          <p class="login-form-label">Номер телефону</p>
          <!-- //phone mask -->
          <input
            v-model="login.phone"
            type="number"
            required
            minlength="10"
            placeholder="Номер телефону"
            @input="error = false"
          />
          <p class="login-form-label">Електронна пошта</p>
          <input
            v-model="login.email"
            type="e-mail"
            required
            minlength="8"
            placeholder="Електронна пошта"
            autocomplete="off"
            @input="error = false"
          />
          <p class="login-form-label">Пароль</p>
          <input
            v-model="login.password"
            type="password"
            required
            minlength="6"
            placeholder="Пароль"
            autocomplete="off"
            @input="error = false"
          />
          <div class="login-submit">
            <button type="submit" class="login-button">Увійти</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
        phone: '',
      },
      error: '',
    }
  },
  methods: {
    userLogin() {
      this.data = {
        email: this.login.email,
        password: this.login.password,
      }
      this.$auth
        .loginWith('local', {
          data: this.data,
        })
        .catch((reject) => {
          this.error = true
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
.error {
  text-align: right;
  color: rgb(248, 113, 113);
  margin-right: 10px;
  position: absolute;
  top: 15px;
  right: 15px;
}
form {
  position: relative;
}
</style>
