<demo>
基本用法
</demo>
<template>
  <Button @click="componentShowDialog">组件调用</Button>
  <Dialog v-model:visible="visible" :ok="ok">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>内容</div>
    </template>
  </Dialog>
  <Button @click="showDialog">函数调用</Button>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../../lib/Dialog/Dialog.vue";
import Button from "../../lib/Button/Button.vue";
import { openDialog } from '../../lib/Dialog/openDialog';
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false);
    const componentShowDialog = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      alert('ok')
    };
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok
      })
    }
    return {
      visible,
      componentShowDialog,
      ok,
      showDialog
    };
  },
};
</script>
