<demo>
函数调用
</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button/Button.vue";
import { openDialog } from '../../lib/Dialog/openDialog';
export default {
  components: {
    Button
  },
  setup() {
    const ok = () => {
      alert('ok')
    };
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok,
        closeOnClickOverlay: false
      })
    }
    return {
      ok,
      showDialog
    };
  },
};
</script>
