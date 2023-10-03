<template>
  <div>
    <client-only>
      <swiper class="swiper" :options="swiperOption">
        <slot name="slider"></slot>
      </swiper>
      <div class="pagination"></div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        spaceBetween: 32,
        slidesPerView: 1,
        pagination: {
          el: ".pagination",
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
  mounted() {},
  methods: {},
};
</script>

<style scoped>

.swiper-container {
  width: 800px;
  transform: scale(0.9);
  margin: -40px 0;
  margin-left:-40px;
}
.pagination {
  width: 390px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
@media (max-width: 1200px) {
 .swiper-container {
    width: calc(100vw - 377px);
  }
}

@media (max-width: 768px) {
  .swiper-container {
    width: 90vw;
    margin: 0 auto;
  }
  .pagination{
    width: 90vw;
    margin: 0 auto;
    justify-content:center;
  }
  
}


</style>
