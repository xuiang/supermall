<template>
  <div class="nav-bar">
    <div class='left'><slot name='left'></slot></div>
    <div class='center'><slot name='center'></slot></div>
    <div class='right'><slot name='right'></slot></div>
  </div>
</template>
<script>
export default {
  name: 'navigationbar'
}
</script>
<style>
  .nav-bar{
    display: flex;
    width:100vw;
    height:44px;
    box-shadow:1px 0 1px rgba(100,100,100);
    background-color:pink;
    color:#fff;
    line-height:44px;
    text-align:center;
  }
  .nav-bar > .left, .right{
    width:60px;
  }
  .nav-bar > .center{
    flex:1;
  }
</style>
