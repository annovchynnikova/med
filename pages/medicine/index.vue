<template>
  <div class="container">
    <div class="popular-med__items">
      <Medicine />
    </div>
  </div>
</template>

<script>
import Medicine from '@/components/Medicine.vue'

export default {
  components: {
    Medicine,
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
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
