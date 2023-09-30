<template>
  <div>
    <div id="pagepiling">
      <div class="section section1" id="section1">
        <Main />
      </div>
      <div class="section" id="section2">
        <MainAboutUs />
      </div>
      <div class="section" id="section3">
        <MainFeatures />
      </div>
      <div class="section" id="section4">
        <MainTeam />
      </div>
      <div class="section" id="section5">
        <MainServices />
      </div>
      <div class="section" id="section6">
        <MainDrivers />
      </div>
      <div class="section" id="section7">
        <MainContacts />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollEffect from "~/utils/ScrollEffect.js";
export default {
  mounted() {
    ScrollEffect();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
canvas{
  display: none !important;
}
body {
  overflow-x: hidden;
}

.main-section  {
  background-color: transparent !important;
}

.section {
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
  background-color: black !important;
}

.section.active {
  opacity: 1;
}
.section1 {
  transition: all 0.8s ease-in-out !important;
}

.faded_effect {
  transition: opacity 2.5s ease;
}

.faded_effect_timeline {
  transition: opacity 2.5s ease !important;
}

.dynamic_fade_start {
  animation-delay: .5s;
  opacity: 1 !important;
}

.dynamic_fade_end {
  opacity: 0 !important;
}
</style>
