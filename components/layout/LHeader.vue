<template>
  <header class="l-header">
    <div class="l-header__wrapper">
      <div class="l-head">
        <h1 class="l-head__title">
          ALL IN ONE
        </h1>
      </div>
      <nav class="l-nav">
        <ul class="l-nav__list">
          <li class="l-nav__item">
            <nuxt-link class="l-nav__link" to="/weather">天気</nuxt-link>
          </li>
          <li class="l-nav__item">
            <nuxt-link class="l-nav__link" to="/news">ニュース</nuxt-link>
          </li>
          <li class="l-nav__item">
            <nuxt-link class="l-nav__link" to="/qiiita">qiiita</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-header {
  position: fixed;
  z-index: 999;
  width: 100%;
  max-height: 60px;
  margin-bottom: 60px;
  background-color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  &__wrapper {
    padding: 0.3rem 0.8rem 0.8rem;
  }
}

.l-head {
  text-align: center;

  &__title {
    @include text-white;

    font-size: 1.8rem;
    font-weight: normal;
  }
}

.l-nav {
  &__list {
    display: flex;
    justify-content: center;
  }

  &__link {
    @include text-white;

    display: inline-block;
    padding: 0 1rem;
    font-size: 1.2rem;
  }
}
</style>
