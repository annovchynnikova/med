<template>
  <div class="container">
    <h2 class="reg-title">Профіль лікаря</h2>
    <div class="doc">
      <div class="doc-info">
        <p class="doc-info-title">Ім'я:</p>
        <p class="doc-first-name">{{ doctor.first_name }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Прізвище:</p>
        <p class="doc-last-name">{{ doctor.last_name }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Електронна пошта:</p>
        <p class="doc-email">{{ doctor.email }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Телефон:</p>
        <p class="doc-phone">{{ doctor.phone }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Посада:</p>
        <p class="doc-work">Лікар</p>
      </div>
    </div>

    <div class="patient">
      <h2 class="reg-title">Процес лікування</h2>

      Тут будуть пацієнти + форма додавання пацієнта
    </div>
    <div class="div-logout">
      <button class="button-logout" @click="$auth.logout()">Вийти</button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, store, redirect, app: { localePath, $auth } }) {
    try {
      const data = await store.dispatch('doctor/getOne', $auth.user.email)
      const doctor = data[0]

      return { doctor }
    } catch (error) {
      redirect(localePath('/'))
    }
  },
  data() {
    return {
      user: this.$auth.user,
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.button-logout {
  background: #406f70;
  border-radius: 3px;
  width: 100px;
  height: 20px;
  outline: none;
  border: none;
  font-weight: 800;
  font-size: 15px;
  line-height: 1.2em;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.div-logout {
  display: flex;
  margin: 10px 0 15px;
  justify-content: center;
}

.doc-info {
  margin: 20px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(95, 158, 160, 0.479);

  &:first-child {
    margin-top: 10px;
  }

  &-title {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    color: rgba(95, 160, 144, 0.719);
  }
}

.doc {
  padding: 10px;
  // background-color: rgba(95, 158, 160, 0.479);
  margin-top: 20px;
  margin: auto;
  max-width: 300px;
}

.pacient {
}
</style>
