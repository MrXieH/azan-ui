<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return {
      asideVisible
    }
  }
};
</script>
<style lang="scss" scoped>
$activeBg: #e6f7ff;
$activeColor: #1890ff;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 80px;
    padding-left: 260px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    overflow: auto;
    background: white;
  }
}
aside {
  width: 240px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 85px 0 16px;
  background: #fff;
  box-shadow: 0 0 10px 0 #ccc;
  > h2 {
    padding: 14px;
    //margin: 12px 0;
    //padding: 0 16px;
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  > ol {
    > li {
      >a {
        display: block;
        padding: 12px 20px;
        font-size: 14px;
        color: #666;
        &:hover {
          text-decoration: none;
          color: $activeColor;
        }
      }
      .router-link-active {
        display: block;
        text-decoration: none;
        border-right: 3px solid #1890ff;
        color: $activeColor;
        background: $activeBg;
      }
    }
  }
  main {
    overflow: auto;
  }
}
</style>
