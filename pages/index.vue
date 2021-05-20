<template>
  <div class="container">
    <div class="main-content">
      <h1 class="main-content__title">Med.Search</h1>
      <img class="main-content__img" src="~/assets/img/main.svg" alt="" />
    </div>
    <div class="popular-med">
      <h2 class="popular-med__title">Популярні медикаменти</h2>
      <div class="popular-med__items">
        <div
          v-for="(item, index) of medicines"
          :key="index"
          class="popular-med-item"
        >
          <nuxt-link class="no-link" :to="'medicine/' + item.id">
            <p class="popular-med-item_title">{{ item.title }}</p>
            <p class="med-item-info">{{ item.info }}</p>
            <p class="popular-med-item_text">
              Симптоми:<br />
              <span>{{ item.symptoms }}</span>
            </p>
            <p class="med-item-categories">
              Категорії:<br />
              <span>{{ item.categories }}</span>
            </p>
            <p class="med-item-maker">
              Виробник:<br />
              <span>{{ item.maker }}</span>
            </p>
            <p class="popular-med-item_link">Дізнатись більше</p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="health-content"></div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      medicines: [
        {
          id: '1',
          info: 'req.body.info',
          title: 'req.body.title',
          symptoms: 'req.body.symptoms',
          categories: 'req.body.categories',
          maker: 'req.body.maker',
        },
        {
          id: '2',
          info: 'req.body.info',
          title: 'req.body.title',
          symptoms: 'req.body.symptoms',
          categories: 'req.body.categories',
          maker: 'req.body.maker',
        },
        {
          id: '3',
          info: 'req.body.info',
          title: 'req.body.title',
          symptoms: 'req.body.symptoms',
          categories: 'req.body.categories',
          maker: 'req.body.maker',
        },
        {
          id: '4',
          info: 'req.body.info',
          title: 'req.body.title',
          symptoms: 'req.body.symptoms',
          categories: 'req.body.categories',
          maker: 'req.body.maker',
        },
        {
          id: '5',
          info: 'req.body.info',
          title: 'req.body.title',
          symptoms: 'req.body.symptoms',
          categories: 'req.body.categories',
          maker: 'req.body.maker',
        },
      ],
    }
  },
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
.popular-med {
  margin: 50px;
  color: #485c57;
  &__title {
    text-align: center;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-item {
    margin: 20px;
    background: rgba(160, 221, 185, 0.28);
    padding: 20px;
    p {
      margin-bottom: 15px;
    }
    &_title {
      font-size: 20px;
      line-height: 35px;
      text-transform: uppercase;
      color: #406f70;
    }
  }
}
</style>
