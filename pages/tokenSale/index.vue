<template>
  <div class="token_sale_wrapper">
    <div class="animate__fadeIn animate__animated top-navbar">
      <nuxt-link to="/"
      ><img
          src="@/assets/images/main/go_back.svg"
          alt="go back"
          class="go_back cursor-pointer"
          /></nuxt-link>
          <img
          class="cursor-pointer menu-btn"
          data-nav="_3dScaleRotate"
          src="@/assets/images/main/menu.svg"
          alt="menu"
          />
        </div>
        <section
        class="main-section flex flex-col justify-center align-middle relative overflow-hidden"
        >
        <AnimatedCustom />

      <div class="mx-auto header mb-16 animate__fadeIn animate__animated">
        <p class="header-name my-3">
          <span v-for="(char,index) in tokensale1" class="tokensale-title" :key="index">{{ char }}</span>
          
        </p>
        <p class="header-marketing">
          <span v-for="(char,index) in tokensale2" class="tokensale-subtitle" :key="index">{{ char }}</span>

        </p>
      </div>
      <main class="mx-auto chart-box w-[80%]">
        <ChartDonut />
      </main>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      tokensale1: "TOKEN SALE".split(""),
      tokensale2: "Join the $NATX token sale today & become a key players in the future of ride-hailing".split(""),
    }
  },
  async mounted() {
    await this.$store.dispatch("handleSidebarMenu");

    gsap.from(".tokensale-title",{
        y: '100%',
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      });
      gsap.from(".tokensale-subtitle",{
        y: '100%',
        opacity: 0,
        delay:1,
        duration: 2,
        stagger: 0.1,
        ease: 'power1.out',
      });
      gsap.from(".highcharts-series-group", {
        scale:0,
        rotate:120,
        autoAlpha:0,
        durtion:1.5,
        delay:1,
      })
      gsap.from(".highcharts-legend-item", {
        autoAlpha:0,
        y:-50,
        // duration:1.5,
        stagger:.1,
        delay:1.5,
      })
  },
};
</script>


<style scoped>
.token_sale_wrapper {
  background-image: url("@/assets/images/main/bg.svg");
  background-size: cover;
  min-height: 100vh;
}
.main-section {
  min-height: 100vh;
  width: 100vw;
}

.top-navbar {
  margin: 0px auto;
  padding-top: 20px;
  justify-self: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  justify-self: end;
}

.content-wrapper {
  transition: 0.3s all ease;
  border: 1px solid transparent;
  padding: 32px 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  width: 32%;
}

.content-wrapper p {
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  /* or 160% */

  text-align: center;
}

.header-name {
  text-align: center;
  font-family: monospace;
  letter-spacing: 2px;
  font-family: "Feature Mono";
  font-style: normal;
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
  width: 60%;
  margin: 0 auto;
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

.ridersvg {
  position: absolute;
  bottom: 0%;
  height: unset;
}

@media (max-width: 768px) {
  main {
    display: flex;
    flex-direction: column;
  }
  .content-wrapper {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 8px;
  }
}

@media (max-width: 568px) {
  .chart-box{
    transform: scale(0.6) !important;
    margin-top: -100px !important;
  }
  .content-wrapper {
    margin-top: 10px;
    flex-direction: column;
  }

  .header-marketing {
    width: 75%;
  }

  .header {
    margin-top: 20px;
  }
}
</style>
