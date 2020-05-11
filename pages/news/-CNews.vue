<template>
  <article v-if="news" class="c-news">
    <a :href="news.url" target="_blank">
      <div class="c-news__box">
        <div class="c-thumbnail">
          <div
            :style="`background-image:url(${news.urlToImage})`"
            class="c-thumbnail__img"
          />
        </div>
        <div class="c-title">
          <h2 class="c-title__title">
            {{ titleProcess(news.title) }}
          </h2>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  methods: {
    titleProcess(title) {
      let fixedTitle = ''
      if (title.length >= 30) {
        fixedTitle = title.substr(0, 30) + ' ...'
        return fixedTitle
      }
      return title
    }
  }
}
</script>

<style lang="scss" scoped>
.c-news {
  &__box {
    display: flex;
    align-items: center;
    height: 99px;
    padding: 14px;
    background-color: #3e434c;
    border-radius: 12px;
  }
}

.c-title {
  width: 50%;

  &__title {
    @include text-white;

    font-size: 1.2rem;
    font-weight: normal;
    letter-spacing: 0;
  }
}

.c-thumbnail {
  width: 50%;
  height: 100%;
  margin-right: 13px;

  &__img {
    width: 100%;
    height: 72px;
    background-position: center;
    background-size: cover;
  }
}
</style>
