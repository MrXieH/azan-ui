<template>
  <div>
    <h1>Button 组件示例 </h1>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Attributes :attributes="attributes"/>
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo4.vue";
import Attributes from "../Attributes.vue";
export default {
  components: {
    Attributes
  },
  setup() {
    const attributes: Attributes = [
      {
        key: 'value',
        remark: '是否开关',
        type: 'boolean',
        values: ['true', 'false'],
        defaultValue: 'false'
      }
    ]
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      Demo,
      attributes
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
