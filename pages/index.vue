<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.WEATHER_API_KEY)
    console.log(
      `api.openweathermap.org/data/2.5/weather?q=amagasaki&appid=${process.env.WEATHER_API_KEY}`
    )
  }
}
</script>
