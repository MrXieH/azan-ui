<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = props.content
    return {
      content
    }
  }
}
</script>