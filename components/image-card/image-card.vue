<template>
  <view class="image-card" >
    <view class="image-container" >
      <image :src="props.imageSrc" mode="aspectFill" />  
	
      <image src="../../static/images/video.png" class="overlay-image" @click="showvideo"/>
	  
      <view class="image-text">{{ props.imageText }}</view>
    </view>
	
	<uni-popup ref="asd" @maskClick="pauseVideo(shunxv)" @open="resumeVideo(shunxv)"><video :id="'videoPlayer' + shunxv " :src="currentvideo" controls></video></uni-popup>
	
    <view class="description">{{mediaitems[shunxv].showVideo}}</view>
    <view class="footer">
      <view class="price">{{ props.price }}</view>
      <view class="type">{{ props.type }}</view>
    </view>
  </view>
</template>

<script setup>
let currentvideo = ref();
const props = defineProps({
  imageSrc: String,
  imageText: String,
  description: String,
  price: String,
  type: String,
  targetPage: String,
  shunxv: Number,
})
const mediaitems = ref([
  {  video: '../../static/videos/0.mp4', showVideo: "防治小麦赤霉病，记住这几点很关键" },
  {  video: '../../static/videos/1.mp4', showVideo: "当前小麦田间管理指导建议"},
  {  video: '../../static/videos/2.mp4', showVideo: "小麦突然发黄，千万不要盲目用药" },
  {  video: '../../static/videos/3.mp4', showVideo: "小麦高产科普，病虫害防治技术，什么时间打药？打什么药" },
  
  {  video: '../../static/videos/4.mp4', showVideo: "小麦苗期不同的病虫害，啥时间防治，以及如何防治效果好" },
  {  video: '../../static/videos/5.mp4', showVideo: "小麦赤霉病的发生特点及防治方法" },
  {  video: '../../static/videos/6.mp4', showVideo: "小麦锈病啥时候预防好？具体措施有哪些,三农,农业技术,好看视频" },
  
]);
let videoContext ={}
let videoTimes = {} 

const videoPlayer = ref(null)
const pauseVideo = (videoIndex) => {
	currentvideo.value  = " ";
  // videoContext = uni.createVideoContext('videoPlayer' + videoIndex)
  // console.log(videoContext)
  // videoContext.pause()
  
  videoTimes[videoIndex] = videoContext.currentTime
}
const resumeVideo = (videoIndex) => {
  
  console.log(videoContext)
  videoContext.seeking(videoTimes[videoIndex] || 0)
  videoContext.play()
}

const asd = ref(null)
const showvideo = () =>{
 currentvideo.value = mediaitems.value[props.shunxv].video
	
	console.log(currentvideo);
	asd.value.open();
}





const navigateTo = () => {
  uni.navigateTo({
    url: props.targetPage,
  });
};
</script>




<style  lang="scss" scoped>
.image-card {
	border-radius:10rpx;
    width: 100%;  
	background-color: white;
	  
  uni-popup{
	  z-index: 5;
	  width:750rpx ;
	  height: 100%;
  }
  .image-container {
  position: relative;
  width: 100%;
  height: 200rpx;
  image {
	  border-radius:10rpx;
	  width: 100%;
      height: 100%;
	}
	.image-text {
   position: absolute;
   top: 0;
   left: 0;
		}
  .overlay-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rpx;
  height: 50rpx;
		}
	}
  .image-text {
    background-color: #ccc; 
    font-size: 18rpx; /* 字体大小为16rpx */
    color: #fff; /* 白色字体 */
}

  .description {
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding : 10rpx 20rpx 15rpx 7rpx;
  font-size: 30rpx; /* 字体大小为18rpx */
  color: #000; /* 黑色字体 */
}
  .footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20rpx;
  .price {
	  display: flex;
	  align-items: center;
padding-left: 7rpx;
  font-size: 22rpx; /* 字体大小为20rpx */
  color: #000; 
  text-decoration: line-through
  }
  .type {  
	padding-right: 7rpx;
    font-size: 35rpx; /* 字体大小为22rpx */
    color: #F76C2B; /* 红金色 */
  }
}
  

  
  
}
</style>
