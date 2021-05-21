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
        <nuxt-link class="header-menu-item" to="news">Новини</nuxt-link>
        <nuxt-link class="header-menu-item" to="medicine">Препарати</nuxt-link>
        <nuxt-link v-if="$auth.user" class="header-menu-item" to="profile"
          >Профіль</nuxt-link
        >
        <div v-else>
          <nuxt-link class="header-menu-item" to="login">Увійти</nuxt-link>
          <nuxt-link class="header-menu-item" to="registration"
            >Зареєструватись</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      login: this.$auth.user,
      user: '',
    }
  },
  mounted() {
    // todo перевірити чи авторизований користувач і змінити login
    // todo зробити все в asyncData
    this.$auth.fetchUser()
  },
  methods: {
    goToMain() {
      this.$router.push('/')
    },
    singOut() {
      this.$auth.logout()
      this.$auth.fetchUser()
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
    &-news {
      margin-right: 20px;
    }

    &-login,
    &-items {
      display: flex;
    }

    &-item {
      text-decoration: none;
      color: #406f70;
      margin-right: 25px;
      &:hover {
        transform: scale(1.1);
        color: cadetblue;
      }
    }
  }
}
</style>
