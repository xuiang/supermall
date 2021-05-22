<template lang="">
  <div class='goods-list-item'>
    <a :href='goodsDetail.link'>
      <img :src='goodsDetail.show.img'>
    </a>
    <p>{{goodsDetail.title}}</p>
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
  width:49%;
  font-size:12px;
}
.goods-list-item p{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.goods-list-item a{
  display:block;
  height:87%;
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
.goods-list-item .favorite::before{
  content:'';
  bottom:1px;
  left:-14px;
  display:inline-block;
  vertical-align:bottom;
  width:14px;
  height:14px;
  background-image: url('~assets/img/home/favorite.png');
  background-size:14px 14px;
}
</style>
