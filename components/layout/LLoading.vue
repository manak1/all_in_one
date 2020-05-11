<template>
  <div class="l-loading">
    <div class="l-loading__wrapper">
      <div class="l-box">
        <img
          src="@/assets/loading/loading_img.svg"
          alt="penguinの画像"
          class="l-box__img"
        />
        <scale-loader :color="'#222'" />
      </div>
    </div>
  </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader'
export default {
  components: {
    ScaleLoader
  }
}
</script>

<style lang="scss" scoped>
.l-loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;

  &__wrapper {
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 500px;
    margin: 0 auto;
  }
}

.l-box {
  text-align: center;
  transform: translateY(-80%);

  &__img {
    width: 64px;
    border: 3px solid #222;
    border-radius: 50%;
  }
}
</style>
