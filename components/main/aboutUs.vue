<template>
  <section class="main-section flex w-[100%] relative flex-col" id="about-us" >
    <AnimatedCustom />
        <Header class="mx-auto container px-3 transform-effect header" />
    <div
      class="h-[100%] w-[100vw]  align-middle container mx-auto px-3 mt-[30px]  flex justify-between items-center"
    >
      <Timeline
        class="w-[50%] time_line transform-effect faded_effect_timeline"
        from="about_us"
      />
      <div class="content_info transform-effect">
      
       <ModalsAboutUs :isDrawerOpen="true" />
      </div>
      
    
    </div>
  </section>
</template>

<script>
export default {
  
  async mounted() {
    await this.$store.dispatch("handleSidebarMenu");
  },
};
</script>
<style scoped>
.main-section {
  background-image: url("@/assets/images/main/bg.svg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  transition: 0.4s all ease;
  overflow: hidden;
  padding: 20px 0;
}

.transform-effect {
  transition: 0.5s linear;
  opacity: 1;
}

.hideElement {
  opacity: 0;
}

.content_info {
  z-index: 102;
}

.btn-plus,
.btn-toggle,
.top-content {
  font-family: "Feature Mono";
}

.top-content {
  letter-spacing: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(180deg, #00d1ff 0%, #64fd93 100%);
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

.btn-toggle {
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: lighter;
}

.btn-plus {
  transform: rotate(-45deg);
}

.footerMobile {
  display: none;
}


@media (max-width: 768px) {
  .footerMobile {
    display: block;
  }
  
  .content_info {
    width: 100%;
    position:static;
  }

  .sentences {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .btn-toggle {
    margin: 0%;
    margin-bottom: 15px;
  }
  .bottom-content {
    font-size: 20px;
  }
}

@media screen and (max-width:400px) {
   .header{
     margin-top: -5px !important;
   }
}
</style>