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
    <view class="add" @click="toAdd">记录</view>
  </scroll-view>
</template>

<script setup>
import navBar from '@/components/navBar/navBar.vue'
import CircleItem from '@/components/circleItem/circleItem.vue'
import { ref } from 'vue'

function toAdd(){
  console.log('跳转')
  uni.navigateTo({
    url: "/subPages/addRecord/addRecord"
  })
}
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
  .add{
    position: fixed;
    right: $uni-margin-l;
    bottom: $uni-margin-l;
    width: 120rpx;
    height: 120rpx;
    text-align: center;
    line-height: 120rpx;
    border-radius: $uni-border-radius-circle;
    background-color: #67d5b5;
    color: #fff;
  }
}
</style>
