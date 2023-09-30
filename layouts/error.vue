<template>
  <div class="main-wrapper">
    <div id="page-wrapper">
      <Sidebar />
      <div class="md-content">
        <div>
          <div class="sb-trigger">
            <div class="mx-auto">
              <div class="sb-trigger">
                <section
                  class="main-section flex flex-col justify-center align-middle relative overflow-hidden"
                >
                  <div class="animate__fadeIn animate__animated">
                    <nuxt-link to="/"
                      ><img
                        src="@/assets/images/main/go_back.svg"
                        alt="go back"
                        class="absolute left-20 top-10 go_back cursor-pointer"
                    /></nuxt-link>
                  </div>
                  <header
                    class="mx-auto animate__fadeIn animate__animated mb-4"
                  >
                    <p class="header-marketing">
                      Look like you’re lost in space
                    </p>
                  </header>
                  <main
                    class="mx-auto w-[80%] flex items-center flex-col align-middle"
                  >
                    <div data-aos="zoom-in" data-aos-duration="1500">
                      <img src="@/assets/images/main/404.svg" alt="road svg" />
                    </div>
                    <nuxt-link to="/"> <button>Go back</button></nuxt-link>
                  </main>
                </section>
                <img
                  class="absolute right-[10%] top-[3%] cursor-pointer"
                  data-nav="_3dScaleRotate"
                  src="@/assets/images/main/menu.svg"
                  alt="menu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.showAnimation();
    this.runMenuConfig();
  },
  data() {
    return {
      loading: true,
      title: "NATEX",
    };
  },
  methods: {
    handleReady() {
      this.loading = false;
    },
    showAnimation() {
      document.querySelectorAll(".letter").forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add("fade-in");
        }, index * 100);
      });
    },
    runMenuConfig() {
      console.log("inside runMenuConfig");
      var menuItems = [].slice.call(document.querySelectorAll("#sb-menu li a"));
      menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function (e) {
          menuItems.map(function (item) {
            return item.classList.remove("is-active");
          });
          e.target.classList.add("is-active");
        });
      });

      /*button events*/
      var container = document.querySelector("#page-wrapper");
      var sidebar = document.querySelector("#sb-menu");
      [].forEach.call(
        document.querySelectorAll(".sb-trigger"),
        function (trigger) {
          trigger.addEventListener("click", function (e) {
            container.className = "";
            if (e.target.attributes["data-nav"]) {
              container.classList.add(e.target.attributes["data-nav"].value);
              sidebar.className = "sb-menu";
              sidebar.classList.add(e.target.attributes["data-nav"].value);
            }
            setTimeout(function () {
              container.classList.add("sidebar-is-open");
            }, 150);

            document.addEventListener("click", onBodyClick);
          });
        }
      );

      function onBodyClick(e) {
        var container = document.querySelector("#page-wrapper");
        if (
          e.target.classList.contains("md-content") &&
          container.classList.contains("sidebar-is-open")
        ) {
          //console.log(e.target);
          container.classList.remove("sidebar-is-open");
          document.removeEventListener("click", onBodyClick);
        }
      }
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  background-image: url("@/assets/images/main/earth.svg");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
}

.body-perspective {
  background: #fff;
  perspective: 600px;
}

#page-wrapper {
  height: 100vh;
}

.md-content {
  min-height: 100%;
  background: #212023;
  perspective: 1000px;
  transition: transform 0.5s;
}
.sidebar-is-open .md-content:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.8s;
  background: rgba(33, 32, 35, 0.6);
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

.letter {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  font-family: "Montserrat";
  display: inline-block;
}

.letter.fade-in {
  opacity: 1;
}

.main-section {
  background-image: url("@/assets/images/main/bg.svg");
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.content-wrapper {
  transition: 0.3s all ease;
  border: 1px solid transparent;
}
.left,
.right {
  transition: 0.3s all ease;
  border: 1px solid transparent;
}
.content-wrapper:hover .left,
.content-wrapper:hover .right {
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

.header-name {
  text-align: center;
  font-family: monospace;
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

.header-marketing {
  text-align: center;
  font-size: 24px;
  font-family: monospace;
}

.header-info {
  text-align: center;
  font-size: 14px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  /* Replace #F0F and #0FF with your desired colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.left {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
}

.right {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
}

button {
  width: 170px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  color: black;
}

@media (max-width: 568px) {
  .content-wrapper {
    margin-top: 10px;
    flex-direction: column;
  }
  .right,
  .left {
    width: 96%;
  }
  .left span {
    display: block;
    width: 100%;
    text-align: center;
  }
  .left {
    flex-direction: inherit;
  }

  header {
    margin-top: 20%;
  }
}
</style>
