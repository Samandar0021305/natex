<template>
  <div v-show="loading" class="loading">
    <p class="text-white text-6xl">
      <span class="letter" v-for="(letter, index) in title" :key="index">
        {{ letter }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "loading"],
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(8, 8, 12, 0.8);
  background-image: linear-gradient(
    160deg,
    rgba(8, 8, 12, 0.8) 0%,
    #45aae91b 100%
  );

  transition: opacity 0.5s ease-out;
  z-index: 100000;
}

.letter {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  font-family: "Montserrat";
  display: inline-block;
}

.letter.fade-in {
  opacity: 1;
}
</style>
