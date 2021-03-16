<demo>
基本用法
</demo>
<template>
  <Button @click="componentShowDialog">组件调用</Button>
  <Dialog :closeOnClickOverlay="false" v-model:visible="visible" :ok="ok">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>内容</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../../lib/Dialog/Dialog.vue";
import Button from "../../lib/Button/Button.vue";
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
    return {
      visible,
      componentShowDialog,
      ok
    };
  },
};
</script>
