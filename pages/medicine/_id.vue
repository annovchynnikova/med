<template>
  <div class="container">
    <div class="medicine-card">
      <div class="medicine-info">
        <p class="med-item-title">{{ medicineDetails.title }}</p>
        <p class="med-item-info">{{ medicineDetails.info }}</p>
        <div class="med-item-details">
          <p class="med-item-symptoms">
            Симптоми:<br />
            <span>{{ medicineDetails.symptoms }}</span>
          </p>
          <p class="med-item-categories">
            Категорії:<br />
            <span>{{ medicineDetails.categories }}</span>
          </p>
          <p class="med-item-maker">
            Виробник:<br />
            <span>{{ medicineDetails.maker }}</span>
          </p>
        </div>
      </div>

      <div class="medicine-comments">
        <h4 class="medicine-comments-title">Коментарі до продукту</h4>
        <div v-if="commentsId" class="comments">
          <div
            v-for="(item, index) of commentsId"
            :key="index"
            class="comment-item"
          >
            <div class="comment-item-ttle">
              <p class="comment-item-name">Коментар залишив:</p>
              <p class="comment-item-name-text">{{ item.doctor_name }}</p>
            </div>
            <p class="comment-item-text">{{ item.comments_name }}</p>
          </div>
        </div>
        <Comments :medicine-id="medicineDetails.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Comments from '@/components/Comments.vue'
export default {
  components: { Comments },
  async asyncData({ params, store, redirect, app: { localePath } }) {
    try {
      let medicineDetails = await store.dispatch('medicine/getOne', params.id)
      const comments = await store.dispatch('comment/getAll', params.id)
      const commentsId = []
      comments.forEach((element) => {
        if (element.id_medicine === +params.id) {
          commentsId.push(element)
        }
      })
      medicineDetails = medicineDetails[0]
      return { medicineDetails, commentsId }
    } catch (error) {
      redirect(localePath('/'))
    }
  },
  data() {
    return {
      medicine: {},
    }
  },
  mounted() {
    console.log(this.commentsId)
    // to do запит по id
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

  &-details {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

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

.medicine-comments {
  margin-top: 50px;

  &-title {
    color: rgba(62, 105, 77, 0.678);
    text-align: center;
  }
}

.comment-item {
  margin-top: 20px;
  border-bottom: 5px dotted rgba(94, 134, 99, 0.192);

  &-text {
    margin-top: 15px;
    padding-bottom: 10px;
  }
  &-ttle {
    display: flex;
  }
  &-name-text {
    margin-right: 10px;
    color: rgb(50, 73, 59);
    font-weight: 500;
  }
  &-name {
    margin-right: 10px;
    font-size: 14px;
  }
  &-text {
    font-size: 13px;
    color: rgba(12, 44, 15, 0.664);
  }
}
</style>
