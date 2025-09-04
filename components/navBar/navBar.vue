<template>
  <view class="navBar" :style="{height: `${navBarConfig.navBarHeight}px`,paddingTop: `${navBarConfig.statusBarHeight}px`}">
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
    navBarConfig.statusBarHeight = res.statusBarHeight
    navBarConfig.navBarHeight = (res.statusBarHeight + menuBtn.height + (menuBtn.top - res.statusBarHeight) * 2)
  }
</script>

<style scoped lang="scss">
  .navBar{
  }
</style>;