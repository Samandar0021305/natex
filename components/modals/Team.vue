<template>
  <div>
    <div class="overlay" :class="{ overlayShow: isDrawerOpen }" id="team"></div>

    <div
      class="menu animate__animated animate__fadeIn"
      :class="{ show: isDrawerOpen }"
      ref="menu"
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
        <AnimatedSlider>
          <template v-if="viewPort.desctop">
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/nursulton.svg" />
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
                        Nursulton Abdukaimov
                      </p>
                      <p class="position-job">CEO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/toxir.svg" />
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
                        Tokhir Jumanazarov
                      </p>
                      <p class="position-job">CTO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/abdulaziz.svg" />
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
                        Abdulaziz Abdukodiriy
                      </p>
                      <p class="position-job">NFT Creator</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/allanazar.svg" />
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
                        Allanazar Rakhimov
                      </p>
                      <p class="position-job">Header of PR</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/ekaterina.svg" />
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
                        Ekaterina Selionova
                      </p>
                      <p class="position-job">Chief Branding Specialist</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/jamshid.svg" />
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
                        Jamshid Vakhabov
                      </p>
                      <p class="position-job">NFT Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/nursulton.svg" />
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
                        Nursulton Abdukaimov
                      </p>
                      <p class="position-job">CEO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/toxir.svg" />
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
                        Tokhir Jumanazarov
                      </p>
                      <p class="position-job">CTO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/abdulaziz.svg" />
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
                        Abdulaziz Abdukodiriy
                      </p>
                      <p class="position-job">NFT Creator</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/allanazar.svg" />
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
                        Allanazar Rakhimov
                      </p>
                      <p class="position-job">Header of PR</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/ekaterina.svg" />
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
                        Ekaterina Selionova
                      </p>
                      <p class="position-job">Chief Branding Specialist</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/jamshid.svg" />
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
                        Jamshid Vakhabov
                      </p>
                      <p class="position-job">NFT Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>

          <template v-else-if="viewPort.laptop">
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/nursulton.svg" />
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
                        Nursulton Abdukaimov
                      </p>
                      <p class="position-job">CEO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/toxir.svg" />
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
                        Tokhir Jumanazarov
                      </p>
                      <p class="position-job">CTO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/abdulaziz.svg" />
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
                        Abdulaziz Abdukodiriy
                      </p>
                      <p class="position-job">NFT Creator</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/allanazar.svg" />
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
                        Allanazar Rakhimov
                      </p>
                      <p class="position-job">Header of PR</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/nursulton.svg" />
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
                        Nursulton Abdukaimov
                      </p>
                      <p class="position-job">CEO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/toxir.svg" />
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
                        Tokhir Jumanazarov
                      </p>
                      <p class="position-job">CTO</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/abdulaziz.svg" />
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
                        Abdulaziz Abdukodiriy
                      </p>
                      <p class="position-job">NFT Creator</p>
                    </div>
                  </div>
                </div>
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/allanazar.svg" />
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
                        Allanazar Rakhimov
                      </p>
                      <p class="position-job">Header of PR</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide> -->
          </template>

          <template v-else-if="viewPort.mobile">
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/nursulton.svg" />
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
                        Nursulton Abdukaimov
                      </p>
                      <p class="position-job">CEO</p>
                    </div>
                  </div>
                </div>
              </div></swiper-slide
            >
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/toxir.svg" />
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
                        Tokhir Jumanazarov
                      </p>
                      <p class="position-job">CTO</p>
                    </div>
                  </div>
                </div>
              </div></swiper-slide
            >
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/abdulaziz.svg" />
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
                        Abdulaziz Abdukodiriy
                      </p>
                      <p class="position-job">NFT Creator</p>
                    </div>
                  </div>
                </div>
              </div></swiper-slide
            >
            <swiper-slide slot="slider">
              <div class="flex-card-container">
                <div class="flex-card team-card">
                  <img src="@/assets/images/team/allanazar.svg" />
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
                        Allanazar Rakhimov
                      </p>
                      <p class="position-job">Header of PR</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>
        </AnimatedSlider>
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
        gsap.from(".team-title", {
          y: "100%",
          opacity: 0,
          duration: 2,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
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
  },
};
</script>

<style scoped>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.flex-card {
  flex: 0 1 calc(33.33% - 10px);
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
  .flex-card {
    flex: 0 1 calc(50% - 10px);
    margin-bottom: 10px;
    padding: 0px;
    width: 45%;
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
    height: auto !important;
  }
  .flex-card {
    flex: 0 1 calc(80% - 10px);
    margin: 0 auto;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
}

@media (max-width: 678px) {
  .menu {
    width: 90%;
  }
  .menu ul {
    width: 70%;
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
