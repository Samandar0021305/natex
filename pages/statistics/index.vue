<template>
  <div class="mx-auto ">
    <section
      class="main-section pb-[50px] flex flex-col justify-center align-middle relative overflow-hidden"
    >
    <AnimatedCustom />
      <div class="animate__fadeIn animate__animated header--boox">
        <nuxt-link to="/"
          ><img
            src="@/assets/images/main/go_back.svg"
            alt="go back"
            class="absolute left-20 top-10 go_back cursor-pointer"
        /></nuxt-link>
      </div>
      <header class="mx-auto animate__fadeIn header animate__animated mb-4">
        <p class="header-name my-3">
          <span v-for="(char,index) in statistics1" class="statistics-title" :key="index">{{ char }}</span>
          
        </p>
        <p class="header-marketing">
          <span v-for="(char,index) in statistics2" class="statistics-subtitle" :key="index">{{ char }}</span>
          
        </p>
      </header>
      <main class="mx-auto w-[80%] flex justify-between flex-wrap">
        <div class="first w-[33%]">
          <div
            class="content-wrapper text-center flex justify-between"
          >
            <div
              class="left w-[100%] justify-center flex p-10 align-middle items-center"
            >
              <h3>TOKEN INFORMATION</h3>
            </div>
          </div>

          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[60%] justify-center flex p-10 align-middle items-center"
            >
              <span>Token name</span>
            </div>

            <div class="right text-center p-10 flex justify-center w-[40%]">
              <p>$NTX</p>
            </div>
          </div>

          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[60%] justify-center flex p-10 align-middle items-center"
            >
              <span>Blockchain</span>
            </div>

            <div class="right text-center p-10 flex justify-center w-[40%]">
              <p>Solana</p>
            </div>
          </div>
          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[60%] justify-center flex p-10 align-middle items-center"
            >
              <span>Total Supply</span>
            </div>

            <div class="right text-center p-10 flex justify-center w-[40%]">
              <p>200 000 000,00</p>
            </div>
          </div>
          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[60%] justify-center flex p-10 align-middle items-center"
            >
              <span>Hardcap</span>
            </div>

            <div class="right text-center p-10 flex justify-center w-[40%]">
              <p>$6 090 000,00</p>
            </div>
          </div>
        </div>
        <div class="second w-[33%]">
          <div
            class="content-wrapper text-center flex justify-between"
          >
            <div
              class="left w-[100%] justify-center flex p-10 align-middle items-center"
            >
              <h3>TOKEN ALLOCATION</h3>
            </div>
          </div>

          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[60%] justify-center flex p-10 align-middle items-center"
            >
              <span>Total Supply</span>
            </div>

            <div class="right text-center p-10 flex justify-center w-[40%]">
              <p>200 000 000</p>
            </div>
          </div>
          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[60%] justify-center flex p-10 align-middle flex-col"
            >
              <span class="mb-1">Capital/Seed Round 3%</span>
              <span class="mb-1">Marketing =</span>
              <span class="mb-1">Private sale 5%</span>
              <span class="mb-1">Public Sale =5,5%</span>
              <span class="mb-1">Development =9,5%</span>
              <span class="mb-1">Stake Rewards=20%</span>
              <span class="mb-1">Team & Advisors =16%</span>
              <span class="mb-1">Natex Treasure =35%</span>
              <span class="mb-1">Initial liquidity =1%</span>
            </div>

            <div
              class="right justify-center flex p-10 align-middle flex-col w-[40%]"
            >
              <p class="mb-1">6 000 000</p>
              <p class="mb-1">10 000 000</p>
              <p class="mb-1">10 000 000</p>
              <p class="mb-1">11 000 000</p>
              <p class="mb-1">19 000 000</p>
              <p class="mb-1">40 000 000</p>
              <p class="mb-1">32 000 000</p>
              <p class="mb-1">70 000 000</p>
              <p class="mb-1">2 000 000</p>
            </div>
          </div>
        </div>
        <div class="third w-[33%]">
          <div
            class="content-wrapper text-center flex justify-between"
          >
            <div
              class="left w-[100%] justify-center flex p-10 align-middle items-center"
            >
              <h3>TOKEN OFFERINGS</h3>
            </div>
          </div>

          <div
            class="content-wrapper flex justify-between"
          >
            <div
              class="left w-[100%] justify-center flex p-10 align-middle items-center"
            >
              <span style="font-size: 20px; line-height: 24px"
                >The token offering for $NTX is divided into 3 (three)
                phases:</span
              >
            </div>
          </div>

          <div
            class="content-wrapper flex justify-between"
          >
            <div class="left w-[100%] flex p-10 align-middle">
              <ul>
                <li>Capital/Seed Round</li>
                <li>Private Sale</li>
                <li>Public Sale</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <img
        class="absolute right-[10%] top-[3%] cursor-pointer menu-btn"
        data-nav="_3dScaleRotate"
        src="@/assets/images/main/menu.svg"
        alt="menu"
      />
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  data() {
    return {
      statistics1: "Statistics".split(""),
      statistics2: "Lorem Ipsum Dolllars".split(""),
    };
  },
  async mounted() {
    await this.$store.dispatch("handleSidebarMenu");
    gsap.from(".statistics-title",{
        y: '100%',
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      });
      gsap.from(".statistics-subtitle",{
        y: '100%',
        opacity: 0,
        delay:1,
        duration: 2,
        stagger: 0.1,
        ease: 'power1.out',
      });
      gsap.from(".first, .second, .third", {
        y:-150,
        x:-100,
        autoAlpha:0,
        duration:1.5,
        stagger:.4,
      })
  },
 
};
</script>

<style scoped>
main span,
main p {
  color: #c1ff72;
}

ul li {
  font-size: 20px;
  line-height: 40px;
  color: #c1ff72;
}

ul {
  list-style: circle;
}

.main-section {
  background-image: url("@/assets/images/main/bg.svg");
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden !important;
}

.content-wrapper {
  transition: 0.3s all ease;
  border: 1px solid transparent;
}
.left,
.right {
  transition: 0.3s all ease;
  border: 1px solid transparent;
  font-family: "Montserrat";
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

.left h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
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
}

.header-name {
  text-align: center;
  font-family: "Feature Mono";
  letter-spacing: 2px;
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

@media (max-width: 1550px) {
  main {
    width: 90%;
  }
  .header {
    margin: 0% !important;
    margin-top: 10% !important;
  }
}

@media (max-width: 1343px) {
  main {
    width: 95%;
  }
}

@media (max-width: 1250px) {
  main {
    width: 75%;
    flex-direction: column;
  }
  main > div {
    width: 100%;
    margin: 15px auto;
  }
}

@media (max-width: 992px) {
  .header {
    margin-top: 15% !important;
  }
}

@media (max-width: 768px) {
  .header {
    margin-top: 20% !important;
  }
}

@media (max-width: 568px) {
  .content-wrapper {
    margin-top: 10px;
    flex-direction: column;
  }
  .right,
  .left {
    width: 100%;
  }
  .left span {
    display: block;
    width: 100%;
    text-align: center;
  }
  .left {
    flex-direction: inherit;
  }
  .menu-btn {
    top: 2%;
  }
}

@media (max-width: 400px) {
  header.header {
    margin: 0 !important;
    margin-top: 30% !important;
   padding: 0 !important; 
  }
}
</style>
