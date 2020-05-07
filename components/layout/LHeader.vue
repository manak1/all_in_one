<template>
  <header class="l-header">
    <div class="l-header__wrapper">
      <div class="l-head">
        <h1 class="l-head__title">
          名前はまだない
        </h1>
      </div>
      <nav class="l-nav">
        <ul class="l-nav__list">
          <li class="l-nav__item">
            <nuxt-link
              v-if="weatherLoaded"
              to="/weather"
              class="l-nav__link--active"
              >weather</nuxt-link
            >
            <a v-else class="l-nav__link--active" href="/weather">weather</a>
          </li>
          <li class="l-nav__item">
            <nuxt-link class="l-nav__link" to="/news">news</nuxt-link>
          </li>
          <li class="l-nav__item">
            <nuxt-link class="l-nav__link" to="/qiita">qiita</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { weatherMapper } from '@/store/weather'
export default {
  computed: {
    ...weatherMapper.mapState({ weather: 'weatherInfo' }),
    ...weatherMapper.mapState({ weathers: 'weatherList' }),
    weatherLoaded() {
      if (Object.entries(this.weather).length) {
        return true
      } else {
        return false
      }
    }
  }
}
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
    padding: 1rem 0.8rem 1rem;
  }
}

.l-head {
  text-align: center;

  &__title {
    @include text-white;

    font-size: 1.8rem;
    font-weight: normal;
    line-height: 1;
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

    &--active {
      @extend .l-nav__link;

      border-bottom: 1px solid #fff;
    }
  }
}
</style>
