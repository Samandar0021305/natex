<template>
  <div class="mx-auto ">
    <section
      class="main-section pb-[50px] flex flex-col justify-center align-middle relative overflow-hidden"
    >
    <AnimatedCustom /> 
    <div class="animate__fadeIn animate__animated header--boox" >
        <span @click="goToPrev()"
          ><img
            src="@/assets/images/main/go_back.svg"
            alt="go back"
            class="absolute left-20 top-10 go_back cursor-pointer"
        /></span>
      </div>
      <header class="mx-auto animate__fadeIn animate__animated mb-4">
        <p class="header-name my-3">
          <span v-for="(c,l) in roadMap1" class="roadmap-title" :key="l">{{ c }}</span>
          
        </p>
        <p class="header-marketing">
          <span v-for="(c,l) in roadMap2" class="roadmap-subtitle" :key="l">{{ c }}</span>
          
        </p>
      </header>
      <main
        class="mx-auto w-[90%] max-w-[900px] flex items-center justify-center align-middle"
      >
        <div>
          <img src="@/assets/images/main/road.svg" alt="road svg" />
        </div>
      </main>
    </section>
    <img
      class="absolute right-[10%] top-[6%] cursor-pointer"
      data-nav="_3dScaleRotate"
      src="@/assets/images/main/menu.svg"
      alt="menu"
    />
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      roadMap1: "NATEX".split(""),
      roadMap2: "ROADMAP".split(""),
    }
  },
  methods:{
    goToPrev(){
      this.$router.go(-1)
    }
  }, 
  async mounted() {
    await this.$store.dispatch("handleSidebarMenu");

    gsap.from(".roadmap-title",{
        y: '100%',
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      });
      gsap.from(".roadmap-subtitle",{
        y: '100%',
        opacity: 0,
        delay:1,
        duration: 2,
        stagger: 0.1,
        ease: 'power1.out',
      });
      gsap.from("main img", {
        translateY:-100,
        autoAlpha: 0,
        duration:1.5,
      })
  },
};
</script>

<style scoped>
.main-section {
  background-image: url("@/assets/images/main/bg.svg");
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.content-wrapper {
  transition: 0.3s all ease;
  border: 1px solid transparent;
}
.left,
.right {
  transition: 0.3s all ease;
  border: 1px solid transparent;
}
.content-wrapper:hover .left,
.content-wrapper:hover .right {
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}
main img{
  transform: scale(1.1);
}
.header-name {
  text-align: center;
  font-family: monospace;
  letter-spacing: 2px;
  font-style: normal;
  font-family: "Feature Mono";

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(180deg, #00d1ff 0%, #64fd93 100%);
  /* Replace #F0F and #0FF with your desired colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-marketing {
  text-align: center;
  font-size: 24px;
  font-family: "Feature Mono";
}

.header-info {
  text-align: center;
  font-size: 14px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  /* Replace #F0F and #0FF with your desired colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.left {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
}

.right {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  main {
    width: 95%;
  }
  main img{
    transform: scale(1.1);
  }
}

@media (max-width: 568px) {
  .content-wrapper {
    margin-top: 10px;
    flex-direction: column;
  }
  .right,
  .left {
    width: 96%;
  }
  .left span {
    display: block;
    width: 100%;
    text-align: center;
  }
  .left {
    flex-direction: inherit;
  }

  header {
    /* margin-top: 10%; */
  }

}

@media screen and (max-width:400px) {
  .header--boox img{
    left: 40px !important;
    width: 35px;
    height: 35px;
    top: 2.3rem;
  }
}
</style>
