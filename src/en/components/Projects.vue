<script setup="ts">

</script>

<template>
  <div class="items-container">

    <div class="item">
      <h1>test2</h1>
    </div>

    <div class="item">
      <h1>test2</h1>
    </div>

    <div class="item">
      <h1>test2</h1>
    </div>

    <div class="item">
      <h1>test2</h1>
    </div>

  </div>
</template>

<style scoped>
.item:hover {
  width: 12em;
}
.item {
  margin-left: 50px;
  width: 8em;

  background-color: rgb(60, 60, 60);

  transition: width .25s ease, right .25s ease;
}
.items-container {
  position: absolute;
  margin: 0;
  padding: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 75%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>