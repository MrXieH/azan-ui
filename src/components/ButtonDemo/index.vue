<template>
  <div>
    <h1>Button 组件示例 </h1>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Attributes :attributes="attributes"/>
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import Attributes from "../Attributes.vue";
export default {
  components: {
    Attributes
  },
  setup() {
    const attributes: Attributes = [
      {
        key: 'theme',
        remark: '按钮类型',
        type: 'string',
        values: ['default', 'primary', 'danger', 'link', 'text'],
        defaultValue: 'default'
      },
      {
        key: 'size',
        remark: '按钮尺寸',
        type: 'string',
        values: ['normal', 'small', 'big'],
        defaultValue: 'normal'
      },
      {
        key: 'disabled',
        remark: '是否禁用',
        type: 'boolean',
        values: ['true', 'false'],
        defaultValue: 'false'
      },
      {
        key: 'loading',
        remark: '是否显示加载',
        type: 'boolean',
        values: ['true', 'false'],
        defaultValue: 'false'
      }
    ]
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      Demo,
      attributes
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
