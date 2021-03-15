<demo>基本用法</demo>
<template>
  <div>
    <Button theme="button">默认按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
</template>
<tips>
theme属性支持: button(默认)、link、text
</tips>
<script lang="ts">
import { Button } from 'azan-ui'
// import Button from '../../lib/Button/Button.vue'
export default {
  components: {
    Button
  }
} 
</script>
