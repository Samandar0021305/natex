<template>
  <div>
    <div class="menu" :class="{ show: isDrawerOpen }" ref="menu">
      <ul class="list-items-ul">
        <li class="flex justify-between list-items-li">
          <div>
            <p class="top-content">
              <span v-for="(c, i) in srt1" class="chars-about" :key="i">{{ c }}</span>
            </p>
            <p class="bottom-content">
              <span v-for="(b, l) in str2" class="about-bottom" :key="l">{{ b }}</span>
            </p>
          </div>
        </li>

        <li class="text-bar-list">
          <p class="font-light p_info text-blur">
            <span class="p-info-bar"
              >Ride where you want, when you want, how you want. Natex is made
              to bridge the boom in crypto use with the increasing popularity of
              ride-hailing. Our app unlocks endless ride-hailing opportunities
              for the developing world – where 2 billion people remain unbanked
              but where crypto ownership, and demand for rides, is rising
              fast.</span
            >
          </p>
        </li>
        <li class="text-bar-list">
          <p class="font-light p_info text-blur">
            <span class="p-info-bar"
              >Ride where you want, when you want, how you want. Natex is made
              to bridge the boom in crypto use with the increasing popularity of
              ride-hailing. Our app unlocks endless ride-hailing opportunities
              for the developing world – where 2 billion people remain unbanked
              but where crypto ownership, and demand for rides, is rising
              fast.</span
            >
          </p>
        </li>
        <li class="list-items-li">
          <button class="contact_us_btn">
            Contact Us
            <span class="text__first-bg"></span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { srt1, str2, str3 } from "../../utils/ScrollEffect";
export default {
  props: ["isDrawerOpen","toggleDrawer"],
  watch: {
    $route() {
      if (this.$route.hash.includes("#about_us")) {
        gsap.from(".chars-about",{
        y: '100%',
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      });
      gsap.from(".about-bottom",{
        y: '100%',
        opacity: 0,
        delay:1,
        duration: 2,
        stagger: 0.1,
        ease: 'power1.out',
      });
      gsap.fromTo(".text-bar-list",{opacity:0,y:"50vh"},{y:0,opacity:1,duration:2,stagger:0.3})

      gsap.fromTo(
        ".text__first-bg",
        { scaleX: 1 },
        { scaleX: 0, duration: 2 }
      );
    }},
  },
  data() {
    return { srt1, str2, str3 };
  },
};
</script>

<style scoped>
.wrap {
  height: 100%;
  padding: 130px 0;
}

.contact_wrap_btn {
  position: relative;
  display: inline-block;
}
.text-bar-list{
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
  width: 70%;
}
.text-bar-list p{
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
  font-weight: 600;
}
.text__first-bg {
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

.menu {
  position: absolute;
  top: 0;
  right: -105%;
  height: 100%;
  width: 100%;
  color: white;
  transition: transform 1s ease-in; /* animate when opening/closing */
  overflow-y: scroll;
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
  align-items: center;
  height: 80%;
  width: 70%;
  justify-content: center;
}

.list-items-li {
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  width: 70%;
  text-align: justify;
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

.p_info {
  font-family: "Montserrat";
  font-size: 15px;
  weight: 500;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  margin: 0;
  padding: 0;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



.contact_us_btn {
  align-self: flex-start;
  position: relative;
  font-size: 16px;
  padding: 9px 38px;
  font-family: "Feature Mono";
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

@media (max-width: 900px) {
  .menu li {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .menu {
    display: flex;
  }
  .menu ul {
    width: 100%;
    margin-top: 25px;
    padding: 0 20px;
  }
  .menu li{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .bottom-content{
    line-height: 20px;
    margin: 5px 0;
  }
.text-bar-list{
  width: 100% !important;
  padding: 5px;
  font-size: 14px;
  margin-right: 30px;
  /* margin-left: 10px; */
}
.list-items-li{
  margin-right: 30px;
}
.text-bar-list p{
 /* / width: 100%; */
 margin: 0 !important;
 padding: 0 !important;
 font-size: 12px !important;
 opacity: 1 !important;
}
}
</style>
