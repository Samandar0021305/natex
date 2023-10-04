<template>
  <div class="mx-auto">
    <section
      class="main-section flex  pb-[50px] flex-col justify-center align-middle relative overflow-hidden"
    >
      <AnimatedCustom />

      <div class="animate__fadeIn animate__animated header--boox">
        <nuxt-link to="#natex"
          ><img
            src="@/assets/images/main/go_back.svg"
            alt="go back"
            class="absolute left-20 top-10 go_back cursor-pointer"
        /></nuxt-link>
      </div>

      <div class="mx-auto header mb-16 animate__fadeIn animate__animated">
        <p class="header-name my-3">
          <span
              v-for="(char, index) in riders1"
              class="riders-title"
              :key="index"
              >{{ char }}</span
            >
        </p>
        <p class="header-marketing">
          <span
              v-for="(char, index) in riders2"
              class="riders-subtitle"
              :key="index"
              >{{ char }}</span
            >
        </p>
        <p class="header-info mt-2 second-subtitle">
          Are you a user of ride-hailing apps? Do you own and/or use crypto? By
          joining Natex you will:
        </p>
      </div>
      <main class="mx-auto flex justify-between w-[80%]  mb-8">
        <div class="content-wrapper flex flex-col items-center">
          <img src="@/assets/images/gif/1.gif" alt="car" class="w-[80px]" />
          <p>
            Access a seamless service of high quality card and drivers ready to
            service you.
          </p>
        </div>

        <div class="content-wrapper flex flex-col items-center">
          <img src="@/assets/images/gif/2.gif" alt="card" class="w-[80px]" />
          <p>
            Leverage the long-term growth of the Natex ecosystem by becoming a
            $NATX token owner and NFT investor - benefiting directly from the
            activities of other drivers and riders.
          </p>
        </div>

        <div class="content-wrapper flex flex-col items-center">
          <img src="@/assets/images/gif/3.gif" alt="medal" class="w-[80px]" />
          <p>
            Earn valuable rider rewards in the form of $NATX tokens every time
            you take a ride or refer Natex to a friend.
          </p>
        </div>
      </main>
      <img
        class="absolute right-[10%] top-[6%] menu_btn cursor-pointer"
        data-nav="_3dScaleRotate"
        src="@/assets/images/main/menu.svg"
        alt="menu"
      />
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      riders1: "FOR RIDERS".split(""),
      riders2: "Are you a Rider?".split(""),
    };
  },
  async mounted() {
    await this.$store.dispatch("handleSidebarMenu");
    gsap.from(".riders-title", {
      y: "100%",
      opacity: 0,
      duration: 2,
      stagger: 0.1,
      ease: "power2.out",
    });
    gsap.from(".riders-subtitle", {
      y: "100%",
      opacity: 0,
      delay: 1,
      duration: 1.8,
      stagger: 0.1,
      ease: "power1.out",
    });
    gsap.from(".second-subtitle", {
      y: -100,
      autoAlpha: 0,
      duration: 1.5,
      delay: 1.2,
    });

    gsap.fromTo(
      ".content-wrapper",
      {
        autoAlpha: 0,
        scale: 0.8,
        translateX:-100,
      },
      {
        autoAlpha: 1,
        scale: 1,
        translateX:0,
        duration: 1,
        delay: 1.5,
        stagger: 0.3,
      }
    );
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
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  font-family: "Feature Mono";

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
  width: 60%;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  /* Replace #F0F and #0FF with your desired colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Montserrat";
}

.ridersvg {
  position: absolute;
  bottom: 0%;
  height: unset;
}

.content-wrapper.animate {
  animation: zoom-in 1.5s;
}

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 992px) {
  main {
    display: flex;
    flex-direction: column;
  }
  .header {
    margin-top: 15%;
  }
  .content-wrapper {
    width: 70%;
    margin: 0 auto;

    margin-bottom: 8px;
  }
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
  .header {
    margin-top: 25%;
  }
  .menu_btn {
    top: 4%;
  }
  .go_back {
    left: 10%;
  }
}

@media (max-width: 568px) {
  .content-wrapper {
    margin-top: 10px;
    flex-direction: column;
    padding: 5px;
  }

  .menu_btn {
    top: 6%;
  }

  .header {
    margin-top: 25%;
  }
  .content-wrapper p {
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .header {
    margin-top: 35%;
  }
  .header--boox img{
    left: 40px !important;
    width: 35px;
    height: 35px;
    top: 3.3rem;
  }
}
</style>
