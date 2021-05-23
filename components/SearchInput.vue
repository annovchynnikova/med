<template>
  <div class="search-container">
    <input v-model="searchValue" class="search" type="text" @input="search" />
    <img
      class="search-img"
      src="~/assets/img/searchlogo.svg"
      alt=""
      @click="search"
    />
    <div
      v-if="searchValue"
      class="search-result"
      :class="{ 'no-result': !isHasResult }"
    >
      <div v-if="isHasResult" class="search-result__list">
        <div
          v-for="(item, index) in searchResult"
          :key="index"
          class="search-result__item"
        >
          <a :href="`/medicine/${item.id}`" class="medicine-info">
            <div class="medicine-info__title">
              {{ item.title.toUpperCase() }}
            </div>
            <div class="medicine-info__sypmtoms">
              Симптоми: {{ item.symptoms }}
            </div>
            <div class="medicine-info_maker">Виробник: {{ item.maker }}</div>
          </a>
        </div>
      </div>
      <div v-else class="search-result__empty">Нічого не знайдено.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    searchResult() {
      const medicines = this.$store.state.medicine.medicines
      const result = medicines.filter((item) => {
        return (
          item.title.includes(this.searchValue) ||
          item.symptoms.includes(this.searchValue)
        )
      })

      return result
    },
    isHasResult() {
      return this.searchResult.length
    },
  },
  methods: {
    search() {
      if (this.searchValue) console.log('Пошук')
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

  &-result {
    position: absolute;
    top: 45px;
    width: 270px;
    background: #a1d9bc;
    border: 1px solid #000000;
    border-radius: 6px;
    padding: 10px;

    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 20px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      border-top: 1px solid #000000;
      border-left: 1px solid #000000;
      background: #a1d9bc;
    }

    &.no-result {
      background: #f5e0e0;
      border-color: red;
      color: red;

      ::before {
        border-color: red;
        background: #f5e0e0;
      }
    }

    &__item {
      display: flex;

      & + & {
        margin-top: 5px;
        padding-top: 5px;
        border-top: 1px solid gray;
      }
    }

    .img {
      width: 50px;
      height: 50px;
      background: black;
    }
  }
}
.medicine-info {
  &__title {
    color: black;
  }
}
</style>
