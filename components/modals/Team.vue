<template>
  <div>
    <div class="overlay" :class="{ overlayShow: isDrawerOpen }" id="team"></div>

    <div
      class="menu animate__animated animate__fadeIn"
      ref="menu"
      :class="{ show: isDrawerOpen }"
    >
      <ul class="list-items-ul">
        <li class="flex justify-between w-[100%] list-items-li">
          <div class="content">
            <p class="top-content">
              <span v-for="(c, i) in team1" class="team-title" :key="i">{{
                c
              }}</span>
            </p>
            <p class="bottom-content">
              <span v-for="(c, i) in team2" class="team-subtitle" :key="i">{{
                c
              }}</span>
            </p>
          </div>
        </li>

        <template v-if="viewPort.desctop">
          <div>
            <div
              class="slider-hide"
              v-for="(item, index) in teamListDesctop"
              :key="index"
              :class="{
                prev: item.id == prev - 1,
                next: item.id == prev + 1,
                current: item.id == prev,
              }"
            >
              <div class="flex-card-container">
                <div
                  class="flex-card team-card"
                  v-for="el in item.list"
                  :key="el.id"
                >
                  <img :src="require(`@/assets/images/team/${el.image}`)" />
                  <div class="w-[100%]">
                    <div class="socials">
                      <img
                        src="@/assets/images/social_media/telegram_outline.svg"
                        alt="telegram"
                      />
                      <img
                        src="@/assets/images/social_media/discord_outline.svg"
                        alt="telegram"
                      />
                      <img
                        src="@/assets/images/social_media/linkedin_outline.svg"
                        alt="telegram"
                      />
                      <img
                        src="@/assets/images/social_media/instagram_outline.svg"
                        alt="telegram"
                      />
                    </div>
                    <div>
                      <p class="top-content name-n text-center">
                        {{ el.name }}
                      </p>
                      <p class="position-job">{{ el.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="viewPort.laptop">
          <div>
            <div
              class="slider-hide"
              v-for="(item, index) in teamListLaptop"
              :key="index"
              :class="{
                prev: item.id == prev - 1,
                next: item.id == prev + 1,
                current: item.id == prev,
              }"
            >
              <div class="flex-card-container">
                <div
                  class="flex-card team-card"
                  v-for="el in item.list"
                  :key="el.id"
                >
                  <img :src="require(`@/assets/images/team/${el.image}`)" />
                  <div class="w-[100%]">
                    <div class="socials">
                      <img
                        src="@/assets/images/social_media/telegram_outline.svg"
                        alt="telegram"
                      />
                      <img
                        src="@/assets/images/social_media/discord_outline.svg"
                        alt="telegram"
                      />
                      <img
                        src="@/assets/images/social_media/linkedin_outline.svg"
                        alt="telegram"
                      />
                      <img
                        src="@/assets/images/social_media/instagram_outline.svg"
                        alt="telegram"
                      />
                    </div>
                    <div>
                      <p class="top-content name-n text-center">
                        {{ el.name }}
                      </p>
                      <p class="position-job">{{ el.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="viewPort.mobile">
          <div class="flex-card-container">
            <div
              class="flex-card team-card slider-hide"
              v-for="item in teamList"
              :key="item.id"
              :class="{
                prev: item.id == prev - 1,
                next: item.id == prev + 1,
                current: item.id == prev,
              }"
            >
              <img :src="require(`@/assets/images/team/${item.image}`)" />
              <div class="w-[100%]">
                <div class="socials">
                  <img
                    src="@/assets/images/social_media/telegram_outline.svg"
                    alt="telegram"
                  />
                  <img
                    src="@/assets/images/social_media/discord_outline.svg"
                    alt="telegram"
                  />
                  <img
                    src="@/assets/images/social_media/linkedin_outline.svg"
                    alt="telegram"
                  />
                  <img
                    src="@/assets/images/social_media/instagram_outline.svg"
                    alt="telegram"
                  />
                </div>
                <div>
                  <p class="top-content name-n text-center">
                    {{ item.name }}
                  </p>
                  <p class="position-job">{{ item.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="flex justify-center items-center">
          <p @click="prevFunc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </p>
          <p style="margin-left: 20px" @click="nextFunc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { team1, team2 } from "../../utils/ScrollEffect";
export default {
  props: ["isDrawerOpen", "toggleDrawer"],
  watch: {
    $route() {
      if (this.$route.hash.includes("#team")) {
        gsap.fromTo(
          ".team-subtitle",
          {
            y: "100%",
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            delay: 1,
            duration: 1.8,
            stagger: 0.1,
            ease: "power1.out",
          }
        );
        gsap.from(".team-title", {
          y: "100%",
          autoAlpha: 0,
          duration: 2,
          stagger: 0.1,
          ease: "power2.out",
        });
        gsap.fromTo(
          ".team-card",
          {
            autoAlpha: 0,
            y: -100,
            x: -50,
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            stagger: 0.3,
          }
        );
      }
    },
  },
  data() {
    return {
      team1,
      team2,
      viewPort: {
        desctop: true,
        laptop: false,
        mobile: false,
      },
      prev: 1,
      teamListDesctop: [
        {
          id: 1,
          list: [
            {
              id: 1,
              image: "nursulton.svg",
              name: "Nursulton Abdukaimov",
              position: "CEO",
            },
            {
              id: 2,
              image: "toxir.svg",
              name: "Tokhir Jumanazarov",
              position: "CTO",
            },
            {
              id: 3,
              image: "abdulaziz.svg",
              name: "Abdulaziz Abdukodiriy",
              position: "NFT Creator",
            },
            {
              id: 4,
              image: "allanazar.svg",
              name: "Allanazar Rakhimov",
              position: "Header of PR",
            },
            {
              id: 5,
              image: "abdulaziz.svg",
              name: "Abdulaziz Abdukodiriy",
              position: "NFT Creator",
            },
            {
              id: 6,
              image: "allanazar.svg",
              name: "Allanazar Rakhimov",
              position: "Header of PR",
            },
          ],
        },
        {
          id: 2,
          list: [
            {
              id: 5,
              image: "abdulaziz.svg",
              name: "Abdulaziz Abdukodiriy",
              position: "NFT Creator",
            },
            {
              id: 6,
              image: "allanazar.svg",
              name: "Allanazar Rakhimov",
              position: "Header of PR",
            },
          ],
        },
      ],
      teamListLaptop: [
        {
          id: 1,
          list: [
            {
              id: 1,
              image: "nursulton.svg",
              name: "Nursulton Abdukaimov",
              position: "CEO",
            },
            {
              id: 2,
              image: "toxir.svg",
              name: "Tokhir Jumanazarov",
              position: "CTO",
            },
            {
              id: 3,
              image: "abdulaziz.svg",
              name: "Abdulaziz Abdukodiriy",
              position: "NFT Creator",
            },
            {
              id: 4,
              image: "allanazar.svg",
              name: "Allanazar Rakhimov",
              position: "Header of PR",
            },
          ],
        },
        {
          id: 2,
          list: [
            {
              id: 1,
              image: "nursulton.svg",
              name: "Nursulton Abdukaimov",
              position: "CEO",
            },
            {
              id: 2,
              image: "toxir.svg",
              name: "Tokhir Jumanazarov",
              position: "CTO",
            },
            {
              id: 3,
              image: "abdulaziz.svg",
              name: "Abdulaziz Abdukodiriy",
              position: "NFT Creator",
            },
            {
              id: 4,
              image: "allanazar.svg",
              name: "Allanazar Rakhimov",
              position: "Header of PR",
            },
          ],
        },
      ],
      teamList: [
        {
          id: 1,
          image: "nursulton.svg",
          name: "Nursulton Abdukaimov",
          position: "CEO",
        },
        {
          id: 2,
          image: "toxir.svg",
          name: "Tokhir Jumanazarov",
          position: "CTO",
        },
        {
          id: 3,
          image: "abdulaziz.svg",
          name: "Abdulaziz Abdukodiriy",
          position: "NFT Creator",
        },
        {
          id: 4,
          image: "allanazar.svg",
          name: "Allanazar Rakhimov",
          position: "Header of PR",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.onResize();
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      let size = window.innerWidth;
      this.viewPort = {
        desctop: false,
        laptop: false,
        mobile: false,
      };
      if (size > 992) {
        this.viewPort.desctop = true;
      } else if (size <= 992 && size > 768) {
        this.viewPort.laptop = true;
      } else {
        this.viewPort.mobile = true;
      }
    },
    prevFunc() {
      let list = [];

      if (this.viewPort.mobile) {
        list = this.teamList;
      } else if (this.viewPort.laptop) {
        list = this.teamListLaptop;
      } else {
        list = this.teamListDesctop;
      }

      if (this.prev === 1) {
        this.prev = list.length;
      } else if (this.prev > 1) {
        this.prev = this.prev - 1;
      }
    },
    nextFunc() {
      let list = [];

      if (this.viewPort.mobile) {
        list = this.teamList;
      } else if (this.viewPort.laptop) {
        list = this.teamListLaptop;
      } else {
        list = this.teamListDesctop;
      }

      if (this.prev === list.length) {
        this.prev = 1;
      } else {
        this.prev += 1;
      }
    },
  },
};
</script>

<style scoped>
svg {
  font-size: 30px;
}
svg path {
  fill: white;
}

.slider-hide {
  display: none;
}
.slider-hide.current {
  display: flex;
  animation: anime 0.5s ease-in-out;
}
@keyframes anime {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.top-content {
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

.bottom-content {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 550;
  font-size: 26px;
  line-height: 44px;
}

.overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: 0%;
  left: 0%;
  transition: 0.3s ease-in;
}

.overlayShow {
  background-color: transparent; /* semi-transparent white */
  /* backdrop-filter: blur(10px); */
  z-index: 101;
}

.menu {
  position: absolute;
  top: 0;
  right: -100%; /* start offscreen */
  height: 100vh;
  width: 100%;
  color: white;
  transition: transform 1s ease-in; /* animate when opening/closing */
  overflow-y: scroll; /* enable scrolling for menu container */
}

.socials {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(13.5px);
  width: 85%;
  padding: 10px;
  margin: 0 auto;
  position: relative;
  top: -30px;
  display: flex;
  justify-content: space-around;
}
.button-11 {
  font-size: 16px;
  font-family: "Feature Mono";
  padding: 9px 38px;
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

.disableScroll {
  overflow: hidden;
}

.name-n {
  font-size: 15px !important;
  position: relative;
  top: -15px;
  font-family: "Feature Mono";
}

.menu.show {
  transform: translateX(-100%);
  z-index: 101; /* slide in from the right */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.position-job {
  color: white;
  font-size: 15px;
  font-family: "Montserrat";
  text-align: center;
  position: relative;
  top: -10px;
}

.list-items-ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 800px;
  width: 70%;
  justify-content: center;
  margin-top: 60px;
}

.list-items-li {
  font-size: 24px;
  cursor: pointer;
  width: 100%;
  text-align: justify;
  margin-bottom: 15px;
}

.list-items-li > strong {
  font-size: 17px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
}

.flex-card-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.flex-card {
  margin-bottom: 10px;
  padding: 0px;
}

.flex-card img {
  width: 100%;
}

.socials img {
  width: 30px;
}

@media (max-width: 1506px) {
  .flex-card {
    margin-bottom: 10px;
    padding: 0px;
  }
}

@media (max-width: 1000px) {
  .sentences {
    width: 90%;
    margin: 0% auto;
  }
  .scroller_img {
    right: 2%;
  }
}

header {
  display: none;
}

@media (max-width: 1300px) {
  .list-items-ul {
    margin-left: auto;
    margin-right: 72px;
  }
}

@media (max-width: 992px) {
  .list-items-li {
    width: 95%;
  }
  .bottom-content {
    font-size: 17px;
  }
  .flex-card-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .flex-card {
    margin-bottom: 10px;
    padding: 0px;
    width: 80%;
  }
  .flex-card-container {
    height: 500px;
    overflow: scroll;
  }
  header {
    display: block;
    width: 100%;
  }

  .flex-card-container {
    height: 700px;
  }
  nav {
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
  .toggleElement {
    display: none;
  }
}

@media (max-width: 768px) {
  .list-items-ul {
    margin: 0;
  }
  .flex-card-container {
    grid-template-columns: repeat(1, 1fr);
    height: auto !important;
  }
  .flex-card {
    margin: 0 auto;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
  .slider-hide.current{
    display: block;
  }
}

@media (max-width: 678px) {
  .menu {
    width: 90%;
  }
  .menu ul {
    width: 70%;
    margin-top: 90px;
  }
  .flex-card {
    width: 100%;
  }
  .flex-card > img {
    margin: 0 auto;
  }
  .flex-card img {
    width: 100%;
  }
  .sentences {
    width: 90%;
    margin: 0% auto;
  }
  .socials {
    width: 100%;
  }
  .socials img {
    width: 45px;
  }
}

@media (max-width: 463px) {
  .bottom-content {
    font-size: 20px;
  }
}
</style>
