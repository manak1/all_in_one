import { createNamespacedHelpers } from 'vuex'

export const weatherMapper = createNamespacedHelpers('weather')

export const state = () => ({
  weatherInfo: {},
  weatherList: {}
})

export const getters = {
  weather(state) {
    return state.weatherInfo
  }
}

export const mutations = {
  setWeather(state, weatherInfo) {
    state.weatherInfo = weatherInfo
  },
  setWeathers(state, weathers) {
    state.weatherList = weathers
  }
}

export const actions = {
  async fetchItems({ commit, $axios }) {
    await $axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=amagasaki&units=metric&appid=${process.env.WEATHER_API_KEY}`
      )
      .then((response) => {
        commit('setWeather', { weatherInfo: response.data })
      })
  }
}
