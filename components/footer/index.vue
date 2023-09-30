<template>
  <div
    class="absolute w-[100%] bottom-20 mx-auto flex justify-between items-end main-wrapper"
  >
    <div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        class="grid grid-cols-2 gap-4 mb-10 all_links"
      >
        <ul id="menu">
          <li
            data-menuanchor="about_us"
            class="cursor-pointer list-items-li list-items-li1"
          >
            <a href="#about_us" class="cursor-pointer list-items-li"
              >ABOUT US</a
            >
          </li>
          <li
            data-menuanchor="features"
            class="cursor-pointer list-items-li list-items-li1"
          >
            <a href="#features" class="cursor-pointer list-items-li"
              >FEATURES</a
            >
          </li>
          <li
            data-menuanchor="team"
            class="cursor-pointer list-items-li list-items-li1"
          >
            <a href="#team" class="cursor-pointer list-items-li">OUR TEAM</a>
          </li>
        </ul>

        <ul id="menu">
          <li
            data-menuanchor="services"
            class="cursor-pointer list-items-li list-items-li1"
          >
            <a href="#services" class="cursor-pointer list-items-li"
              >NATEX NFT</a
            >
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
            <a href="#contacts" class="cursor-pointer list-items-li"
              >CONTACTS</a
            >
          </li>
        </ul>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="1000"
      >
        <p class="copyRight">
          COPYRIGHT © 2023. &nbsp; &nbsp; ALL RIGHTS RECERVED
        </p>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="1000"
    >
      <div class="flex">
        <p class="mr-5 copyRight">Terms & Conditions</p>
        <p class="copyRight">Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "feature mono", monospace;
  list-style: none;
}

li {
  font-size: 14px;
  line-height: 14px;
  color: rgba(255, 255, 255, 1);
  margin-top: 25px;
  transition: 0.3s all ease;
  padding: 10px;
}

li:hover {
  color: #5eff84;
}

ul li::before {
  content: "\2022";
  color: #5eff84;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.copyRight {
  color: rgba(114, 119, 128, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}

.active-link {
  font-weight: bold;
  color: #5eff84 !important;
}

@media (max-width: 680px) {
  button {
    display: block;
    margin: 0% auto;
  }

  li {
    margin-right: 5px;
  }
  .copyRight {
    display: none;
  }
  .main-wrapper {
    justify-content: center;
    margin-left: -0.75rem;
    bottom: 3%;
  }

  .all_links {
    display: none;
  }
  .bottom_text p {
    font-family: "Feature Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #727780;
    margin: 25px 0%;
  }
}

@media (max-width: 767px) {
  .footer-scroll-container {
    display: none;
  }
}
</style>
