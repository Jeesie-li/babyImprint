<template>
  <view class="navBar" :style="{height: `${navBarConfig.navBarHeight}rpx`,paddingTop: `${navBarConfig.statusBarHeight}rpx`}">
    1
  </view>
</template>

<script setup>
  import { onMounted,reactive } from 'vue'
  const navBarConfig = reactive({
    statusBarHeight: 0,
    bottomSafeareaHeight: 0,
    platform: '', // 设备机型
    navBarHeight: 0,
  })
  onMounted(()=>{
    getSystemInfo()
  })
  // 获取设备信息
  function getSystemInfo(){
    const res = uni.getSystemInfoSync()
    const menuBtn = uni.getMenuButtonBoundingClientRect()
    console.log(res,'res')
    console.log(menuBtn,'menuBtn')
    navBarConfig.statusBarHeight = res.statusBarHeight * 2
    navBarConfig.navBarHeight = (menuBtn.top + menuBtn.bottom - res.statusBarHeight) * 2
    console.log(navBarConfig)
  }
</script>

<style scoped lang="scss">
  .navBar{
    background-color: red;
  }
</style>;