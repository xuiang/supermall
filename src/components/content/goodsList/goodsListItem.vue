<template lang="">
  <div class='goods-list-item'>
    <a :href='goodsDetail.link'>
      <img :src='goodsDetail.show.img'>
      <p>{{goodsDetail.title}}</p>
    </a>
    <span class='price'>{{goodsDetail.orgPrice}}</span>
    <span class='favorite'>{{goodsDetail.cfav}}</span>
  </div>
</template>
<script>
export default {
  name: 'goodsListItem',
  props: {
    goodsDetail: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style>
.goods-list-item{
  display:inline-block;
  width:50%;
  font-size:12px;
  color:#bbb;
}
.goods-list-item p{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.goods-list-item img{
  display:inline-block;
  width:100%;
  border-radius:5px;
}
.goods-list-item .price{
  float:left;
  margin-left:10px;
  color:pink;
}
.goods-list-item .favorite{
  float:right;
  margin-right:10px;
}
</style>
