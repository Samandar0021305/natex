<template>
  <div class="main_wrapper">
    <button
      @click="showLinkWrapper"
      class="start_menu"
      :class="{ active: isLinkWrapperShown }"
    >
      <span>MENU</span>
    </button>
    <div class="links_wrapper" :class="{ active: isLinkWrapperShown }">
      <ul class="w-[45%]" id="menu">
        <li
          data-menuanchor="about_us"
          class="cursor-pointer list-items-li list-items-li1"
        >
          <a href="#about_us" class="cursor-pointer list-items-li">ABOUT US</a>
        </li>
        <li
          data-menuanchor="features"
          class="cursor-pointer list-items-li list-items-li1"
        >
          <a href="#features" class="cursor-pointer list-items-li">FEATURES</a>
        </li>
        <li
          data-menuanchor="team"
          class="cursor-pointer list-items-li list-items-li1"
        >
          <a href="#team" class="cursor-pointer list-items-li">OUR TEAM</a>
        </li>
      </ul>

      <ul class="w-[45%]" id="menu">
        <li
          data-menuanchor="services"
          class="cursor-pointer list-items-li list-items-li1"
        >
          <a href="#services" class="cursor-pointer list-items-li">NATEX NFT</a>
        </li>
        <li
          data-menuanchor="drivers"
          class="cursor-pointer list-items-li list-items-li1"
        >
          <a href="#drivers" class="cursor-pointer list-items-li"
            >FOR DRIVERS</a
          >
        </li>
        <li
          data-menuanchor="contacts"
          class="cursor-pointer list-items-li list-items-li1"
        >
          <a href="#contacts" class="cursor-pointer list-items-li">CONTACTS</a>
        </li>
      </ul>

      <div class="w-[100%] bottom_context">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>СOPYRIGHT © 2023. ALL RIGHTS RECERVED</p>
        <button class="close_btn" @click="hideLinkWrapper">
          <span>CLOSE</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLinkWrapperShown: false,
    };
  },
  methods: {
    showLinkWrapper() {
      this.isLinkWrapperShown = true;
    },
    hideLinkWrapper() {
      this.isLinkWrapperShown = false;
    },
  },
};
</script>

<style scoped>
.main_wrapper {
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}
.links_wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  margin: 0 auto;
  z-index: 99999;
  position: relative;
  bottom: -500px;
  width: 90%;
  padding: 20px 5px;
  background: rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(11.5px);
}
.start_menu {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
}

.start_menu.active {
  animation-name: upwardBtn;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.links_wrapper.active {
  animation-name: showAnimatedMenu;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
}

@keyframes upwardBtn {
  from {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    visibility: visible;
  }
  to {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
  }
}

@keyframes showAnimatedMenu {
  from {
    bottom: -500px;
  }
  to {
    bottom: 100px;
  }
}

.list-items-li {
  font-size: 14px;
  line-height: 14px;
  color: rgba(255, 255, 255, 1);
  margin-top: 25px;
  transition: 0.3s all ease;
  padding: 10px;
  font-family: "feature mono";
}

.list-items-li:hover {
  color: #5eff84;
}

.list-items-li1::before {
  content: "\2022";
  color: #5eff84;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.bottom_context p {
  font-family: "Feature Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #727780;
  margin: 25px 0%;
}

button {
  position: relative;
  padding: 10px 25px;
  background: rgba(255, 255, 255, 0.04);
  width: 100px;
  margin: 0 auto;
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

button span {
  font-family: "Feature Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(90deg, #00d1ff 0.7%, #64fd93 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

@media (max-width: 430px) {
  .links_wrapper {
    width: 100%;
    justify-content: space-evenly;
  }
}

@media (max-width: 320px) {
  .links_wrapper {
    width: 100%;
  }
}
</style>
