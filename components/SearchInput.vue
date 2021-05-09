<template>
  <div class="search-container">
    <input class="search" type="text" />
    <img
      class="search-img"
      src="~/assets/img/searchlogo.svg"
      alt=""
      @click="search"
    />
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      console.log('Пошук')
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid rgb(95, 158, 160);
  width: 100%;
  border-radius: 30px;
  outline: none;
  padding: 10px;
  &-container {
    position: relative;
  }
  &-img {
    position: absolute;
    right: 14px;
    top: 6px;
    width: 25px;
  }
}
</style>
