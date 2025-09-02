<template>
  <view class="test">
    <view class="a">a</view>
    <view class="b">b</view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {
      mapState(['count'])
    },
    computed: mapState({
      count: state=>state.count
    }),
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .test{
  	display: flex;
		width: 100%;
		flex-direction: column;
		.a{
			background-color: grey;
		}
		.b{
			background-color: red;
		}
  }
</style>