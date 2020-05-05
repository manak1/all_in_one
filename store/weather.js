import { createNamespacedHelpers } from 'vuex'

export const weatherMapper = createNamespacedHelpers('weather')

export const state = () => ({
  weatherInfo: {}
})

export const mutations = {
  setWeather(state, weatherInfo) {
    state.weatherInfo = weatherInfo
  }
}

export const actions = {
  async fetchItems({ commit }) {
    await this.$axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      .then((response) => {
        commit('setWeather', { weatherInfo: response.data })
      })
  }
}
