<template>
  <div v-if="loading" class="content" :value="overlay">
    <div class="loadingFull">
      <img class="load-icon" src="" alt="" />
      <div class="load-square"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    overlay: false,
  }),
  methods: {
    start() {
      this.loading = true
      this.overlay = true
    },
    finish() {
      this.loading = false
      this.overlay = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  z-index: 999;
  height: 100%;
  width: 100%;
}
.loadingFull {
  position: relative;
  height: 100%;
}
.load-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
.load-square {
  position: absolute;
  width: 100%;
  height: 135px;
  top: 67%;
  background: #ffff;
  box-shadow: 0 0 15px 50px #ffff;
  z-index: 1;
  animation: mover 1.5s infinite;
  animation-iteration-count: 20;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(-208px);
  }
  100% {
    transform: translateY(-408px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(-208px);
  }
  100% {
    transform: translateY(-408px);
  }
}
</style>
