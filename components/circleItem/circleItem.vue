<template>
  <view class="circle-item">
    <view class="time-title">2025-09-03</view>
    <view class="content">
      <view class="header">
        <image src="/static/logo.png" class="avatar" mode="aspectFill"></image>
        <view class="creater">
          <view class="name">吴小越</view>
          <view class="time">14:23</view>
        </view>
      </view>
      <view class="content-txt">
        饭时乖乖”光盘”，午睡也特别省心，自己就能安静入睡。户外活动更是欢乐多多，她体验了敲击游戏的乐趣，还边唱《洗手歌》边配上可爱的动作小模样认真又有趣，看得出来玩得格外开心。每一天都在解锁新技能，真是个让人惊喜的小宝贝!
      </view>
      <view class="imgs">
        <image v-for="ele in 10" class="img" :key="ele" src="/static/logo.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .circle-item{
    padding-bottom: $uni-padding-l;
    .time-title{
      padding: 48rpx 0;
      font-size: 48rpx;
      font-weight: bold;
    }
    .content{
      padding: $uni-padding-l;
      background-color: #fff;
      border-radius: $uni-border-radius-base;
      overflow: hidden;
      .header{
        display: flex;
        align-items: center;
        .avatar{
          margin-right: $uni-margin-l;
          width: 84rpx;
          height: 84rpx;
          border-radius: $uni-border-radius-circle;
        }
        .name{
          margin-bottom: $uni-margin-s;
          font-weight: bold;
          font-size: $uni-font-size-lg;
        }
        .time{
          font-size: $uni-font-size-sm;
          color: $uni-text-color-placeholder;
        }
      }
      .content-txt{
        padding: $uni-padding-n;
        color: $uni-text-color;
        font-size: $uni-font-size-base;
        text-indent: 48rpx;
        line-height: 46rpx;
      }
      .imgs{
        display: grid;
        gap: 20rpx;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        .img{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          border-radius: $uni-border-radius-sm;
        }
      }
    }
  }
</style>