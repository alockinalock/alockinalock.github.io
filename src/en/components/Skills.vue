<script setup="ts">

</script>

<template>

    <div class="gallery">

      <div class="title">skills()</div>

      <div class="gallery-wrapper" style="overflow: visible !important;">
        <div class="items-container">

          <div class="role">
            <a href="https://www.rust-lang.org/" target="_blank">
              <div class="item">
                <div class="img">
                  <img class="background" src="../assets/Rust_programming_language_black_logo.svg.png" style="overflow: hidden">
                </div>
                <div class="overlay"></div>
              </div>
            </a>
          </div>

          <div class="role">
            <a href="https://vuejs.org/" target="_blank">
              <div class="item">
                <div class="img">
                  <img class="background" src="../assets/Vue.js_Logo_2.svg.png" style="pointer-events: none; overflow: hidden">
                </div>
                <div class="overlay"></div>
              </div>
            </a>
          </div>

          <div class="role">
            <a href="https://www.python.org/" target="_blank">
              <div class="item">
                <div class="img">
                  <img class="background" src="../assets/Python-logo-notext.svg.png" style="overflow: hidden">
                </div>
                <div class="overlay"></div>
              </div>
            </a>
          </div>

          <div class="role">
            <a href="https://www.java.com/en/" target="_blank">
              <div class="item">
                <div class="img">
                  <img class="background" src="../assets/795ebb5f4a470cd7242136237f61fc53.png" style="overflow: hidden">
                </div>
                <div class="overlay"></div>
              </div>
            </a>
          </div>

          <div class="role">
            <a href="https://clang.llvm.org/" target="_blank">
              <div class="item">
                <div class="img">
                  <img class="background" src="../assets/ISO_C++_Logo.svg.png" style="overflow: hidden">
                </div>
                <div class="overlay"></div>
              </div>
            </a>
          </div>

        </div>

    </div>
  </div>

</template>

<style scoped>
@import  "./css/expandingSlider.css";
.title {
  position: absolute;
  font-size: 27px;
  font-weight: 600;
  right: 0;
  top: 4rem;
  width: 90%;
}
</style>