<template>
  <view class="profile">
		<uni-card class="card" is-shadow type="line" shadow="0px 0px 1rpx 0rpx rgba(0, 0, 0, 0.08)">
			<uni-section class="section-item user no-border" title="">
				<template v-slot:decoration>
					<view class="left" style="display: flex;align-items: center;">
						<image class="avatar" src="/static/logo.png" mode="aspectFill" ></image>
						<view class="name-con">
							<view class="name">李心艾</view>
							<uni-tag text="爸爸" type="primary" />
						</view>
					</view>
				</template>
				<template v-slot:right>
					<view class="right">
						<text>切换</text>
						<image class="right_icon" src="" mode="aspectFill"></image>
					</view>
				</template>
			</uni-section>
		</uni-card>
    <uni-card class="card" is-shadow type="line" shadow="0px 0px 1rpx 0rpx rgba(0, 0, 0, 0.08)">
			<uni-section v-for="(ele,index) in options" class="section-item" :class="{'no-border': index === options.length - 1 }" :title="ele.title" :key="ele.value">
				<template v-slot:right>
					<uni-icons type="right" size="16"></uni-icons>
				</template>
			</uni-section>
		</uni-card>
  </view>
</template>

<script setup>
const options = [
	{
		title: '联系客服',
		value: 'a'
	},
	{
		title: '我的订单',
		value: 'b'
	}
]
</script>

<style lang="scss" scoped>
.profile{
	height: 100vh;
	overflow-y: scroll;
	background-color: #f4f5f6;
	.card{
		::v-deep .uni-card__content{
			padding: 0 !important;		
		}
		.section-item{
			padding: 0;
			::v-deep .uni-section{
				border-bottom: 1rpx solid rgba(0,0,0,0.08);
				.uni-section-header{
					padding-left: 0;
					padding-right: 0;
				}
			}
			&.no-border {
				::v-deep .uni-section{
					border-bottom: none; // 去掉最后一个元素的底部边框
				}
			}
		}
		.user{
			height: 120rpx;
			.left{
				.avatar{
					width: 80rpx;
					height: 80rpx;
					border-radius: 8rpx;
				}
				.name-con{
					display: flex;
					align-items: center;
					.name{
						margin: $uni-margin-n;
					}
				}
			}
			.right{
				display: flex;
				align-items: center;
				.right_icon{
					width: 32rpx;
					height: 32rpx;
					background-color: greenyellow;
				}
			}
		}
	}
}
</style>
