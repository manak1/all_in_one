<template>
  <section v-if="weather" class="p-weather">
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
  async asyncData({ store, $axios }) {
    try {
      const data = await $axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      await store.commit('weather/setWeather', data.data)

      const data2 = await $axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      await store.commit('weather/setWeathers', data2.data.list)
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    ...weatherMapper.mapState({ weather: 'weatherInfo' }),
    ...weatherMapper.mapState({ weathers: 'weatherList' })
  }
}
</script>

<style lang="scss" scoped>
.p-weather {
  width: 100%;
  padding-top: 92px;
}
</style>
