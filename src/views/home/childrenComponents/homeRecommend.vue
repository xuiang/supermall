<template lang="">
  <div class='recommend'>
    <div v-for='(item,index) in recommends' :key='index' class='recommend-item'>
      <a :href='item.link'>
        <img :src='item.image'>
        {{item.title}}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style>
.recommend{
  display:flex;
  width:100%;
  height:100px;
  justify-content:space-evenly;
  text-align:center;
  font-size:12px;

}
.recommend > .recommend-item > a{
  color:rgb(36,36,36);
}
.recommend > .recommend-item img{
  display:block;
  width:80%;
  margin:5px auto;
}

</style>
