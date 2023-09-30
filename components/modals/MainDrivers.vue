<template>
  <div>
    <div
      class="menu"
      :class="{ show: isDrawerOpen }"
      ref="menu"
      @click.stop="toggleDrawer"
    >
      <ul class="list-items-ul">
        <li class="flex justify-between top-li">
          <div>
            <p class="top-content">
              <span v-for="(c,l) in drivers1" class="chars-driw" :key="l">{{ c }}</span>
            </p>
            <p class="bottom-content">
              <span v-for="(i,b) in drivers2" class="drivers_chars" :key="b">{{ i }}</span>
            </p>
          </div>
        </li>
        <li class="li-color">
          <img src="@/assets/images/gif/1.gif" class="w-[60px]" alt="medal" />
          <p class="font-light">
            Access a seamless service of high quality card and drivers ready to
            service you.
          </p>
          
        </li>
        <li class="li-color">
          <img src="@/assets/images/gif/2.gif" class="w-[60px]" alt="medal" />
          <p class="font-light">
            Leverage the long-term growth of the Natex ecosystem by becoming a
            $NATX token owner and NFT investor - benefiting directly from the
            activities of other drivers and riders.
          </p>
        </li>
        <li class="li-color">
          <img src="@/assets/images/gif/3.gif" class="w-[60px]" alt="medal" />
          <p class="font-light">
            Earn valuable rider rewards in the form of $NATX tokens every time
            you take a ride or refer Natex to a friend.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import {drivers1 , drivers2} from "../../utils/ScrollEffect"
export default {
  props: ["isDrawerOpen", "toggleDrawer"],
  watch:{
    $route(){
      if(this.$route.hash.includes("#drivers")){
        gsap.from(".chars-driw",{
        y: '100%',
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      });
      gsap.from(".drivers_chars",{
        y: '100%',
        opacity: 0,
        delay:1,
        duration: 2,
        stagger: 0.1,
        ease: 'power1.out',
      });
      gsap.fromTo(".li-color",{opacity:0,y:"50vh"},{y:0,opacity:1,duration:2,stagger:0.3})


    }}
  },
  data(){
    return {
      drivers1,
      drivers2
    }
  }
};


</script>

<style scoped>
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
  right: -105%; /* start offscreen */
  height: 100vh;
  width: 100%;
  color: white;
  transition: transform 1s ease-in; /* animate when opening/closing */
  overflow-y: scroll; /* enable scrolling for menu container */
}

.disableScroll {
  overflow: hidden;
}
.menu.show {
  transform: translateX(-100%);
  z-index: 101; /* slide in from the right */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}

.menu li {
  font-size: 24px;
  padding: 25px 35px;
  cursor: pointer;
  width: 70%;
  text-align: justify;
}

li > strong {
  font-size: 17px;
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

.li-color {
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  font-size: 14px;
  border: 1px solid;
  position: relative;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
  margin-bottom: 15px;
  width: 80%;
}


.li-color p {
  font-size: 14px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
}

header {
  display: none;
}

.top-li {
  padding: 0% !important;
  margin: 0% !important;
  margin-bottom: 15px !important;
}

@media (max-width: 900px) {
  .sentences {
    width: 90%;
    margin: 0% auto;
  }
  .menu li {
    width: 95%;
  }
}

@media (max-width: 900px) {
  header {
    display: block;
    margin: 0 auto;
    position: relative;
    top: 5%;
    width: 95%;
  }
  .toggleElement {
    display: none;
  }
  .top-li {
    margin-bottom: 10% !important;
  }
}

@media (max-width: 568px) {
  .bottom-content {
    font-size: 17px;
  }
  .menu li{
    width: 90%;
    margin-left: -30px;
    padding: 0 !important;
  }
  .menu .li-color p{
    font-size: 12px;
  }
  .menu .li-color{
    padding: 5px 10px !important;
  }
  .menu{
    padding-top: 20px;
  }
}
@media (max-width: 422px) {
  .bottom-content {
    font-size: 20px;
  }
  .menu ul{
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
}
@media (max-width: 355px) {
  header {
    position: static;
  }
}
</style>
