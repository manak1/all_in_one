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
          <li v-for="page in pageList" :key="page" class="l-nav__item">
            <nuxt-link
              v-if="isDataLoaded(page)"
              :class="linkClass(page)"
              :to="`/${page}`"
            >
              {{ page }}
            </nuxt-link>
            <a v-else :href="`/${page}`" :class="linkClass(page)">
              {{ page }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { weatherMapper } from '@/store/weather'
import { pageMapper } from '@/store/page'
export default {
  computed: {
    ...weatherMapper.mapState({ weather: 'weatherInfo' }),
    ...weatherMapper.mapState({ weathers: 'weatherList' }),
    ...pageMapper.mapState({ pageList: 'pages' }),
    weatherLoaded() {
      if (Object.entries(this.weather).length) {
        return true
      } else {
        return false
      }
    },
    newsLoaded() {
      return true
    },
    qiitaLoaded() {
      return true
    },
    getRouteName() {
      return this.$route.name
    }
  },
  methods: {
    linkClass(page) {
      return {
        'l-nav__link': true,
        'l-nav__link--active': this.getRouteName === page
      }
    },
    isDataLoaded(name) {
      switch (name) {
        case 'weather':
          return this.weatherLoaded
        case 'news':
          return this.newsLoaded
        case 'qiita':
          return this.qiitaLoaded
        default:
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
  background-color: #3e434c;
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
