<template>
  <div class="header">
    <img
      class="header-logo"
      src="~/assets/img/logo.png"
      alt=""
      @click="goToMain"
    />
    <SearchInput />
    <div class="header-menu">
      <div class="header-menu-items">
        <nuxt-link class="header-menu-news" to="news">Новини</nuxt-link>
        <nuxt-link class="header-menu-med" to="medicine">Препарати</nuxt-link>
      </div>
      <div class="header-menu-login">
        <div class="login-enter">
          <nuxt-link v-if="!login" to="login">Увійти</nuxt-link>
          <nuxt-link v-else to="profile">Профіль</nuxt-link>
        </div>
        <div class="login-reg">
          <nuxt-link v-if="!login" to="registration">Зареєструватись</nuxt-link>
          <p v-else @click="singOut">Вийти</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import firebase from 'firebase/app'
require('firebase/auth')

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      login: false,
      user: '',
    }
  },
  mounted() {
    // todo перевірити чи авторизований користувач і змінити login
    // todo зробити все в asyncData
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user
      if (user) {
        this.login = true
      }
    })
  },
  methods: {
    singOut() {
      firebase
        .auth()
        .signOut()
        .then((result) => {
          console.log(result)
          this.login = false
          this.user = ''
        })
    },
    goToMain() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  color: #406f70;
  font-weight: 600;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-logo {
    max-width: 60px;
    margin: 7px;
    margin-left: 20px;
    cursor: pointer;
  }
  &-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 10px;
      cursor: pointer;

      @media screen and (max-width: 1000px) {
        margin: 2px 10px 2px 0;
      }
    }

    &-news,
    &-med {
      text-decoration: none;
      color: #406f70;
    }
    &-news {
      margin-right: 20px;
    }

    &-login {
      display: flex;
    }

    &-items {
      display: flex;
    }

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: baseline;
    }
  }
}
.login {
  &-enter,
  &-reg {
    a {
      text-decoration: none;
      color: #406f70;
    }
  }
}
</style>
