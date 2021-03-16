<template>
  <div class="wrapper">
    <div class="topnavAndBanner">
      <div class="banner">
        <img src="../assets/azan-logo.png" alt="logo" class="logo">
        <h1 class="name">azan UI</h1>
        <h2 class="desc">一个基于vue3 + typescript的简易UI框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <IconSvg icon="vue" />
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <IconSvg icon="typescript" />
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <IconSvg icon="light" />
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav }
};
</script>
<style lang="scss" scoped>
$green: #0170fe;
$border-radius: 4px;
$color: #0170fe;
.topnavAndBanner {
  clip-path: ellipse(80% 60% at 50% 40%);
  background: linear-gradient(90deg, #f3f6fd 0%, #f1f6ff 100%);
}
.banner {
  padding: 100px 20px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  .name, .desc {
    margin: 10px 0;
  }
  > .actions{
    margin-top: 20px;
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (max-width: 400px) {
    width: auto;
  }
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul{
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text;
      }
    }
  }
}
</style>
