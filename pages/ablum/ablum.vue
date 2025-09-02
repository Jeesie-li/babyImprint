<template>
  <view class="ablum">
    <navBar></navBar>
    <view class="container">
			1
		</view>
  </view>
</template>

<script setup>
  import navBar from '@/components/navBar/navBar.vue'
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.ablum{
	display: flex;
  flex-direction: column;
  height: 100vh;
  .container{
    flex: 1;
    // width: 100vw;
    background-color: seagreen;
		
  }
}
</style>
