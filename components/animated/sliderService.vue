<template>
    <div>
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <slot name="slider"></slot>
        </swiper>
        <div class="pagination-service"></div>
      </client-only>
    </div>
  </template>
  
  <script>
  export default {
    props:{
      viewCount: {
        type: [String, Number],
        default() {
          return 1
        }
      },
      count: {
        type: [String, Number],
        default() {
          return 1
        }
      },
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          spaceBetween: 32,
          slidesPerView: 1,
          pagination: {
            el: ".pagination-service",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="swiper-pagination-bullet">0${
                index + 1
              }</span>`;
            },
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        },
      };
    },
    mounted() {
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  .swiper-container {
    width: 800px;
  }
  .pagination-service {
    width: 390px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width:800px){
    .swiper-container{
      width: 90vw;
      margin: 0 auto;
    }
  }
  
  
  </style>
  