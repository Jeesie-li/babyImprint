<template>
  <view class="ablum flex">
    <navBar></navBar>
    <view class="container">112213</view>
  </view>
</template>

<script setup>
  import navBar from '@/components/navBar/navBar.vue'
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.ablum{
  // display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .container{
    flex: 1;
    width: 100vw;
    background-color: seagreen;
  }
}
</style>
