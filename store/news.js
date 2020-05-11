import { createNamespacedHelpers } from 'vuex'

export const newsMapper = createNamespacedHelpers('news')
export const state = () => ({
  newsList: []
})

export const getters = {
  newsList(state) {
    return state.newsList
  }
}

export const mutations = {
  setNews(state, newsInfo) {
    state.newsList = newsInfo
  }
}
