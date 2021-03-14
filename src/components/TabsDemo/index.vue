<template>
  <div>
    <h1>Tabs 组件示例 </h1>
    <Demo :component="TabsDemo1" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import TabsDemo1 from './TabsDemo1.vue'
export default {
  setup() {
    return {
      TabsDemo1,
      Demo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
