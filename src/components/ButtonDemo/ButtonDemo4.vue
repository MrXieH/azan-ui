<demo>不同形态</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button disabled>禁用</Button>
  </div>
</template>
<tips>
level属性支持: normal(默认)、main、danger
</tips>
<script lang="ts">
import Button from '../../lib/Button/Button.vue'
export default {
  components: {
    Button
  }
}
</script>
