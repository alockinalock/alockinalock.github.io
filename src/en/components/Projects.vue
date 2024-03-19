<script setup="ts">

</script>

<template>
  <div class="gallery">
      <div class="gallery-wrapper" style="overflow: visible !important;">
      <div class="items-container">

        <!-- ok so the strategy is to have 2 divs and the img. so in short the img goes in one div which allows overflow and the div that contains this div with the img should stop overflow -->

        <div class="role">
          <a href="https://github.com/alockinalock/RustyTodoCLI" target="_blank">
            <div class="item">
              <div class="img">
                <img class="background" src="../assets/Rust_programming_language_black_logo.svg.png" style="overflow: hidden">
              </div>
              <div class="overlay"></div>
            </div>
          </a>
        </div>

        <div class="role">
          <a href="https://github.com/alockinalock/Personal-Website" target="_blank">
            <div class="item">
              <div class="img">
                <img class="background" src="../assets/Vue.js_Logo_2.svg.png" style="pointer-events: none; overflow: hidden">
              </div>
              <div class="overlay"></div>
            </div>
          </a>
        </div>

        <div class="item">
          
        </div>

        <div class="item">
          
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
@import  "./css/expandingSlider.css";
</style>