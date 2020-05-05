<template>
  <section class="p-weather">
    <div class="c-container">
      <c-hero v-if="weather" :weather-info="weather" />
    </div>
  </section>
</template>

<script>
import { weatherMapper } from '@/store/weather'
import CHero from '@/pages/weather/-CHero'
export default {
  components: { CHero },
  async asyncData({ store, $axios }) {
    // await store.dispatch('weather/fetchItems')
    try {
      const data = await $axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      console.log(data.data)
      await store.commit('weather/setWeather', data.data)
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    ...weatherMapper.mapState({ weather: 'weatherInfo' })
  }
}
</script>

<style lang="scss" scoped>
.p-weather {
  width: 100%;
  padding-top: 92px;
}
</style>
