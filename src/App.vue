<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue'
import Main from './en/components/Main.vue';
import Projects from './en/components/Projects.vue';
import Skills from './en/components/Skills.vue'
import About from './en/components/About.vue';
let lastScrollTime = -2000;
onMounted(() => {
  window.addEventListener('wheel', (event) => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime;
    if (timeDiff > 2000) {
      handleScroll(event.deltaY);
      lastScrollTime = currentTime;
    }
  });
});
function handleScroll(scrollValue) {
  if (scrollValue > 0) {
    let next = document.getElementsByClassName("is-next-slide");
    let prev = document.getElementsByClassName('is-current-slide');
    if (next.length > 0){
      next[0].setAttribute('class', 'slide-custom is-current-slide');
      prev[0].setAttribute('class', 'slide-custom is-prev-slide');
    }
  }
  else if (scrollValue < 0) {
    let next = document.getElementsByClassName("is-prev-slide");
    let prev = document.getElementsByClassName("is-current-slide");
    if (next.length > 0) {
      prev[0].setAttribute('class', 'slide-custom is-next-slide');
      next[next.length - 1].setAttribute('class', 'slide-custom is-current-slide');
    }
  }
}
</script>

<template>
  <div class="components-container" >
    <div class="slide-custom is-current-slide"><Main/></div>
    <div class="slide-custom is-next-slide"><About/></div>
    <div class="slide-custom is-next-slide"><Projects/></div>
    <div class="slide-custom is-next-slide"><Skills/></div>
  </div>
  
</template>

<style scoped>
.slide-custom {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  /* -webkit-transition: opacity 1.3s, visibility 1s, -webkit-transform 1s;
  transition: opacity 1.3s, visibility 1s, -webkit-transform 1s; */
  transition: transform 1s, opacity 1.3s, visibility 1s;
  /* transition: transform 1s, opacity 1.3s, visibility 1s, -webkit-transform 1s; */
}
.is-prev-slide {
  opacity: 0;
  z-index: 10;
  visibility: hidden;
}
.is-current-slide {
  opacity: 1;
  z-index: 10;
  visibility: visible;
}
.is-next-slide {
  opacity: 0;
  z-index: 10;
  visibility: hidden;
}
</style>
