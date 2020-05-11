import { createNamespacedHelpers } from 'vuex'

export const pageMapper = createNamespacedHelpers('page')

export const state = () => ({
  // タブの並び替えができるようにapiで保存する説
  pages: ['weather', 'news', 'qiita']
})

export const getters = {
  pages(state) {
    return this.state.pages
  }
}

export const mutations = {}

export const actions = {}
