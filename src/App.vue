<template>
  <div id="app" class="min-h-screen">
    <router-view name="header"/>
    <router-view class="h-full pt-20"/>
    <router-view name="footer"/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F6FBFF;
  scroll-behavior: smooth;
}
</style>
