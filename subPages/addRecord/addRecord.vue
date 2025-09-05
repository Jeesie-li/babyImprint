<template>
  <view class="add-record">
    <uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
    <view class="imgs">
      <view class="title">上传图片</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<style scoped lang="scss">
.add-record{
  height: 100vh;
  background-color: red;
}
</style>
