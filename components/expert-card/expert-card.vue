<template>
  <view class="expert-card pageBg">
    <view class="header">
		
      <image class="avatar" :src="avatarSrc" />
      <view class="info">
		  <view class="name">
			  <text>{{ name }}</text>
		  </view>
		  <view class="location">
			  <text>{{ location }}</text>
		  </view>
        
        
      </view>
    </view>
	<view class="box">
    <view class="certification">{{ certification }}</view>
    <view class="stats">
      <view class="left">回答 <text class="count">{{ questionCount }}</text></view>
      <view class="right">最佳回答  <text class="count">  {{ bestAnswerCount }}</text></view>
    </view>
    <text class="research">研究方向 {{ research }}</text>
	</view>
    <view class="tabs">
      <text :class="{ active: activeTab === 'bio' }" @click="changeTab('bio')">专家简介</text>
      <text :class="{ active: activeTab === 'qa' }" @click="changeTab('qa')">回复的问答</text>
    </view>
    <swiper :current="activeTab === 'bio' ? 0 : 1" @change="onSwiperChange">
      <swiper-item style="display: block;">
		  <view class="content1">
			  <slot name="bio">
			<text class="content" style="display: block;">{{qwe}}</text>
		</slot>
		  </view>
        
      </swiper-item>
      <swiper-item>
		  <scroll-view  class="box1" scroll-y="true">
		  	<slot name="qa">
			
		    </slot>
		  </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>

const props = defineProps({
  avatarSrc: String,
  name: String,
  location: String,
  certification: String,
  questionCount: Number,
  bestAnswerCount: Number,
  research: String,
  bio: String,
  qa: String
});

const activeTab = ref('qa'); // 默认显示回复的问答

function changeTab(tab) {
  activeTab.value = tab;
}

function onSwiperChange(e) {
  activeTab.value = e.detail.current === 0 ? 'bio' : 'qa';
}
const qwe = props.bio;
</script>

<style lang="scss" scoped>
.expert-card {
	
	padding:30rpx;
  .header {
    display: flex;
    .avatar {
      width: 110rpx;
      height: 110rpx;
      border-radius: 50%;
    }
    .info {margin-left: 30rpx;
      .name {
		  font-size: 40rpx;
		  
		   }
      .location {
		 
		  padding-top: 10rpx;
		  font-size: 30rpx;
		   }
    }
  }
  .box{
	  margin-top:20rpx;
	  margin-bottom: 30rpx;
	  background-color: #fefefe;
	  padding: 20rpx;
	  border-radius: 10rpx;
	  .certification { 
		  margin-bottom: 30rpx;
		  
	  }
	  .stats {margin-bottom: 30rpx;
		 color: #666;
		  display: flex;
		  .count{
			  margin-left: 10rpx;
			  color:$brand-theme-color;
		  }
		  .left{
			 width: 49%;
		  }
		  .right{
			left: 50%; 
		  }
		  
		  
	  }
	   .research { 
		   color: #666;
		   
	   }
  }
  
  
 
  .tabs {
    display: flex;
	margin-left: 40rpx;
	margin-bottom: 30rpx;
    text {
		margin-right: 40rpx;
		color: #666;
      &.active { color: black;
	   font-weight: 600;}
    }
  }
  swiper{
	 
	  height: 800rpx;
	  swiper-item{
		  display: block;
		  .box1{
			  height: 800rpx;
		  }
		  .content1{height: 800rpx;
			  .bio { display: block;
				  .content{
				  display: block;
	               white-space: pre-wrap;
  }}
		  }
		  
	  };
	 
	  }
	  
  
  
  .qa { }
}
</style>