<template>
  <div>
    <div id="pagepiling">
      <div class="section section1" id="section1">
        <Main />
      </div>
      <div class="section" id="section2" v-show="$route.hash.includes(`about_us`)">
        <MainAboutUs />
      </div>
      <div class="section" id="section3" v-show="$route.hash.includes(`features`)">
        <MainFeatures />
      </div>
      <div class="section" id="section4" v-show="$route.hash.includes(`team`)">
        <MainTeam />
      </div>
      <div class="section" id="section5" v-show="$route.hash.includes(`services`)">
        <MainServices />
      </div>
      <div class="section" id="section6" v-show="$route.hash.includes(`drivers`)">
        <MainDrivers />
      </div>
      <div class="section" id="section7" v-show="$route.hash.includes(`contacts`)">
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
