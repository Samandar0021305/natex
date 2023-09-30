<template>
  <div class="timeline" id="timeline">
    <ul class="all_links">
      <li
        ref="aboutUs"
        :class="{ active: isActive('about_us') }"
        data-menuanchor="about_us"
      >
        <a href="#about_us">ABOUT US</a>
      </li>
      <li
        ref="features"
        :class="{ active: isActive('features') }"
        data-menuanchor="features"
      >
        <a href="#features">FEATURES</a>
      </li>
      <li
        ref="ourTeam"
        :class="{ active: isActive('our_team') }"
        data-menuanchor="team"
      >
        <a href="#team">OUR TEAM</a>
      </li>
      <li
        ref="natexNft"
        :class="{ active: isActive('natex_nft') }"
        data-menuanchor="services"
      >
        <a href="#services">NATEX NFT</a>
      </li>
      <li
        ref="forDrivers"
        :class="{ active: isActive('for_drivers') }"
        data-menuanchor="drivers"
      >
        <a href="#drivers">FOR DRIVERS</a>
      </li>
      <li
        ref="contacts"
        :class="{ active: isActive('contacts') }"
        data-menuanchor="contacts"
      >
        <a href="#contacts">CONTACTS</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["from"],
  computed: {
    activeRefs() {
      const refs = {
        aboutUs: false,
        features: false,
        ourTeam: false,
        natexNft: false,
        forDrivers: false,
        contacts: false,
      };

      refs[this.from] = true;

      return refs;
    },
  },
  methods: {
    isActive(refName) {
      return this.activeRefs[refName];
    },
  },
};
</script>

<style scoped>
.timeline {
  color: #fff;
  width: 233px;
  height: 620px;
  z-index: 120;
  overflow: hidden;
  padding: 16px;
  margin: -16px;
}
.timeline ul {
  list-style-type: none;
  border-left: 2px solid rgba(255, 255, 255, 0.14);

  padding: 0px 0px;
  width: 100%;
  height: 100%;
}
.timeline ul li {
  padding: 0px 20px;
  position: relative;
  height: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;
}
.timeline ul li a {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 10px 15px;
  width: 150px;
  opacity: 0;
  height: 39px;
  top: -20px;
  font-size: 14px;
  text-align: center;
  transition: 0.3s ease;
  position: relative;
}

.timeline ul li a::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #5eff84;
}

.timeline ul li:before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  opacity: 1;
  left: -11px;
  top: 0%;
  transform: translateY(-50%) rotate(45deg);
  transition: 0.5s;
  box-shadow: 0px 0px 0px 1px #39393d;
  background-color: #09090b;
  border: 1px solid transparent;
}

.timeline ul li.active a {
  opacity: 1;
}

.timeline ul li.active:before {
  opacity: 1;
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

.timeline ul li.active:hover:before {
  opacity: 1;
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

.timeline ul li:hover:before {
  opacity: 1;
  border: 1px solid;
  border-image: linear-gradient(
      264.81deg,
      rgba(0, 209, 255, 0.56) 6.82%,
      #62fc97 91.66%
    )
    1 1;
}

.timeline ul li:hover {
  opacity: 1;
}

.timeline ul li:hover a {
  opacity: 1;
}

@media (max-width: 768px) {
  .timeline {
    display: none;
  }
}
</style>
