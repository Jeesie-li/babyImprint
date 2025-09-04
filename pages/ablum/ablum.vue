<template>
  <scroll-view class="ablum" scroll-y="true">
    <view class="info">
      <navBar></navBar>
      <view class="info-con">
        1
      </view>
    </view>
    <view class="container">
			<CircleItem v-for="ele in 10" :key="ele"></CircleItem>
		</view>
  </scroll-view>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
import CircleItem from '@/components/circleItem/circleItem.vue'
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.ablum{
	display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  // overflow: hidden;
  .info{
    height: 320rpx;
    background: url('/static/bg/bg.jpg') no-repeat 100%;
    background-size: cover;
  }
  .container{
    padding: 0 $uni-padding-l;
    flex: 1;
    background-color: $uni-bg-color-hover;
  }
}
</style>
