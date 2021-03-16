<template>
  <div>
    <h1>Tabs 组件示例 </h1>
    <Demo :component="TabsDemo1" />
    <Attributes :attributes="attributes" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import TabsDemo1 from './TabsDemo1.vue'
import Attributes from "../Attributes.vue";
export default {
  components: {
    Attributes
  },
  setup() {
    const attributes: Attributes = [
        {
          key: 'selected',
          remark: '当前显示的tab title',
          type: 'string',
          values: ['-'],
          defaultValue: '-'
        }
      ]
    return {
      TabsDemo1,
      Demo,
      attributes
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
