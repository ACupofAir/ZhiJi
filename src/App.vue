<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-inline: 20%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* background-color: rgb(254, 247, 255); */
}
</style>
