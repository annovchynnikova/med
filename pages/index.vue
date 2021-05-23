<template>
  <div class="content">
    <div class="main-content">
      <h1 class="main-content__title">Med.Search</h1>
      <img class="main-content__img" src="~/assets/img/main.svg" alt="" />
    </div>
    <div class="popular-med">
      <h2 class="popular-med__title">Популярні медикаменти</h2>
      <Medicine />
    </div>
    <div class="health-content"></div>
  </div>
</template>

<script>
import Medicine from '@/components/Medicine.vue'

export default {
  components: { Medicine },
  auth: false,
}
</script>

<style lang="scss">
// .container {
//   padding: 0 50px;
// }
.main-content {
  background: #b0d3ba;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffff;

  &__img {
    max-width: 450px;
  }
}
</style>
