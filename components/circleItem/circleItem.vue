<template>
  <view class="circle-item">
    <view class="tiem">2025-09-03</view>
    <view class="content">
      <view class="header">
        <image src="/static/logo.png" class="avatar" mode="aspectFill"></image>
        <view class="creater">
          <view class="name">吴小越</view>
          <view class="time">14:23</view>
        </view>
      </view>
      <view class="content">
        饭时乖乖”光盘”，午睡也特别省心，自己就能安静入睡。户外活动更是欢乐多多，她体验了敲击游戏的乐趣，还边唱《洗手歌》边配上可爱的动作小模样认真又有趣，看得出来玩得格外开心。每一天都在解锁新技能，真是个让人惊喜的小宝贝!
      </view>
      <view class="imgs">
        <image v-for="ele in 9" class="img" :key="ele" src="/static/logo.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .circle-item{
    .content{
      padding: $uni-padding-n;
      background-color: #fff;
      border-radius: $uni-border-radius-base;
      overflow: hidden;
      .header{
        display: flex;
        align-items: center;
        .avatar{
          margin-right: $uni-margin-n;
          width: 84rpx;
          height: 84rpx;
          border-radius: $uni-border-radius-circle;
        }
      }
      .imgs{
        display: grid;
        grid-column: 3;
        gap: 20rpx;
        grid-template-columns: repeat(3,33.33%);
        grid-template-rows: 120rpx 120rpx 120rpx;
        .img{
          // width: 100%;
        }
      }
    }
  }
</style>