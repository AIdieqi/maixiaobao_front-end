<template>
	<view class = "layout">
	<view class = "title">
	还在研发中，尽情期待。。。</view>
	
		<view class = "support">
			<view>如果喜欢请支持作者吧！</view>
			<image src="../../static/pay.jpg" mode ="aspectFill"></image>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.layout{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	view{
		margin: 40rpx;
	}
	.title{
		margin-top: 150rpx;
	}
	.support{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		image{
			weight:500rpx;
			margin-top: 40rpx;
		}
	}
}
	
</style>