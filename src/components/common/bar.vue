<template lang="">
  <div class="bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name:'bar',
}
</script>
<style lang="">
.bar{
  position:absolute;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  left:0;
  right:0;
  bottom:0;
  height:49px;
  box-shadow:0 -2px 2px #ccc;
  background-color:#f2f2f2
}
.bar > div{
  display:flex;
  flex:1;
  justify-content:center;
  flex-direction: column;
  align-items: center;
}
</style>
