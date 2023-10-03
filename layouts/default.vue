<template>
  <div class="main-wrapper">
    <div id="page-wrapper" ref="pageWrapper">
      <Sidebar />
      <div class="md-content">
        <div>
          <div class="sb-trigger">
            <slot>
              <nuxt />
            </slot>
          </div>
        </div>
      </div>
    </div>
    <cursor-fx />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      page_wrapper: null,
    };
  },
  
  watch: {
    $route() {
      if (
        this.$route.hash.includes("#") &&
        !this.$route.hash.includes("#natex")
      ) {
       
        gsap.fromTo(
          "#timeline",
          {
            height: "0px",
            opacity: 0,
          },
          {
            height: "620px",
            opacity: 1,
            ease: "Power2.easeOut",
            delay: 1.5,
            duration: 1.5,
          }
        );
      }
    },
  },
  computed: {
    // mainWrapperStyle() {
    //   const currentPath = this.$route.path;
    //   if (
    //     currentPath === "/pricing" ||
    //     currentPath === "/statistics" ||
    //     currentPath === "/riders" ||
    //     currentPath === "/drivers"
    //   ) {
    //     return {};
    //   }

    //   return {};
    // },
    // pageWrapper() {
    //   return this.$refs.pageWrapper;
    // },
  },
  mounted() {
    // const observer = new MutationObserver((mutationsList) => {
    //   for (const mutation of mutationsList) {
    //     if (
    //       mutation.attributeName === "class" &&
    //       mutation.target.classList.contains("_3dScaleRotate")
    //     ) {
    //       this.pageWrapper.style.overflow = "hidden";
    //     }

    //     if (
    //       mutation.attributeName === "class" &&
    //       !mutation.target.classList.contains("_3dScaleRotate")
    //     ) {
    //       this.pageWrapper.style.overflow = "";
    //     }
    //   }
    // });
    // observer.observe(this.pageWrapper, { attributes: true });
   this.$router.push("/#natex")
   },
};
</script>
<style scoped>
.main-wrapper {
  background-image: url("@/assets/images/main/earth.svg");
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  overflow-x: scroll !important;
}

.body-perspective {
  background: #fff;
  perspective: 600px;
}

#page-wrapper {
  height: 100vh;
}

.md-content {
  background: #1e1e1e;
  perspective: 1000px;
  transition: transform 0.5s;
}


._3dScaleRotate.sb-menu {
  opacity: 1;
  transform: translate3d(-300px, 0, 0);
  z-index: 100;
}
._3dScaleRotate#page-wrapper {
  perspective: 1500px;
}
._3dScaleRotate#page-wrapper .md-content {
  transform-style: preserve-3d;
}
._3dScaleRotate.sidebar-is-open ._3dScaleRotate.sb-menu {
  visibility: visible;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s;
}
._3dScaleRotate.sidebar-is-open ._3dScaleRotate.sb-menu ~ .md-content {
  transform: translate3d(100px, 0, -600px) rotateY(-20deg);
}

/*end sidebar transition styles*/
.sb-menu {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 300px;
  height: 100%;
  background: linear-gradient(0deg, rgba(8, 8, 12, 0.6), rgba(8, 8, 12, 0.6));
  transition: all 0.5s;
}
.sb-menu .sidebar-close {
  position: absolute;
  top: 3px;
  right: 3px;
  color: #005e4e;
  cursor: pointer;
  transition: transform 0.5s;
}
.sb-menu .sidebar-close:hover {
  transform: rotateZ(180deg);
}

.checkbox-wrapper {
  position: absolute;
  top: 5px;
  left: 5px;
}

input[type="checkbox"] {
  visibility: hidden;
}
input[type="checkbox"] + label {
  cursor: pointer;
  opacity: 0.3;
  padding-left: 10px;
}
input[type="checkbox"] + label:before {
  border: 2px solid #ddd;
  border-radius: 3px;
  content: "";
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}
input[type="checkbox"] + label:after {
  content: "";
  font: 26px "Material Icons";
  color: #17ffbe;
  text-shadow: 4px -1px 0 #212023, 1px -4px 0 #212023;
  position: absolute;
  top: -5px;
  left: 3px;
  transition: all 0.2s;
  opacity: 0;
  transform: scale(0);
}
input[type="checkbox"]:hover + label:before {
  border-color: #17ffbe;
}
input[type="checkbox"]:checked + label {
  opacity: 1;
}
input[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

.overFlowHidden {
  overflow: hidden !important;
}
</style>
