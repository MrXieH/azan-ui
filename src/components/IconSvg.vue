<template>
  <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#icon-' + icon"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'icon-boom'
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    width: 2.5em; height: 2.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
 }
</style>