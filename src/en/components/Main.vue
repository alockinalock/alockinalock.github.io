<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);
var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };
TxtType.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  }
  else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt;

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2 }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
window.onload = function() {
  let css = document.createElement("style");
  css.innerHTML = "#typewriter-greeting > #dynamically-changing-username { border-right: 0.08em solid #fff ;}";
  document.body.appendChild(css);
  setTimeout(() => {
    let element = document.getElementById("typewriter-greeting");
    let toRotate = element.getAttribute('data-type');
    let period = element.getAttribute('data-period');
    // Not actually the username, I'm just too lazy to refactor
    let innerElement = document.getElementById("dynamically-changing-username");
    if (toRotate) {
      new TxtType(innerElement, JSON.parse(toRotate), period);
    }
  }, 500);
}
</script>

<template>
  <div class="title">
    <h1 id="title-home">Hi, I'm <span id="username-title">alockinalock</span></h1>
    <h2 id="typewriter-greeting" data-period="2000" data-type='["make videos.", "develop games.", "program applications."]'>I <span id="dynamically-changing-username"></span></h2>
  </div>
  <!---->
  <div class="dots-container"></div>
  <!-- <div class="centerline" style="position:absolute;color:red;background-color:red;width:100%;height:1px;top:50%;"></div> -->

  <!--Temporary hint div because this website isnt done-->
  <div class="hint"><h5>Try scrolling down to see the rest of the website...</h5></div>

</template>

<style scoped>
.hint {
  width: 80%;
  position: absolute;
  top: 95%;
  left: 0;
  transform: translateX(50%)
}
.dots-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  --dot-bg: #242424;
  --dot-color: white;
  --dot-size: 2px;
  --dot-space: 50px;
	background:
		linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		var(--dot-color);
  /* 
  Background seems to act erratic during animation fade in
  Loop is not seamless
  */
  animation: dotFadeIn 1s both, continousDiagonalSouthEast 30s 0.25s linear infinite;
}
.title {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 5%;
  /*TODO: settled on 40% because 50% doesnt fucking CENTER.... WHY*/
  top: 50%;
  transform: translateY(-50%);

  width: 100%;
  padding: 0;
  margin: 0;

  animation: riseAndFadeIn 1s 0.25s both;
}
#title-home {
  margin-right: auto;
  margin-bottom: 0; 
  margin-top: 0;
}
/*
This element's text wraps really badly.
Might need to mess around with wrapping and whitespace.
*/
#title-home > #username-title {
  color: aqua;
}
#typewriter-greeting {
  white-space: pre-line;
  margin-top: 0;
  margin-right: auto;
}
:deep(#dynamically-changing-username){
  color:white;
}
@keyframes riseAndFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0px);}
}
@keyframes continousDiagonalSouthEast {
  to { background-position: 100% 100%;}
}
/*Seperate animation for seperate opacity value*/
@keyframes dotFadeIn {
  from {opacity: 0;}
  to {opacity: 0.3;}
}
</style>