<template>
  <section>
    <Loader :loading="loading" :title="title" />
    <video autoplay loop muted id="myVideo" playsinline>
      <source src="video/background_video.mp4" type="video/mp4" />
    </video>
    <div class="dark">
      <div class="layer">
        <Header class="!relative" />
        <component :is="footerComponent" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async mounted() {
    this.showLoader();
    await this.$store.dispatch("handleSidebarMenu");
  },
  data() {
    return {
      loading: true,
      title: "NATEX",
    };
  },
  computed: {
    footerComponent() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        return "FooterMobile";
      } else {
        return "Footer";
      }
    },
  },
  methods: {
    showVideo() {
      this.loading = false;
    },
    showLoader() {
      document.querySelectorAll(".letter").forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add("fade-in");
        }, index * 100);
      });
    },
  },
};
</script>

<style scoped>
#myVideo {
  position: absolute;
  z-index: 4;
  right: 0;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background: linear-gradient(
    0deg,
    rgba(8, 8, 12, 0.8),
    rgba(8, 8, 12, 0.8)
  ) !important;

  background-position: center center;
  background-size: contain;
  object-fit: cover;
}

.dark {
  background: linear-gradient(
    0deg,
    rgba(8, 8, 12, 0.333),
    rgba(8, 8, 12, 0.349)
  ) !important;
  position: absolute;
  z-index: 5;
  width: 100% !important;
  margin: 0 auto !important;
  left: 0%;
  top: 0%;
  height: 100%;
}

#section1 .layer {
  position: absolute;
  z-index: 5;
  width: 80% !important;
  margin: 0 auto !important;
  transform: translateX(-50%);
  left: 50%;
  top: 2%;
  height: 100%;
}

#section1 {
  overflow: hidden;
}
</style>
