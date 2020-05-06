<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ route, app, error }) {
    try {
      const item = await app.$axios.$get(
        `https://api.openweathermap.org/data/2.5/weather?q=amagasaki,jp&units=metric&lang=ja&appid=d80ae072518e92b83d15080e5354ce8b`
      )
      return {
        item
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
