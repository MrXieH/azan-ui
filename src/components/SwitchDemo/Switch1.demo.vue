<demo>
基本用法
</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from '../../lib/Switch/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
