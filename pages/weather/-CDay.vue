<template>
  <section v-if="getDayList" class="c-day">
    <div class="c-day__card">
      <ol class="c-list">
        <li v-for="item in getDayList" :key="item.dt_txt" class="c-list__item">
          <time class="c-list__time"> {{ getHour(item.dt_txt) }} </time>
          <img
            class="c-list__img"
            :src="weatherIcon(item.weather[0].main)"
            alt="天気模様"
          />
          <p class="c-list__temp">{{ Math.floor(item.main.temp) }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    weathers: {
      type: Array,
      required: true
    }
  },
  computed: {
    getDayList() {
      return this.weathers.slice(0, 8)
    }
  },

  methods: {
    getHour(dateTime) {
      const splited = dateTime.split(' ')
      return splited[1].slice(0, 2)
    },
    weatherIcon(weather) {
      switch (weather) {
        case 'Clear':
          return require('@/assets/images/weather/weather_sunny.svg')
        case 'Rain':
          return require('@/assets/images/weather/weather_rain.svg')
        case 'Clouds':
          return require('@/assets/images/weather/weather_cloudy.svg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-day {
  width: 100%;
  margin-top: 24px;

  &__card {
    width: 320px;
    height: 96px;
    margin: 0 auto;
    background-color: #3e434c;
    border-radius: 8px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.28235);
  }
}

.c-list {
  z-index: 2;
  display: flex;
  padding: 6px 12px;
  margin: 0 12px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox 対応 */

  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }

  &__item {
    min-width: 56px;
    text-align: center;
  }

  &__time {
    font-size: 12px;
    line-height: 1;
  }

  &__img {
    display: block;
    height: 40px;
    margin: 0 auto;
  }

  &__temp {
    position: relative;
    font-size: 12px;
    line-height: 1;
    text-align: center;

    &::after {
      position: absolute;
      content: '°';
    }
  }
}
</style>
