<template>
<div class="demo">
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions" @click="toggleCode">
    {{ codeVisible ? '隐藏代码' : '显示代码' }}
  </div>
  <div class="demo-code" v-if="codeVisible">
    <pre class="language-html" v-html="html" />
  </div>
  <div class="tips" v-if="codeVisible && component.__tips">
    <div v-html="component.__tips"></div>
  </div>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
import { computed, ref } from 'vue'
const Prism = (window as any).Prism
export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
    const codeVisible = ref(false)
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })

    // const showCode = () => codeVisible.value = true
    // const hideCode = () => codeVisible.value = false

    const toggleCode = () => codeVisible.value = !codeVisible.value

    return {
      codeVisible,
      html,
      toggleCode
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #ebebeb;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  &:hover {
    box-shadow: 0 0 8px 0 #eee;
  }
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
  .tips {
    padding: 20px;
  }
  .demo-actions {
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    color: #999;
    &:hover {
      color: #0d92ff;
      background: #f8f9fb;
    }
  }
}
</style>
