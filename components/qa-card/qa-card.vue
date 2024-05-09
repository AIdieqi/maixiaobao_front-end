<template>
  <view class="qa-card" @click="navigateToDetail">
    <view class="date">{{ date }}</view>
	<view class="qc_title">
	<image src="../../static/images/qa.png" ></image>
    <view class="question">{{ question }}</view>
	</view>
    <view class="images">
      <image v-for="(img, index) in images.slice(0, 3)" :src="img" :key="index" mode="aspectFill"></image>
      <view class="image-count" v-if="images.length > 3">共{{images.length}}张</view>
    </view>
	<view class="qc_title">
	<image src="../../static/images/ans.png" ></image>
    <view class="username">{{ username }}</view>
	</view>
    <view class="answer">{{ answer }}</view>
    <view class="stats">{{ views }}人看过, 共{{ answers }}条回答 >></view>
  </view>
</template>

<script setup>


const props = defineProps({
  date: String,
  question: String,
  images: Array,
  username: String,
  answer: String,
  views: Number,
  answers: Number
})

const navigateToDetail = () => {
  uni.navigateTo({
    url: '/pages/detail/detail'
  })
}
</script>

<style lang="scss" scoped>
.qa-card {
	background-color: white;
	margin-top: 30rpx;
	
	border-radius: 10rpx;
	
  .date {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 28rpx;
  }
  .qc_title{
	  display: flex;
	  align-items: center;
	  image{
		  width: 35rpx;
		  height: 35rpx;
		  margin-left: 15rpx;
		  margin-right: 20rpx;
	  }
  }
  .question {
	  font-size: 32rpx;
	  font-weight: 550;
  
  }
  .images {
	  padding-left: 70rpx;
	  margin-top: 20rpx;
	  margin-bottom: 30rpx;
    position: relative;
    image {
		border-radius:10rpx;
      margin-right: 30rpx;
      height: 160rpx;
      width: 160rpx;
    }
    .image-count {
      position: absolute;
      bottom: 5rpx;
      right: 90rpx;
	  background-color: rgba(128, 128, 128, 0.5);
	  color: white;
	  border-radius:10rpx;
      
    }
  }
  .username {
	margin-top: 20rpx;
  margin-bottom: 20rpx;
  }
  .answer {
  padding-left: 70rpx;
  }
  .stats {
	  padding-left: 70rpx;
  margin-top: 30rpx;
  padding-bottom: 30rpx;
  font-size: 24rpx;
  color: #666;
  }
}
</style>