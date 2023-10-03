<template>
  <div>
    <div
      class="menu animate__animated animate__fadeIn"
      :class="{ show: isDrawerOpen }"
      id="modal-features"
      ref="menu"
    >
      <ul class="list-items-ul">
        <li class="flex justify-between list-items-li">
          <div class="content">
            <p class="top-content">
              <span v-for="(c, i) in features1" class="features-title" :key="i">{{
                c
              }}</span>
            </p>
            <p class="bottom-content">
              <span v-for="(c, i) in features2" class="features-subtitle" :key="i">{{
                c
              }}</span>
            </p>
          </div>
        </li>
        <li class="border-l border-green-700 my-3 px-2 text">
          <strong class="my-2">
            <span class="text-bar">Top Quality Vehicles</span>
          </strong>
          <p class="font-light p_info">
            <span class="text-bar">
              We believe that quality cars make for quality rides. Our rigorous
              car selection process ensures that all cars in the Natex ecosystem
              are modern models, in excellent condition and maintained in
              perfect working order.
            </span>
          </p>
        </li>
        <li class="border-l border-green-700 my-3 px-2 text">
          <strong class="my-2">
            <span class="text-bar">The Best Drivers</span>
          </strong>
          <p class="font-light p_info">
            <span class="text-bar"
              >To be the best ride-hailing service, we only accept the best.
              Natex’s driver selection process ensures all drivers are
              experienced, courteous, and ready to provide riders with the best
              quality service.</span
            >
          </p>
        </li>
        <li class="border-l border-green-700 my-3 px-2 text">
          <strong class="my-2">
            <span class="text-bar"
              >Easy Crypto Payments & Valuable Rewards</span
            >
          </strong>
          <p class="font-light p_info">
            <span class="text-bar"
              >Use your crypto to pay for rides with close to zero commissions,
              and without delays. Earn attractive $NATX token and NFT rewards as
              a Natex user.</span
            >
          </p>
        </li>

        <li class="border-l border-green-700 my-3 px-2 text">
          <strong class="my-2">
            <span class="text-bar">Total Security</span>
          </strong>
          <p class="font-light p_info">
            <span class="text-bar">
              Thanks to our custom-made blockchain security features, Natex
              ensures all your private data and transaction data is safe from
              any interference. Ride in full tranquility, knowing your funds and
              ride history is completely private.
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { features1, features2 } from "../../utils/ScrollEffect";
export default {
  props: ["isDrawerOpen", "toggleDrawer"],
  watch: {
    $route() {
      if (this.$route.hash.includes("#features")) {
        gsap.from(".features-subtitle", {
            y: "100%",
            opacity: 0,
            duration: 2,
            stagger: 0.1,
            ease: "power2.out",
          });

        gsap.from(".features-title", {
          y: "100%",
          autoAlpha: 0,
          duration: 2,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
      // gsap.fromTo(".features-subtitle",{
      //   scale: 0,
      //   autoAlpha: 0,
      // }, {
      //   scale: 1,
      //   autoAlpha: 1,
      //   delay:1,
      //   duration: 1.5,
      //   stagger: 0.1,
      //   ease: 'power1.out',
      // });
    },
  },
  data() {
    return { features1, features2 };
  },
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
}

.disableScroll {
  overflow: hidden;
}

.menu.show {
  transform: translateX(-100%);
  z-index: 101; 
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
  width: 65%;
  justify-content: flex-start;
}

.list-items-li {
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  width: 70%;
  text-align: justify;
}
strong {
  font-family: "Feature Mono";
}
li:hover strong span {
  color: #64fd93;
  /* background: linear-gradient(180deg, #00d1ff 0%, #64fd93 100%);
  -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
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
  font-size: 14px;
  font-family: "Montserrat";
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
}

.contact_us_btn {
  align-self: flex-start;
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

header {
  display: none;
}
.toggleElement {
  display: block;
}

.menu li {
  width: 80%;
}

@media (max-width: 1000px) {
  .list-items-ul {
    margin-left: 200px;
  }
}

@media (max-width: 900px) {
  .menu li {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  .list-items-ul {
    margin-left: 0;
  }
  .menu ul {
    width: 90%;
    margin-top: 60px;
  }
  header {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  .toggleElement {
    display: none;
  }
  .bottom-content {
    font-size: 20px;
  }
  .p_info {
    font-size: 12px;
    line-height: 150%;
  }
}

</style>
