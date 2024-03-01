<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue'
import Main from './en/components/Main.vue';
import Projects from './en/components/Projects.vue';
import Skills from './en/components/Skills.vue'
import About from './en/components/About.vue';
let lastScrollTime = -1250;
onMounted(() => {
  window.addEventListener('wheel', (event) => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime;
    if (timeDiff > 1250) {
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
    syncNav();
  }
  else if (scrollValue < 0) {
    let next = document.getElementsByClassName("is-prev-slide");
    let prev = document.getElementsByClassName("is-current-slide");
    if (next.length > 0) {
      prev[0].setAttribute('class', 'slide-custom is-next-slide');
      next[next.length - 1].setAttribute('class', 'slide-custom is-current-slide');
    }
    syncNav();
  }
  let allNexts = document.getElementsByClassName("is-next-slide");
  let navBar = document.getElementsByClassName("nav-bar");
  if (allNexts.length > 2) {
    navBar[0].setAttribute('class', 'nav-bar hidden');
  }
  else {
    navBar[0].setAttribute('class', 'nav-bar');
  }
}
function syncNav() {
    let allNavItems = document.getElementsByClassName('nav-item-name');
    let currentNavItem = document.getElementsByClassName('nav-item-name active');
    let prevName = document.getElementsByClassName('is-prev-slide');
    let len = prevName.length;
    currentNavItem[0].setAttribute('class', 'nav-item-name');
    allNavItems[len].setAttribute('class', 'nav-item-name active');
}
</script>

<template>
  <div class="components-container" >
    <div class="slide-custom is-current-slide"><Main/></div>
    <div class="slide-custom is-next-slide"><About/></div>
    <div class="slide-custom is-next-slide"><Projects/></div>
    <div class="slide-custom is-next-slide"><Skills/></div>
  </div>
  
  <div class="nav-bar hidden">

    <div class="nav">

      <div class="nav-list">

        <div class="nav-item">
          <div class="nav-item-name active">home()</div>
        </div>

        <div class="nav-item">
          <div class="nav-item-name">about()</div>
        </div>

        <div class="nav-item">
          <div class="nav-item-name">projects()</div>
        </div>

        <div class="nav-item">
          <div class="nav-item-name">skills()</div>
        </div>

      </div>

    </div>

  </div>

  <div class="links">
      <div class="links-list">
        <div class="links">
          <a href="https://github.com/alockinalock" target="_blank">
            <img src="./en/assets/github-mark-white.png" class="logo" alt="GitHub Logo">
          </a>
        </div>
        <div class="links">
          <a href="https://www.linkedin.com/in/andrew-zhang-8635b2297/" target="_blank">
            <img src="./en/assets/LinkedIn_icon_circle.svg.png" class="logo" alt="GitHub Logo">
          </a>
        </div>
      </div>
  </div>
</template>

<style scoped>
.nav-item-name {
  font-size: 20px;
  opacity: 0.68;
}
.active {
  opacity: 1;
  font-size: 27px;
  font-weight: 600;
}
.nav {
  position: fixed;
  left: 2%;
  transform: translateY(-50%);
  cursor: pointer;
}
.links-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 11;
  left: 92%;
  top: 2%;
  margin: 0;
  padding: 0;

  animation: riseAndFadeIn 1s 0.25s both;
}
.logo {
  height: 40px;
  width: 40px;
}
.links{
  padding: 10px;
}
.nav-item {
  padding: 15px 0 15px 0;
}
.nav-bar {
  visibility: visible;
}
.nav-list {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hidden {
  visibility: hidden;
}

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
@keyframes riseAndFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0px);}
}
</style>
