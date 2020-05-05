<template>
  <section class="p-weather">
    <div class="c-container">
      <c-hero :weather-info="weather.weatherInfo" />
    </div>
  </section>
</template>

<script>
import { weatherMapper } from '@/store/weather'
import CHero from '@/pages/weather/-CHero'
export default {
  components: {
    CHero
  },
  async asyncData({ store }) {
    await store.dispatch('weather/fetchItems')
  },
  computed: {
    ...weatherMapper.mapState({ weather: 'weatherInfo' })
  },
  mounted() {
    console.log(this.weather)
  }
}
</script>

<style lang="scss" scoped>
.p-weather {
  width: 100%;
  padding-top: 32px;
}
</style>
