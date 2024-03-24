<script setup="ts">
import _ from "lodash";
import { onMounted } from 'vue';

onMounted(() => {
  const fElements = document.getElementsByClassName("feature-item");

  _.forEach(fElements, (element, index) => {
    element.addEventListener('mouseenter', () => hover(fElements, index));
  });
});

function hover(elementsArray, index) {

  let prevActiveItem = document.querySelector(".feature-item.active");
  let activeItem = elementsArray[index];

  if (prevActiveItem) {
    prevActiveItem.classList.remove("active");
  }
  activeItem.classList.add("active");

  syncProgressBar(index);
}

function syncProgressBar(index) {
  let progressBar = document.getElementsByClassName("role-progress-active");
  switch(index) {
    case 0:
      progressBar[0].style.left = "0%";
      break;
    case 1:
      progressBar[0].style.left = "25%";
      break;
    case 2:
      progressBar[0].style.left = "50%";
      break;
    case 3:
      progressBar[0].style.left = "75%";
      break;
  }
}

</script>

<template>
  <div class="feature">

    <div class="page-title">featured.projects()</div>

    <div class="feature-content" style="bottom: 0px;">

      <div class="feature-item active" style="margin-bottom: 0px;">
        <div class="feature-modal">
          <img src="../assets/10.png">
          <div class="feature-text-box">
            <a class = "feature-link" href="https://github.com/alockinalock/RustyTodoCLI" target="_blank" style="text-decoration: none;">
              <div class="text-1">RustyTodoCLI</div>
              <img class="feature-link-image" src="../assets/link.png">
            </a>
            <div class="text-2">A simple todo planner following CRUD principles</div>
          </div>
        </div>
      </div>

      <div class="feature-item" style="margin-bottom: 0px;">
        <div class="feature-modal">
          <img src="../assets/2.png">
          <div class="feature-text-box">
            <a class = "feature-link" href="https://github.com/alockinalock/Personal-Website" target="_blank" style="text-decoration: none;">
              <div class="text-1">Personal Website</div>
              <img class="feature-link-image" src="../assets/link.png">
            </a>
            <div class="text-2">The current website you're on, made with Vue.js and more</div>
          </div>
        </div>
      </div>

      <div class="feature-item" style="margin-bottom: 0px;">
        <div class="feature-modal">
          <img src="../assets/11.png">
          <div class="feature-text-box">
            <a class = "feature-link" href="https://github.com/alockinalock/ChaosBot" target="_blank" style="text-decoration: none;">
              <div class="text-1">ChaosBot</div>
              <img class="feature-link-image" src="../assets/link.png">
            </a>
            <div class="text-2">A discord bot intended to create chaos through randomization of commands</div>
          </div>
        </div>
      </div>

      <div class="feature-item" style="margin-bottom: 0px;">
        <div class="feature-modal">
          <img src="../assets/8.png">
          <div class="feature-text-box">
            <a class = "feature-link" href="https://github.com/alockinalock/CheckCards" target="_blank" style="text-decoration: none;">
              <div class="text-1">CheckCards</div>
              <img class="feature-link-image" src="../assets/link.png">
            </a>
            <div class="text-2">Checkers with a hint of deckbuilding</div>
          </div>
        </div>
      </div>

      <div class="feature-progress-box">
        <div class="role-progress-active" style="width: 25%; left: 0%;"></div>
      </div>

    </div>

  </div>
</template>

<style scoped>
@import "./css/projects.css";

.feature .page-title {
  position: absolute;
  font-size: 1.7179rem;
  right: 6.85155rem;
  left: 12.957rem;
  top: 4.2615rem;
  border-bottom: solid 1px #6a6a6a;
}
</style>