<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :ok="ok">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import { ref, h } from "vue";
import Dialog from "../lib/Dialog/Dialog.vue";
import Button from "../lib/Button/Button.vue";
import { openDialog } from '../lib/Dialog/openDialog';
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {};
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      visible,
      toggle,
      ok,
      showDialog
    };
  },
};
</script>