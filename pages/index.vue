<template>
  <div class="container">
    <div class="main-content">
      <h1 class="main-content__title">Med.Search</h1>
      <img class="main-content__img" src="~/assets/img/main.svg" alt="" />
    </div>
    <div class="health-content"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
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
