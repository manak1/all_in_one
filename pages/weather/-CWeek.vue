<template>
  <section class="c-week">
    <div class="c-week__card">
      <ol class="c-list">
        <li class="c-list__item"></li>
      </ol>
    </div>
  </section>
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
