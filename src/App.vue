<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <!-- <router-link to="/"> 首页 </router-link>
  <router-link to="/blog"> 长文 </router-link>
  <router-link to="/post"> 发布 </router-link>
  <router-link to="/interest"> 关注 </router-link>
  <router-link to="/user"> 个人中心 </router-link>
  <router-view />-->
  <Header />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
