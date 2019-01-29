<template>
  <div class="app">
    <main-header/>
  </div>
</template>

<script>
import MainHeader from './layout/main-header.vue'
export default {
  components: { MainHeader }
}
</script>

<style lang="scss">
@import "~#/scss/app.scss";
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

