<template>
  <div>
    <h1>Dialog 组件示例 </h1>
    <Demo :component="DialogDemo1" />
    <Demo :component="DialogDemo2" />
    <Attributes :attributes="attributes"/>
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import DialogDemo1 from "./DialogDemo1.vue";
import DialogDemo2 from "./DialogDemo2.vue";
import Attributes from "../Attributes.vue";
export default {
  components: {
    Attributes
  },
  setup() {
    const attributes: Attributes = [
        {
          key: 'visible',
          remark: '是否显示',
          type: 'boolean',
          values: ['true', 'false'],
          defaultValue: 'false'
        },
        {
          key: 'closeOnClickOverlay',
          remark: '点击遮罩是否关闭',
          type: 'boolean',
          values: ['true', 'false'],
          defaultValue: 'true'
        },
        {
          key: 'ok',
          remark: '点击确认的回调函数, 如果该函数返回false，则不关闭遮罩',
          type: 'function',
          values: ['-'],
          defaultValue: '-'
        },
        {
          key: 'cancel',
          remark: '点击取消的回调函数, 如果该函数返回false，则不关闭遮罩',
          type: 'function',
          values: ['-'],
          defaultValue: '-'
        }
      ]
    return {
      DialogDemo1,
      DialogDemo2,
      attributes,
      Demo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
