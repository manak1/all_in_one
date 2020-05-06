<template>
  <section v-if="dataLoaded" class="p-weather">
    <div class="c-container">
      <c-hero :weather-info="weather" />
      <c-day :weathers="weathers" />
      <c-week :weathers="weathers" />
    </div>
  </section>
</template>

<script>
import { weatherMapper } from '@/store/weather'
import CHero from '@/pages/weather/-CHero'
import CWeek from '@/pages/weather/-CWeek'
import CDay from '@/pages/weather/-CDay'

export default {
  components: { CHero, CWeek, CDay },
  async fetch({ store, app }) {
    try {
      const data = await app.$axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      await store.commit('weather/setWeather', data.data)

      const data2 = await app.$axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      await store.commit('weather/setWeathers', data2.data.list)
    } catch (err) {
      console.log(err, 'エラー起きたっぽい')
    }
  },
  computed: {
    ...weatherMapper.mapState({ weather: 'weatherInfo' }),
    ...weatherMapper.mapState({ weathers: 'weatherList' }),

    dataLoaded() {
      if (this.weathers.length >= 1) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.p-weather {
  width: 100%;
  padding-top: 72px;
}
</style>
