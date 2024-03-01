<script setup="ts">

</script>

<template>
    <div class="container">
      <div class="project-entry">
        <img src="../assets/Rust_programming_language_black_logo.svg.png" class="logo">
        <div class="project-name">
          RustyTodoCLI
        </div>
      </div>
      <div class="project-entry">
        <img src="../assets/Vue.js_Logo_2.svg.png" class="logo">
        <div class="project-name">
          Personal-Website
        </div>
      </div>
    </div>
</template>

<style scoped>
.project-name {
  margin:0;
  padding:0;
  transform: translateX(22.5%);
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: translateX(25%);
}
.project-entry {
  padding: 100px;
  margin: 0;
}
.logo {
  margin:0;
  padding:0;
  weight: 200px;
  height: 200px;
}
</style>