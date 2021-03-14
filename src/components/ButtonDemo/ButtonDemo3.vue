<demo>不同等级</demo>
<template>
  <div>
    <Button>默认状态</Button>
    <Button level="main">主要状态</Button>
    <Button level="danger">危险状态</Button>
    <Button theme="text" level="danger">文字按钮的危险状态</Button>
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
