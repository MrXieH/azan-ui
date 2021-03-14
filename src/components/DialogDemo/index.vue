<template>
  <div>
    <h1>Dialog 组件示例 </h1>
    <Demo :component="DialogDemo1" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import DialogDemo1 from "./DialogDemo1.vue";
export default {
  setup() {
    return {
      DialogDemo1,
      Demo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
