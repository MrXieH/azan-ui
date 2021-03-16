<demo>
基本用法
</demo>
<template>
  <Tabs v-model:selected="current">
    <Tab title="tab1">content1</Tab>
    <Tab title="tab2">content2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../../lib/Tabs/Tabs.vue'
import Tab from '../../lib/Tabs/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const current = ref('tab1')
    return {
      current
    }
  }
}
</script>
