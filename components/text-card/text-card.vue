<template>
	<view class="text-card">
		<view class="text1">
			<view class="left">
				<view class="title">
					{{title}}
				</view>	
				<view class="bottom">
					<view class="tag">
						{{tag}}
					</view>
					<view class="watch_num">
						<uni-icons type="eye-filled" size="10"></uni-icons>
						<view class="num">{{num}}</view>
					</view>
				</view>
			</view>
			<view class="right">
				<image :src="textSrc" mode="aspectFill">
					
				</image>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	
	
const props = defineProps({
	textSrc:String,
  title:String,
  tag:String,
  num:Number
});
</script>

<style lang="scss" scoped>
.text-card{
	background-color: white;
	padding: 20rpx;
	
	.text1{
		
		
		
		border-bottom: 1px solid #aaa;
		height: 200rpx;
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: space-between;
				
		.left{
			width: 390rpx;
			display: flex;
			
			flex-direction: column;
			justify-content: space-between;
			.title{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.bottom{
				font-size: 24rpx;
				color: #666;
				margin-bottom: 25rpx;
			
				display: flex;
				justify-content: space-between;
				
				align-items: center;
				.watch_num{
					color: #666;
					display: flex;
					align-items: center;
					.num{
						margin-left: 10rpx;
					}
					
				}
			}
		}
		.right{
	
			width:240rpx;
			height: 180rpx;
			image{
				border-radius: 10rpx;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>