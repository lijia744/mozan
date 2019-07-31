<template>
  <div class="lunbo">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/2_03.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2_05.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2_07.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2_03.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2_05.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2_07.jpg" alt />
      </swiper-slide>

      <!-- Optional controls -->
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "lunbo",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 28,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
.lunbo {
  width: 1200px;
  margin: 0 auto;
  background-image: url("../assets/商品详情页_全额预售_05.jpg");
  padding: 28px 50px;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 75px;
  right: auto;
  width: 36px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  top: 38%;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 74px;
  width: 36px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  top: 38%;
}
</style>
