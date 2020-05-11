<template>
  <section v-if="newsList" class="p-news">
    <div class="c-container">
      <ul class="p-list">
        <li v-for="news in newsList" :key="news.title" class="p-list__item">
          <c-news :news="news" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { newsMapper } from '@/store/news'
import CNews from '@/pages/news/-CNews'
export default {
  components: {
    CNews
  },
  async fetch({ store, app }) {
    if (store.getters['news/newsList'].length) {
      return
    }
    try {
      const data = await app.$axios.get(
        `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.NEWS_API_KEY}`
      )
      await store.commit('news/setNews', data.data.articles)
    } catch (err) {
      console.log(err, 'エラー起きたっぽい')
    }
  },
  computed: {
    ...newsMapper.mapState({ newsList: 'newsList' })
  }
}
</script>

<style scoped lang="scss">
.p-list {
  max-width: 320px;
  margin: 0 auto;

  &__item {
    &:nth-child(n + 2) {
      margin-top: 16px;
    }
  }
}
</style>
