<template>
  <div class="container">
    <div class="main-content">
      <h1 class="main-content__title">Med.Search</h1>
      <img class="main-content__img" src="~/assets/img/main.svg" alt="" />
    </div>
    <div class="popular-med">
      <h2 class="popular-med__title">Популярні медикаменти</h2>
      <div class="popular-med__items">
        <!-- todo зробити циклом з беку -->
        <div class="popular-med-item">
          <p class="popular-med-item_title">Цитрамон</p>
          <p class="popular-med-item_text">
            Our Doctors are available 24/7. In case of an emergency we strongly
            suggest you call 911 or your local emergency response number.
          </p>
          <nuxt-link class="popular-med-item_link" to="/"
            >Дізнатись більше</nuxt-link
          >
        </div>
        <div class="popular-med-item">
          <p class="popular-med-item_title">Ібупрофен</p>
          <p class="popular-med-item_text">
            Chat, Call or Video Conference. We provide you with unparalleled
            Customer Support. Our professionals will be there to assist you and
            our virtual assistant is able to answer your most basic questions.
          </p>
          <nuxt-link class="popular-med-item_link" to="/"
            >Дізнатись більше</nuxt-link
          >
        </div>
        <div class="popular-med-item">
          <p class="popular-med-item_title">Септифріл</p>
          <p class="popular-med-item_text">
            Our Healthcare Professionals are virtually available at all times.
            Please sign up and set up an appointment. Our Staff is trained at
            the top medical Schools in the country.
          </p>
          <nuxt-link class="popular-med-item_link" to="/"
            >Дізнатись більше</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="health-content"></div>
  </div>
</template>

<script>
export default { auth: false }
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
