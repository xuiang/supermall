<template lang="">
  <div class='bar-item' :style="color_" @click='getPath'>
    <slot v-if="active" name='active_img'></slot>
    <slot v-else name='img'></slot>
    <slot name='description'></slot>
  </div>
</template>
<script>
  export default {
    name: 'barItem',
    props: {
      path: {
        type: String,
      },
      color: {
        type: String,
        default: 'rgb(214, 37, 121)'
      }
    },
    methods: {
      getPath() {
        this.$router.replace(this.path)
        this.color_ = this.color
      }
    },
    computed: {
      active() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      color_:{
        get() {
          return this.active ? {color: this.color} : {} //注意用this
        },
        set(){}
      }
    }
  }
</script>
<style lang="">
  .bar-item {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }

  .bar-item img {
    display: block;
    width: 30px;
    height: 30px;
  }

  ._active {
    color: rgb(214, 37, 121);
  }
</style>
