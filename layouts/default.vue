<template>
  <div
    v-touch:swipe.right="swipeRight"
    v-touch:swipe.left="swipeLeft"
    class="l-content"
  >
    <l-header />
    <nuxt style="padding-top: 72px;" />
  </div>
</template>

<script>
import LHeader from '@/components/layout/LHeader'
import { pageMapper } from '@/store/page'
export default {
  components: {
    LHeader
  },
  computed: {
    ...pageMapper.mapState({ pageList: 'pages' }),
    getRouteName() {
      return this.$route.name
    }
  },
  methods: {
    swipeLeft() {
      const index = this.pageList.indexOf(this.getRouteName) + 1
      const maxIndex = this.pageList.length - 1
      if (index > maxIndex) {
        this.$router.push(`/${this.pageList[0]}`)
      } else {
        this.$router.push(`/${this.pageList[index]}`)
      }
    },
    swipeRight() {
      const index = this.pageList.indexOf(this.getRouteName) - 1
      const minIndex = 0

      if (index < minIndex) {
        this.$router.push(`/${this.pageList[this.pageList.length - 1]}`)
      } else {
        this.$router.push(`/${this.pageList[index]}`)
      }
    }
  }
}
</script>
