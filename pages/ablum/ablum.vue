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
  flex-direction: column;
  height: 100vh;
  .container{
    flex: 1;
    min-height: 0;
    background-color: seagreen;
  }
}
</style>
