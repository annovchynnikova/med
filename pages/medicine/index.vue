<template>
  <div class="container">
    <div class="med-items">
      <div v-for="(item, index) of medicines" :key="index" class="med-item">
        <nuxt-link class="no-link" :to="'medicine/' + item.id">
          <p class="med-item-title">{{ item.title }}</p>
          <p class="med-item-info">{{ item.info }}</p>
          <p class="med-item-symptoms">
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
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// todo витягнути всі препарати з бд
export default {
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

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
}
.med-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.med-item {
  margin: 10px;
  border: 1px solid rgb(92, 138, 98);
  padding: 20px;
  color: rgb(101, 148, 108);
  p {
    margin-top: 10px;
  }
  &-title {
    text-align: center;
    color: rgb(49, 71, 52);
    font-weight: 600;
  }
  &-info {
    padding-bottom: 10px;
    border-bottom: 5px dotted rgba(155, 154, 154, 0.479);
  }
  &-symptoms,
  &-categories,
  &-maker {
    font-size: 14px;
    // margin-bottom: 10px;
  }
  span {
    color: rgba(99, 97, 97, 0.616);
  }
}
</style>
