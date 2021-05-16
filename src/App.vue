<template>
  <div id='app'>
    <router-view></router-view>
    <bottom-bar>
      <div>
        <bottom-bar-item path='/home'>
          <template v-slot:active_img>
            <img src='./assets/img/home_active.svg'>
          </template>
          <template v-slot:img>
            <img src='./assets/img/home.svg'>
          </template>
          <template v-slot:description>
            <div >首页</div>
          </template>
        </bottom-bar-item>
      </div>
      <div>
        <bottom-bar-item path='/sort' color='green'>
          <template v-slot:active_img>
            <img src='./assets/img/sort_active.svg'>
          </template>
          <template v-slot:img>
            <img src='./assets/img/sort.svg'>
          </template>
          <template v-slot:description>
            <div>分类</div>
          </template>
        </bottom-bar-item>
      </div>
      <div>
        <bottom-bar-item path='/shopcar' color='orange'>
          <template v-slot:active_img>
            <img src='./assets/img/shopcar_active.svg'>
          </template>
          <template v-slot:img>
            <img src='./assets/img/shopcar.svg'>
          </template>
          <template v-slot:description>
            <div>购物车</div>
          </template>
        </bottom-bar-item>
      </div>
      <div>
        <bottom-bar-item path='/profile' color='yellow'>
        <template v-slot:active_img>
            <img src='./assets/img/profile_active.svg'>
          </template>
          <template v-slot:img>
            <img src='./assets/img/profile.svg'>
          </template>
          <template v-slot:description>
            <div>我的</div>
          </template>
        </bottom-bar-item>
      </div>
    </bottom-bar>
  </div>
</template>

<script>
import bottomBar from './components/common/bar.vue'
import bottomBarItem from './components/common/barItem.vue'
export default {
  name: 'app',
  components: {
    bottomBar,
    bottomBarItem
  }
}
</script>
<style>
  @import 'assets/css/base.css';
</style>
