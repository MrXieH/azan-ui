<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <IconSvg icon="boom" />
    </router-link>
    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
    </ul>
    <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <IconSvg icon="menu" />
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleAside
    }
  }
}
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  // background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: $color;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width:500px) {
    > .menu{display: none;}
    > .logo{margin: 0 auto;}
    > .toggleAside{display: inline-block;}
  }
}
</style>
