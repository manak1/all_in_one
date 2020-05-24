<template>
  <div>
    <l-loading v-if="loading" />
    <div v-else class="l-content">
      <l-header />
      <nuxt style="padding-top: 72px;" />
    </div>
  </div>
</template>

<script>
import LHeader from '@/components/layout/LHeader'
import LLoading from '@/components/layout/LLoading'
import { pageMapper } from '@/store/page'
export default {
  components: {
    LHeader,
    LLoading
  },
  data() {
    return {
      loading: true
    }
  },

  computed: {
    ...pageMapper.mapState({ pageList: 'pages' }),
    getRouteName() {
      return this.$route.name
    }
  },

  mounted() {
    this.loading = false
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
