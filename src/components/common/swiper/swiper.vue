
<template>
<div @click='test' class='swiper-self'>
  <swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
    'delay': 2500,
    'disableOnInteraction': false
    }" :pagination="{
    'clickable': true
    }" :navigation="false" class="mySwiper">
    <swiper-slide v-for='(item, index) in banner' :key='index' >
      <a :href='item.link'>
        <img :src='item.image' :title='item.title'>
      </a>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'

import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import 'assets/css/swiper_.css'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      banner: this.banner_.list
    }
  },
  props: {
    banner_: {
      type: Object
    }
  },
  methods: {
    test () {
      console.log(this.banner)
    }
  }
}
</script>
<style>
.swiper-self{
  padding-top:44px;
}
</style>
