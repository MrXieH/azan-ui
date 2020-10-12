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
</template>

<script lang="ts">
import { ref } from 'vue';
import Dialog from "../lib/Dialog.vue";
export default {
  components: {
    Dialog,
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const ok = () => {}
    return {
      visible,
      toggle,
      ok
    }
  }
};
</script>