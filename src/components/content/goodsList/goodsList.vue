<template lang="">
  <div class='goods-list'>
    <goods-list-item v-for='(item, index) in goodList' :key='index' :goodsDetail='item'/>
  </div>
</template>
<script>
import goodsListItem from './goodsListItem.vue'
export default {
  name: 'goodsList',
  components: {
    goodsListItem
  },
  props: {
    goodList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style>

</style>
