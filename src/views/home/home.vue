<template lang="">
  <div>
    <navigationbar>
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </navigationbar>
    <swiper v-if = "banner" :banner_ = 'banner'></swiper>
    <recommend v-if = "recommend" :recommends = 'recommend.list'></recommend>
    <week-top/>
    <tab-control :titles='["流行","新款","精选"]'></tab-control>
    <ul>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
      <li>hh</li>
    </ul>
  </div>
</template>
<script>
import navigationbar from 'common/navigationbar/navigationbar.vue'
import swiper from 'common/swiper/swiper.vue'
import recommend from 'views/home/childrenComponents/homeRecommend.vue'
import weekTop from 'views/home/childrenComponents/weekTop.vue'

import tabControl from 'content/tabControl/tabControl.vue'

import { getHomeData } from 'network/home.js'

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
    recommend,
    weekTop,
    tabControl
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
