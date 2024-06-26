<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from "gsap";
import _ from "lodash";
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

import Main from './en/components/Main.vue';
import Projects from './en/components/Projects.vue';
import Skills from './en/components/Skills.vue'
import About from './en/components/About.vue';

let lastScrollTime = -1250;
let footerPrepared = false;

onMounted(() => {
  Observer.create({
    target: window, 
    type: "wheel, scroll, touch",
    onUp: () => {      

      // initial call
      if (footerPrepared && checkDelay()) {
        hideFooter(); 
      }
      else {
        if (checkDelay()) { 
          traverseUp(); 
        }
      }
    },
    onDown: () => {
      // initial call
      if (footerPrepared && checkDelay()) {
        showFooter();
      }
      else {
        if (checkDelay()) {
          traverseDown();
        }
      }
    },
  });

  const navElements = document.getElementsByClassName("nav-item");
  _.forEach(navElements, (element, index) => {
    element.addEventListener('click', () => navFunctionality(index));
  });
});

function navFunctionality(index) {
  let slides = document.getElementsByClassName("slide-custom");

  for (let i = 0; i < index; i++) {
    slides[i].setAttribute('class', 'slide-custom is-prev-slide');
  }

  slides[index].setAttribute('class', 'slide-custom is-current-slide');

  for (let j = index + 1; j < slides.length; j++) {
    slides[j].setAttribute('class', 'slide-custom is-next-slide');
  }

  syncNav();
  modifyNavStatus();
}

function checkDelay() {
  let status = false;
  const timeAtCheck = Date.now();
  const timeDifference = timeAtCheck - lastScrollTime;
  if (timeDifference > 1250) {
    status = true;
    lastScrollTime = timeAtCheck;
  }
  return status;
}

function traverseDown() {
  let next = document.getElementsByClassName("is-next-slide");
  let prev = document.getElementsByClassName('is-current-slide');
  if (next.length > 0){
    next[0].setAttribute('class', 'slide-custom is-current-slide');
    prev[0].setAttribute('class', 'slide-custom is-prev-slide');
  }
  let footerStateManagement = document.getElementsByClassName("is-prev-slide");
  if (footerStateManagement.length == 3 && !footerPrepared) {
    footerPrepared = true;
  }
  syncNav();
  modifyNavStatus();
}

function traverseUp() {
  let next = document.getElementsByClassName("is-prev-slide");
  let prev = document.getElementsByClassName("is-current-slide");
  if (next.length > 0) {
    prev[0].setAttribute('class', 'slide-custom is-next-slide');
    next[next.length - 1].setAttribute('class', 'slide-custom is-current-slide');
  }
  syncNav();
  modifyNavStatus();
}

function modifyNavStatus() {
  let allNexts = document.getElementsByClassName("is-next-slide");
  let navBar = document.getElementsByClassName("nav-bar");
  if (allNexts.length > 2) {
    navBar[0].classList.add("hidden");
  }
  else {
    navBar[0].classList.remove("hidden");
  }
}

function syncNav() {
    let allNavItems = document.getElementsByClassName('nav-item-name');
    let currentNavItem = document.getElementsByClassName('nav-item-name active');
    let prevName = document.getElementsByClassName('is-prev-slide');
    let len = prevName.length;
    currentNavItem[0].classList.remove("active");
    allNavItems[len].classList.add("active");
}

// fix these functions for footer
// footer should lock the nav bar from interactivity
function showFooter() {
  let footerElement = document.querySelector('.footer');
  let slidesContainerElement = document.querySelector(".container");
  if (footerPrepared) {
    footerElement.setAttribute('style', 'transform: translate(0px, -220.933px)');
    slidesContainerElement.setAttribute('style', 'transform: translate(0px, -220.933px)');
  }
}

function hideFooter() {
  let prevElements = document.getElementsByClassName("is-prev-slide");
  let slidesContainerElement = document.querySelector(".container");
  let footerElement = document.querySelector('.footer');
  if (prevElements.length == 3) {
    footerElement.setAttribute('style', 'transform: translate(0px)');
    slidesContainerElement.setAttribute('style', 'transform: translate(0px)');
    footerPrepared = false;
  }
}

</script>

<template>

  <div class="container" style="transform: translate(0px);">
 
    <div class="components-container" >
      <div class="slide-custom is-current-slide"><Main/></div>
      <div class="slide-custom is-next-slide"><Projects/></div>
      <div class="slide-custom is-next-slide"><Skills/></div>
      <div class="slide-custom is-next-slide"><About/></div>
    </div>

    
    <div class="nav-bar hidden">

      <div class="nav">

        <div class="nav-list">

          <div class="nav-item">
            <div class="nav-item-name active">home()</div>
          </div>

          <div class="nav-item">
            <div class="nav-item-name">projects()</div>
          </div>

          <div class="nav-item">
            <div class="nav-item-name">skills()</div>
          </div>

          <div class="nav-item">
            <div class="nav-item-name">about()</div>
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

  </div>

  <div class="footer" style="transform: translate(0px);">
      <div class="contact-info">
        <div class="contact-info-inner">
          <h3>For general inquiries:  <a href="mailto:andrewjingxuanzhang@gmail.com">andrewjingxuanzhang@gmail.com</a></h3>
          <h3>For YouTube related inquiries: <a href="mailto:alockinalock@gmail.com">alockinalock@gmail.com</a></h3>
        </div>
      </div>
    </div>

</template>

<style scoped>
#app {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
div, body, li, ul, ol, p, nav, a, section {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  z-index: 100;
  position: relative;
  /* -webkit-transition: all 0.3s;
  transition: all .3s; */
  -webkit-transition:-webkit-transform .4s ease-out;
  transition:-webkit-transform .4s ease-out;
  transition:transform .4s ease-out;
  transition:transform .4s ease-out,-webkit-transform .4s ease-out
}

.nav-item:first-child .nav-item-name {
  transition: none 0s;
}
.nav-item-name {
  font-size: 20px;
  opacity: 0.68;
  transition: font-size 0.3s;
}
.active {
  opacity: 1;
  font-size: 27px;
  font-weight: 600;
}
.nav-list {
  height: 15.656rem;
}
.nav {
  position: fixed;
  left: 2%;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
}
.links-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 11;
  position: absolute;
  top: 10px;
  right: 10px;
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
  position: absolute;
  z-index: 99;
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

.footer .contact-info .contact-info-inner h3, .footer .contact-info .contact-info-inner a {
  margin: 0;
  font-size: 1.012733rem;
  font-weight: 650;
  color: currentColor;
  line-height: 1.756749rem;
  color: #9d9d9d;
}

.footer .contact-info .contact-info-inner {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-box-align:start;
  -ms-flex-align:start;
  align-items:flex-start
}

.footer .contact-info {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center
}

.footer {
  position:relative;
  width:100%;
  height:13.808rem;
  -ms-flex-negative:0;
  flex-shrink:0;
  color:#fff;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
  -ms-flex-line-pack:center;
  align-content:center;
  background:#fff;
  margin:0 auto;
  -ms-touch-action:none;
  touch-action:none;
  pointer-events:auto;
  -webkit-transition:-webkit-transform .4s ease-out;
  transition:-webkit-transform .4s ease-out;
  transition:transform .4s ease-out;
  transition:transform .4s ease-out,-webkit-transform .4s ease-out;
  overflow:hidden;
  z-index: 500;
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
