<template lang="">
  <div>
    <navigationbar>
      <template v-slot:center>
        <span>首页</span>
      </template>
    </navigationbar>
    <swiper v-if = "banner" :banner_ = 'banner'></swiper>
    <recommend v-if = "recommend" :recommends = 'recommend.list'></recommend>
  </div>
</template>
<script>
import navigationbar from 'common/navigationbar/navigationbar.vue'
import { getHomeData } from 'network/home.js'
import swiper from 'common/swiper/swiper.vue'
import recommend from 'views/home/childrenComponents/homeRecommend.vue'
export default {
  name: 'home',
  data () {
    return {
      banner: 0,
      recommend: 0
    }
  },
  components: {
    navigationbar,
    swiper,
    recommend
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
