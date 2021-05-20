<template lang="">
  <div>
    <navigationbar>
      <template v-slot:center>
        <span>首页</span>
      </template>
    </navigationbar>
    <swiper v-if = "banner" :banner_ = 'banner'></swiper>
  </div>
</template>
<script>
import navigationbar from 'common/navigationbar/navigationbar.vue'
import { getHomeData } from 'network/home.js'
import swiper from 'common/swiper/swiper.vue'
export default {
  name: 'home',
  data () {
    return {
      banner: 0,
      recommend: []
    }
  },
  components: {
    navigationbar,
    swiper
  },
  created () {
    getHomeData().then(data => {
      this.banner = data.data.banner
      this.recommend = data.data.recommend
    })
  }
}
</script>
<style>

</style>
