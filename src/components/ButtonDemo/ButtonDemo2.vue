<demo>不同尺寸</demo>
<template>
  <div>
    <Button size="small">小按钮</Button>
    <Button size="normal">默认大小</Button>
    <Button size="big">大按钮</Button>
  </div>
</template>
<tips>
size属性支持: normal(默认)、small、big
</tips>
<script lang="ts">
import Button from '../../lib/Button/Button.vue'
export default {
  components: {
    Button
  }
}
</script>
