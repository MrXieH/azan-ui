<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Attributes :attributes="attributes"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from '../Demo.vue'
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
       },
       {
         key: 'disabled',
         remark: '是否禁用',
         type: 'boolean',
         values: ['true', 'false'],
         defaultValue: 'false'
       }
     ]
    return {
      Switch1Demo,
      Switch2Demo,
      Demo,
      attributes
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
