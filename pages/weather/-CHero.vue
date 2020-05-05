<template>
  <div class="c-hero">
    <div class="c-hero__card">
      <div class="c-info">
        <h2 class="c-info__title">{{ weatherInfo.name }}</h2>
        <p class="c-info__weather">{{ weatherInfo.weather[0].description }}</p>
        <p class="c-info__temp">{{ Math.floor(weatherInfo.main.temp) }}°</p>
      </div>
      <div class="c-weather">
        <img :src="weatherIcon" alt="天気模様" class="c-weather__img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    weatherIcon() {
      const currentWeather = this.weatherInfo.weather[0].main
      if (currentWeather === 'Rain') {
        return require('@/assets/images/weather/weather_rain.svg')
      } else {
        return require('@/assets/images/weather/weather_rain.svg')
      }
    }
  },
  mounted() {
    console.log(this.weatherInfo)
  }
}
</script>

<style lang="scss" scoped>
.c-hero {
  width: 100%;

  &__card {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 320px;
    height: 140px;
    padding: 1.5rem;
    margin: 0 auto;
    background-color: #222;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 4px 5px 0 #00000048;

    /* background-image: url('~assets/images/weather/hero/hero_morning.jpeg'); */

    &::before {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      content: '';
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 8px;
    }
  }
}

.c-info {
  z-index: 2;
  width: 60%;

  &__title {
    @include text-white;

    font-size: 1.6rem;
    letter-spacing: 0;

    &::after {
      display: block;
      width: 14px;
      height: 3px;
      margin-top: 0.6rem;
      content: '';
      background-color: #fff;
    }
  }

  &__weather {
    margin-top: 0.8rem;
    font-size: 1.4rem;
  }

  &__temp {
    margin-top: 2px;
    font-size: 3.2rem;
  }
}

.c-weather {
  z-index: 2;
  width: 40%;

  &__img {
    width: 100%;
  }
}
</style>
