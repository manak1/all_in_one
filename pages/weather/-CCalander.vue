<template>
  <div style="color: #ddd;"></div>
</template>

<script>
export default {
  props: {
    weathers: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.weathers)
  }
}
</script>
