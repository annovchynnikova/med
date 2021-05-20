<template>
  <div class="comment-container">
    <!-- <input v-model="id_medicine" type="text" /> -->
    <input
      v-model="doctor_name"
      placeholder="Ваше прізвище та ім'я"
      type="text"
    />
    <textarea v-model="comments_name" placeholder="Коментар" type="text" />
    <p v-if="errorText" class="error-text">{{ errorText }}</p>
    <button class="app-button" @click="sendComment">Прокоментувати</button>
    <p v-if="successText" class="success-text">{{ successText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // todo валідація
      id_medicine: '1',
      doctor_name: '',
      comments_name: '',
      data: null,
      errorText: null,
      successText: null,
    }
  },
  methods: {
    sendComment() {
      this.data = {
        id_medicine: this.id_medicine,
        doctor_name: this.doctor_name,
        comments_name: this.comments_name,
      }
      this.$store
        .dispatch('comment/addNew', this.data)
        .then((res) => {
          this.successText = 'Ваш коментар успішно залишено!'
          setTimeout(() => {
            this.successText = ''
          }, 2000)
        })
        .catch((error) => {
          this.errorText = error.response.data.error.message
        })
        .finally(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-container {
  display: flex;
  max-width: 700px;
  margin: 20px;
  flex-direction: column;
  textarea {
    margin: 15px 0;
    border: 2px solid rgba(88, 147, 127, 0.5);
    outline: none;
    height: 100px;
    resize: none;
  }
  .app-button {
    font-size: 15px;
    max-width: 150px;
    max-height: 35px;
  }
  .success-text {
    margin-top: 10px;
    font-size: 12px;
    color: rgb(25, 100, 31);
  }
}
</style>
