<template>
  <section v-if="getWeakList" class="c-week">
    <div class="c-week__card">
      <ol class="c-list">
        <li
          v-for="(day, index) in getWeakList"
          :key="day.dt_txt"
          class="c-list__item"
        >
          <p class="c-list__day">{{ getDay(index) }}</p>
          <img
            class="c-list__img"
            :src="weatherIcon(day.weather[0].main)"
            alt=""
          />
          <p class="c-list__temp">
            {{ Math.floor(day.main.temp_max) + '°' }}
            /
            {{ Math.floor(day.main.temp_min) + '°' }}
          </p>
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
  data() {
    return {
      today: '',
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    }
  },
  computed: {
    getWeakList() {
      const weekList = []
      for (let i = 0; i < this.weathers.length; i++) {
        if (i % 8 === 0) {
          weekList.push(this.weathers[i])
        }
      }
      return weekList
    }
  },
  methods: {
    getToday() {
      const date = new Date()
      return date.getDay()
    },

    getDay(index) {
      let date = this.getToday() + index
      if (date > 6) {
        date = 0
      }
      return this.days[date]
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
.c-week {
  margin-top: 24px;

  &__card {
    width: 320px;
    margin: 20px auto;
    background-color: #3e434c;
    border-radius: 8px;
  }
}

.c-list {
  padding: 20px 16px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 4px 0;
    border-bottom: 1px solid #fff;
  }

  &__day {
    width: 72px;
    font-size: 14px;
  }

  &__img {
    width: 40px;
  }

  &__temp {
    font-size: 16px;
  }
}
</style>
