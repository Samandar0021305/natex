<template>
  <nav id="sb-menu" class="sb-menu" @click.stop="">
    <div class="flex justify-between items-center mt-10 px-6">
      <img
        src="@/assets/images/logo/main_white_logo.svg"
        class="mr-3 logo"
        width="70px"
        alt="NATEX Logo"
      />
      <img
        src="@/assets/images/main/close.svg"
        alt="close"
        class="sb-trigger sidebar-close"
        data-nav=""
      />
    </div>
    <ul class="ul-element mt-20">
      <nuxt-link
        to="/#natex"
        class="hover:bg-third bg-third transition duration-300 ease-in-out"
        >
        <li  class="hover:bg-third hover:text-white" @click="handleClick">
          HOME
        </li>
      </nuxt-link>

      <nuxt-link  to="/pricing">
        <li   class="hover:bg-third hover:text-white" @click="handleClick">
          PRICING
        </li>
      </nuxt-link>

      <nuxt-link to="/tokenSale">
        <li  class="hover:bg-third hover:text-white" @click="handleClick">
          TOKEN SALE
        </li>
      </nuxt-link>

      <nuxt-link to="/statistics">
        <li  class="hover:bg-third hover:text-white" @click="handleClick">
          STATISTICS
        </li>
      </nuxt-link>

      <nuxt-link to="/roadMaps">
        <li  class="hover:bg-third hover:text-white" @click="handleClick">
          ROADMAPS
        </li>
      </nuxt-link>
      <nuxt-link to="/riders">
        <li  class="hover:bg-third hover:text-white" @click="handleClick">
          FOR RIDERS
        </li>
      </nuxt-link>
      <nuxt-link to="/drivers">
        <li  class="hover:bg-third hover:text-white" @click="handleClick">
          FOR DRIVERS
        </li>
      </nuxt-link>
    </ul>

    <div class="image-wrapper">
      <img src="@/assets/images/main/lines.svg" alt="lines svg" />
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleClick() {
      var container = document.querySelector("#page-wrapper");
      console.log(container);
      if (container.classList.contains("sidebar-is-open")) {
        container.classList.remove("sidebar-is-open");
      }

      if(this.$route.hash.includes("#") && !this.$route.hash.includes("#natex")){
        // this.$route.
        // console.log(this.$route);
        // this.$route.push("#natex")
        window.location.reload()
      }
    },
    isActive(param){
       if(this.$route.path.includes(param)){
         return true
       }
       return false
    }
  },
  computed:{
     
  }
};
</script>
<style scoped>
.sb-menu {
  height: 100vh;
  overflow: hidden;
}
/* .SaidarActive{
  background-color: ;
} */
.images-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
}
.image-wrapper img {
  transition: 1s all ease;
  transform: translate(21%, 46%) rotate(-12deg) scale(2.5);
  animation: change-color 2s ease-in-out infinite;
}

@keyframes change-color {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(180deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

li {
  font-family: "Feature Mono";
  font-weight: 500;
  margin-bottom: 15px;
  padding: 15px 25px;
}

li {
  color: gray;
}
.nuxt-link-exact-active > li{
background-image: linear-gradient(135deg, #08aeea3b 0%, #0c111693 100%);
color: white;
}
</style>
