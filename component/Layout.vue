<template>
  <div id="app">
    <simple-menu />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style>
body {
  margin: 0;
}
#app {
  height: 100vh;
}
.container {
  margin-left: 200px;
  height: 100%;
  background: #f5f7fa;
  padding: 10px;
  box-sizing: border-box;
}
</style>