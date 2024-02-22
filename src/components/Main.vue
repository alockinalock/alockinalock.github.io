<script setup lang="ts">

let element = document.getElementById('typewriter-greeting');

// Validating everything right here and now.
if (element) {
  let namesToRotateThrough: string[] = JSON.parse(element?.getAttribute('data-type') ?? "[]");
  let period: number = parseInt(element?.getAttribute('data-period') ?? "0");
} else {
  throw new Error("Element: \"typewriter-greeting\" is non-existent");
}



</script>

<template>
  <h1 id="typewriter-greeting">Hello, I'm <span id="dynamically-changing-username" data-period="2000" data-type='["alockinalock", Andrew Zhang]'>alockinalock</span></h1>
</template>

<style scoped>
#typewriter-greeting {
  position: fixed;
  top: 40%;
  left: 7.5%;
  white-space: normal;
}
#dynamically-changing-username{
  color:aqua;
}
</style>