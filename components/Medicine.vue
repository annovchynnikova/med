<template>
  <div class="popular-med__items">
    <div
      v-for="(item, index) of filteredMedicines"
      :key="index"
      class="popular-med-item"
    >
      <div>
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
        <div
          v-if="isNotGuest"
          class="med-like"
          :class="{ 'med-liked': likedMeds.includes(item.id) }"
          @click="liked(item.id)"
        ></div>
      </div>
    </div>
    <loading-bar v-if="!medicines.length"></loading-bar>
  </div>
</template>

<script>
import loadingBar from '@/components/LoadingBar.vue'

import medicines from '@/mixins/medicines.js'
export default {
  components: {
    loadingBar,
  },
  mixins: [medicines],
  props: {
    ids: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isLiked: false,
    }
  },
  computed: {
    filteredMedicines() {
      return this.ids.length
        ? this.medicines.filter((item) => this.ids.includes(item.id))
        : this.medicines
    },
  },
  methods: {
    liked(id) {
      const data = {
        liked_id: id,
        email: this.$auth.user.email,
      }
      this.$store.dispatch(`doctor/toggleLiked`, data)
    },
  },
}
</script>

<style lang="scss" scoped>
.med-like {
  width: 20px;
  height: 18px;
  background-image: url('~assets/img/heart_mono.svg');
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;

  &.med-liked {
    background-image: url('~assets/img/heart_grade.svg');
  }
}

.med-item-info {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
