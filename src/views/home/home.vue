<template lang="">
  <div class='home'>
    <navigationbar>
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </navigationbar>
    <swiper v-if = "banner" :banner_ = 'banner'></swiper>
    <recommend v-if = "recommend" :recommends = 'recommend.list'></recommend>
    <week-top/>
    <tab-control :titles='["流行", "新款", "热销"]' @transferKeyword='markControl'></tab-control>
    <goods-list :goodList='goods[tabControlKeyword].list'/>
  </div>
</template>
<script>
import navigationbar from 'common/navigationbar/navigationbar.vue'
import swiper from 'common/swiper/swiper.vue'
import recommend from 'views/home/childrenComponents/homeRecommend.vue'
import weekTop from 'views/home/childrenComponents/weekTop.vue'
import goodsList from 'content/goodsList/goodsList.vue'

import tabControl from 'content/tabControl/tabControl.vue'

import {
  getHomeData,
  getHomeGoods
} from 'network/home.js'

export default {
  name: 'home',
  data () {
    return {
      banner: 0,
      recommend: 0,
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      tabControlKeyword: 'pop'
    }
  },
  components: {
    navigationbar,
    swiper,
    recommend,
    weekTop,
    tabControl,
    goodsList
  },
  created () {
    this.getHomeData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    markControl (index) {
      switch (index) {
        case 0:
          this.tabControlKeyword = 'pop'
          break
        case 1:
          this.tabControlKeyword = 'new'
          break
        case 2:
          this.tabControlKeyword = 'sell'
          break
      }
    },
    getHomeData () {
      getHomeData().then(data => {
        this.banner = data.data.banner
        this.recommend = data.data.recommend
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(data => {
        // console.log(data)
        this.goods[type].list.push(...data.data.list)
        // console.log(this.goods)
        this.goods[type].page += 1
      })
    }
  }
}
</script>
<style>
.home{
  margin-bottom:49px;
}
</style>
