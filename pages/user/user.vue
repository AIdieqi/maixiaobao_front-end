<template>
  <view class="userlayout pageBg">
	<view class="userinfo">
		<view class="avatar">
			<image src="../../static/images/box1.png"></image>
		</view>
		<view class="nickname">尊贵的麦小保用户</view>
		<view class="address">来自于：河南</view>
	</view>
	<view class="section">
		<view class="list">
			<view class="row" @click="recards">
				<view class="left" >
					<uni-icons type="list" size="20"></uni-icons>
					<view class="text" >检测记录</view>
				</view>
				<view class="right">
					<view class="text">{{savedImagePaths.length}}</view>
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
		
				</view>
			</view>
			<view class="row" @click="qas">
				<view class="left">
					<uni-icons type="compose" size="20"></uni-icons>
					<view class="text">我的问答</view>
				</view>
				<view class="right">
					<view class="text">0</view>
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					
				</view>
			</view>
		</view>
	</view>
	<view class="section">
		<view class="list">
			<view class="row" @click="qas">
				<view class="left">
					<uni-icons type="chatboxes-filled" size="20"></uni-icons>
					<view class="text">意见反馈</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
		
				</view>
			</view>
			<view class="row" @click="qas">
				<view class="left">
					<uni-icons type="auth-filled" size="20" color="#28b389"></uni-icons>
					<view class="text">认证专家</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					
				</view>
			</view>
		</view>
	</view>
  </view>
</template>


<script setup>
function recards () {
  uni.navigateTo({ url: './record' });
}

function qas (){
	uni.navigateTo({ url: './qa' });
}
let savedImagePaths = ref([]); 
// 用于保存图片路径的数组

onShow(()=>{
	console.log("我显示了");
	uni.getStorage({
	    key: 'savedImagePaths',
	    success: function (res) {
	        savedImagePaths.value = res.data;
	        console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));
	    },
	    fail: function () {
	        console.log('本地存储中没有找到 savedImagePaths 数组，将初始化为空数组');
	    }
	});
})

</script>

<style lang="scss" scoped>
.userlayout{
	padding-top: 100rpx;
	.userinfo{
		
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			width: 190rpx;
			height: 190rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				
			}
		}
		.nickname{
			font-size: 44rpx;
			color: #333;
			padding: 20rpx 0 5rpx;
			
		}
		.address{
			font-size: 28rpx;
			color: #aaa;
		}
	}
	
	.section{
		width: 690rpx;
		margin: 100rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid #eee;
				position: relative;
				background-color: white;
				&:last-child{border-bottom: 0}
				.left{
					display: flex;
					align-items: center;
					:deep(){
						.uni-icons{
							color: $brand-theme-color  !important;
						}
					}
					.text{
						padding-left: 20rpx;
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						font-size: 28rpx;
						color: #aaa;
					}
				}
			}
		}
	}
}

</style>
