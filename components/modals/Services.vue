<template>
  <div>

    <div
      class="menu animate__animated animate__fadeIn"
      :class="{ show: isDrawerOpen }"
      ref="menu"
    >
      <ul class="list-items-ul">

        <li class="flex justify-between w-[100%] list-items-li">
          <div class="mb-4 ">
            <p class="top-content">
             <span v-for="(c,l) in services1" :key="l" class="services1">{{ c }}</span>
            </p>
            <p class="bottom-content bottom-services2">
               <span v-for="(i,b) in services2" :key="b" class="services2">{{ i }}</span>
            </p>
          </div>
        </li>
        
        <div class="flex-card-container ">
          <div class="flex-card">
            <img src="@/assets/images/main/nft_services.svg" />
            <div class="w-[100%]">
              <div>
                <p class="top-content name-n text-center">CENTAUR</p>
                <p class="position-job">
                  An NFT representing 3 driver license keys, for diversification
                  of income.
                </p>
              </div>
            </div>
          </div>

          <div class="flex-card">
            <img src="@/assets/images/main/nft_services.svg" />
            <div class="w-[100%]">
              <div>
                <p class="top-content name-n text-center">CENTAUR</p>
                <p class="position-job">
                  An NFT representing 3 driver license keys, for diversification
                  of income.
                </p>
              </div>
            </div>
          </div>
          <div class="flex-card">
            <img src="@/assets/images/main/nft_services.svg" />
            <div class="w-[100%]">
              <div>
                <p class="top-content name-n text-center">CENTAUR</p>
                <p class="position-job">
                  An NFT representing 3 driver license keys, for diversification
                  of income.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="slider-card">
          <AnimatedSliderService :viewCount="1" :count="3">
          <swiper-slide slot="slider">
          
              <div class="flex-card">
            <img src="@/assets/images/main/nft_services.svg" />
            <div class="w-[100%] topCard">
              <div>
                <p class="top-content name-n text-center">CENTAUR</p>
                <p class="position-job">
                  An NFT representing 3 driver license keys, for diversification
                  of income.
                </p>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide slot="slider">
          <div class="flex-card">
            <img src="@/assets/images/main/nft_services.svg" />
            <div class="w-[100%] topCard">
              <div>
                <p class="top-content name-n text-center">CENTAUR</p>
                <p class="position-job">
                  An NFT representing 3 driver license keys, for diversification
                  of income.
                
                </p>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide slot="slider">
          <div class="flex-card">
            <img src="@/assets/images/main/nft_services.svg" />
            <div class="w-[100%] topCard">
              <div>
                <p class="top-content name-n text-center">CENTAUR</p>
                <p class="position-job">
                  An NFT representing 3 driver license keys, for diversification
                  of income.
                </p>
              </div>
            </div>
          </div>
          </swiper-slide>
          
        </AnimatedSliderService>
        </div>

        <button class="button-11 self-center">
             Load More
              <span class="text__first-bg-servise"></span>
            </button>
      </ul>
    </div>
  </div>
</template>

<script>
 import {gsap} from "gsap"
import {services1 , services2 } from "../../utils/ScrollEffect"
export default {
  props: ["isDrawerOpen"],
  watch:{
   $route(){
    if(this.$route.hash.includes("#services")){
     gsap.from(".flex-card",{
        y: '100%',
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out'
     })

      gsap.from(".services1",{
        y: '100%',
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
      })

      gsap.fromTo(".bottom-services2",
      {
        y:100,
        opacity:0
      },  {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
      });

      gsap.fromTo(".text__first-bg-servise",{scaleX:1},{scaleX:0,duration:2,delay:2})
    }}
  },
  data(){
    return {services1 , services2}
  }
};
</script>

<style scoped>
.slider-card{
  display: none;
}
.text__first-bg-servise{
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  transform-origin: left;
  transform: scaleX(0);
  background-color: #5fbff9;
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
  font-size: 24px;
  width: 70%;
  line-height: 37px;
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
  right: -104%; /* start offscreen */
  height: 100%;
  width: 100%;
  color: white;
  transition: transform 1s ease-in; /* animate when opening/closing */
  overflow-y: scroll; /* enable scrolling for menu container */
}

.button-11 {
  font-size: 16px;
  font-family: "Feature Mono";
  position: relative;
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
.topCard{
  margin-top: 20px !important;
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
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.list-items-li {
  font-size: 24px;
  cursor: pointer;
  text-align: justify;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.flex-card {
  flex: 0 1 calc(33.33% - 10px);
  margin-bottom: 10px;
  padding: 0px;
}

header {
  display: none;
}

@media (max-width: 1400px) {
  .bottom-content {
    font-size: 17px;
  }
  .list-items-ul {
    width: 70%;
  }
}

@media (max-width: 900px) {
  .sentences {
    width: 90%;
    margin: 0% auto;
    justify-content: center;
  }
  .bottom-content {
    font-size: 17px;
  }
  header {
    display: block;
    width: 100%;
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
  .flex-card-container {
    flex-direction: column;
    height: 500px;
    overflow: scroll;
    flex-wrap: nowrap;
    display: none !important;
  }top-content
  .top-content{
    margin: 0;
    padding: 0;
    display: none;
    /* font-size: 12px; */
  }
  .bottom-content{
    margin: 0 !important;
    padding: 0 !important;
    font-size: 12px !important;
    width: 100%;
    
    line-height: 10px;
    text-align: center;
    /* display: none; */
  }
  .list-items-li{
    padding: 0;
    margin: 0;
    text-align: center;
    margin-right: 20% !important;
  }
  .list-items-ul{
    margin: 0 !important;
    padding: 0 !important;
   
   padding: 20px !important;

  }
  .slider-card{
    display: block;
  }
  .flex-card{
    width: 100%;
    height: 350px;
    margin-left: -20px;
  }
  .flex-card img {
    width: 100%;
    margin: 0% auto;
    height: 250px !important;
    display: flex;
    object-fit: contain !important; 
  }
  .flex-card > div {
    width: 70%;
    margin: 0% auto;
  }
  .button-11{
    display: none;
  }
}

@media (max-width: 568px) {
  .sentences {
    width: 90%;
    margin: 0% auto;
  }
  .list-items-ul {
    display: flex;
    flex-direction: column;
  }
  .flex-card-container {
    width: 100%;
  }
  
  header {
    position: relative;
    top: -5%;
  }
}

@media (max-width: 443px) {
  .bottom-content {
    font-size: 20px;
  }
  
  .list-items-ul {
    width: 90%;
  }
  .button-11 {
    margin-top: 25px;
  }
  .bottom-content {
    font-size: 19px;
    line-height: 25px;
    width: 100%;
  }
}
</style>
