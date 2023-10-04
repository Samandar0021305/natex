
<template>
  <div>
      <div
      class="menu"
      :class="{ show: isDrawerOpen }"
      ref="menu"
      
    >
      <ul class="list-items-ul">
        <li class="flex justify-between list-items-li">
          <div class="">
            <p class="top-content">
              <span v-for="(c,val) in contacts1" class="contacts1" :key="val">{{ c }}</span>
            </p>
            <p class="bottom-content bottom-contacts2">
               <span v-for="(i,n) in contacts2" class="contacts2" :key="n">{{ i }}</span>
            </p>
          </div>
        </li>
        <li class="new-li">
          <span  class="footer--item">
            <p>E-mail</p>
            <strong>info@natex.io</strong>
          </span>
        </li>
        <li class="new-li">
          <span class="footer--item">
            <p>Address</p>
            <strong>Tashkent,Uzbekistan</strong>
          </span>
        </li>
        <li class="new-li">
          <span class="footer--item">
           <p>Social Media</p>
           <div class="social_images">
            <img
              class="first-img"
              src="@/assets/images/social_media/telegram.svg"
              alt="telegram"
            />
            <img src="@/assets/images/social_media/call.svg" alt="call" />
            <img
              src="@/assets/images/social_media/instagram.svg"
              alt="instagram"
            />
            <img
              src="@/assets/images/social_media/internet.svg"
              alt="internet"
            />
            <img
              src="@/assets/images/social_media/linkedn.svg"
              alt="linkedin"
            />
          </div>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap"
import {contacts1,contacts2} from "../../utils/ScrollEffect"
export default {
  props: ["isDrawerOpen"],
  watch:{
    $route(){
     if(this.$route.hash.includes("#contacts")){
      gsap.from(".contacts1",{
        y: '100%',
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      })
      } 
      gsap.fromTo(".bottom-contacts2",
      {
        y:100,
        opacity:0
      },  {
        y: 0,
        delay:1,
        opacity: 1,
        duration: 3,
        stagger: 0.3,
      }
      );
 
      const tl = gsap.timeline();
      const footerItem = document.querySelectorAll(".footer--item");
      const newLi = document.querySelectorAll(".new-li");
      tl.fromTo(
        footerItem,
          {
            y: "-100px",
            opacity: 0,
          },
          {
            y: "0px",
            opacity: 1,
            ease: "linear",
            stagger: 0.3,
          }
        );
        gsap.from(newLi, {
          delay: 2.4,
          stagger: 0.3
        });

    }
  },
  data(){
    return {contacts1 , contacts2}
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
  right: -100%; /* start offscreen */
  height: 100vh;
  width: 100%;
  color: white;
  transition: transform 1s ease-in; /* animate when opening/closing */
  overflow-y: scroll; /* enable scrolling for menu container */
  padding-top: 130px;
  display: flex;
  padding-left: 70px;
  
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

.list-items-ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* justify-content: center; */
}

.list-items-li {
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  width: 100% !important;
  text-align: justify;
}

.menu li {
  font-size: 24px;
  padding: 10px;
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
  width: 70%;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
}

.button-11 {
  font-size: 16px;
  padding: 9px 38px;
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

.new-li  p {
  color: rgba(129, 129, 130, 1);
  font-size: 14px;
}

.new-li  div {
  margin-top: 5px;
  display: flex;
}

.new-li  div  img {
  margin: 0 5px;
  width: 30px;
}

.first-img {
  margin-left: 0px !important;
}

header {
  display: none;
}

.toggleElement {
  display: block;
}

.new-li p {
  font-family: "Feature Mono";
}

.new-li strong {
  font-family: "Space Grotesk";
}

@media (max-width: 1024px) {
  .sentences {
    width: 90%;
    margin: 0% auto;
  }
  header {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  nav {
    width: 90%;
    margin: 0 auto;
  }
  .toggleElement {
    display: none;
  }
}

@media (max-width: 900px) {
  .menu li {
    width: 95%;
  }
}

@media (max-width: 678px) {
  .menu {
    width: 76%;
    right: -100%;
    margin: 0;
  }
  .menu.show{
    margin-top: -50%;
  }
  .bottom-content{
    line-height: 28px;
    font-size: 20px;
  }
  .top-content{
    font-size: 18px;
  }
  .footer--item strong{
    font-size: 18px;
  }
}

@media (max-width: 568px) {
  .sentences {
    width: 90%;
    margin: 0% auto;
  }
  .menu.show{
    /* margin-top: -80%; */
  }
}

@media (max-width: 472px) {
  .menu{
    padding-top: 0px !important;
  }
  .menu ul{
    margin-top: -30px !important;
  }
  .bottom-content {
    font-size: 20px;
    width: 90%;
    line-height: 24px;
    margin-top: 5px;
   
  }
}

@media  (max-width:350px) {
  
  /*  */
}
</style>
