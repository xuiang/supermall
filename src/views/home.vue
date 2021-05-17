<template lang="">
  <div>
    <navigationbar>
      <template v-slot:center>
        <span>首页</span>
      </template>
    </navigationbar>
  </div>
</template>
<script>
import navigationbar from '../components/common/navigationbar.vue'
import { getHomeData } from '../network/home.js'
export default {
  name: 'home',
  dat () {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    navigationbar
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
