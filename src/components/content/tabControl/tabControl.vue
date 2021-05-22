vue-<template lang="">
  <div class='tab-control'>
    <div v-for='(item, index) in titles' :key='index' class='tab-control-item' :class='{active:active_ === index}' @click='tabClick(index)'>
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active_: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    tabClick (index) {
      this.active_ = index
      this.$emit('transferKeyword', index)
    }
  }
}
</script>
<style>
.tab-control{
  display:flex;
  line-height:44px;
  text-align:center;
  background-color:white;
}
.tab-control-item{
  flex:1;
  height:44px;
}
.tab-control-item span{
  padding:5px;
}
.active{
  color:pink;
}
.active span{
  border-bottom:3px solid pink;
}
.tab-control{
  position:sticky;
  top:44px;
}
</style>
