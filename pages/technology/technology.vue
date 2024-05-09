<template>
	<view class="layout pageBg">
		<view class="tabs">
		      <view :class="{ active: activeTab === 'course' }" @click="changeTab('course')">课堂</view>
		      <view :class="{ active: activeTab === 'text' }" @click="changeTab('text')">文章</view>
		</view>
		<view v-if="activeTab === 'course'">
			<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">学员故事</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in 4">卢世豪同学经过不懈的努力论文达到sci水准</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
			</view>
		
			<view class="course">
				<view class="course_images" v-for="(item, index) in mediaItems" :key="index" >
					<image-card 
					       :imageSrc="item.image"
							imageText="视频"							
							:shunxv="index"
							description=""
							price="¥10.0"
							type="金币 200"
							targetPage="/pages/target/target">
					</image-card>		
				</view>
			</view>
		</view>
		<view v-if="activeTab === 'text'">
			<text-card class="text_card"
						v-for="textCard in textCards"
						:textSrc="textCard.textSrc"
						:title="textCard.title"
						:tag="textCard.tag"
						:num="textCard.num"
			>
			</text-card>
		</view>
		
		
		<!-- <view class="box" v-for="item in pets" :key="item.id">
			<view class="pic">
				<image :src="item.url" mode="widthFix"></image>
			</view>
			<view class="pic_text">{{item.width}}</view>
		</view> -->
	</view>
</template>

<script setup>
let qwe = ref();
const mediaItems = ref([
  { image: "../../static/videos/0.jpg"},
  { image: "../../static/videos/1.jpg"},
  { image: "../../static/videos/2.jpg"},
  {image: "../../static/videos/3.jpg"},
  {image: "../../static/videos/4.jpg"},
  {image: "../../static/videos/5.jpg"},
  {image: "../../static/videos/6.jpg"},
 
]);
	
	
	
	
	
	
import {onReachBottom}  from "@dcloudio/uni-app"

const activeTab = ref('course');
function changeTab(tab) {
  activeTab.value = tab;
}

/* const textCards = ref([
	{
		textSrc:'../../static/texts/播种.jpg',
		title:'小麦播种遇到8大问题，怎么处理？农民一定要注意',
		tag:'#品种',
		num:11415		
	},
	{
		textSrc:'../../static/texts/返青.jpg',
		title:'小麦返青期，怎么防控病虫草害？最新技术，简单明白！',
		tag:'#春季',
		num:5202		
	},
	{
		textSrc:'../../static/texts/除草.jpg',
		title:'小麦春季除草，怎样用药效果好？有答案了！',
		tag:'#春季 #杂草',
		num:2017		
	},
	{
		textSrc:'../../static/texts/浇水.jpg',
		title:'小麦返青“第一水”，浇早吃大亏！什么时候浇？千万要记牢！',
		tag:'#苗期 #成长期 #冬季',
		num:2870		
	},
	{
		textSrc:'../../static/texts/下雪.jpg',
		title:'下雪了！小麦返青肥能趁雪撒施吗？专家给出答案！',
		tag:'#冬季',
		num:6752		
	},
	{
		textSrc:'../../static/texts/弱苗.jpg',
		title:'今年小麦弱苗多，怎么才能夺高产？别担心！春季这样管！',
		tag:'#冬季',
		num:7990	
	},
	{
		textSrc:'../../static/texts/问题.jpg',
		title:'小麦出问题，农民心里急！什么原因？怎么补救？有答案了！',
		tag:'#萌芽期',
		num:4186		
	},
]); */
const textCards = ref([]);


onLoad(()=>{
	uni.request({
		url: 'http://192.168.43.113:3000/text',
		// header: {
		//         'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
		//     },
		// success: res => {
		// 	const experts = ref (res.data.experts);
		// 	console.log(experts);
		// 	console.log(experts[0].avatarSrc)
		//}
	}).then(res=>{
		
		textCards.value = res.data.texts;
		console.log(res.data);
		console.log(textCards); 
	});
	
})
const pets = ref([]);

const network = () => {
	uni.request({
		url:"https://api.thecatapi.com/v1/images/search",
		data:{
			limit:10
		}
	}).then(res=>{
		
		pets.value = [...pets.value, ...res.data];
	})
}

network();
onReachBottom(()=>{
	network()
})

</script>

<style lang="scss" scoped>

.layout{
	padding: 100rpx 30rpx 30rpx 30rpx;
	.tabs{
		margin-bottom: 30rpx;
		display: flex;
		view{flex:1;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  color: #666;
		  &.active { color: black;
		   font-weight: 600;}}
		  
		
	}
	.text_card:first-of-type {
	    border-top-left-radius: 10px;
	    border-top-right-radius: 10px;
	  }
	  .text_card:last-of-type {
	      border-bottom-left-radius: 10px;
	      border-bottom-right-radius: 10px;
	    }
	.text_card{
		width: 100%;
		height: 230rpx;
		}
	.notice{
		width: 690rpx;
		width:100%;
		height:80rpx;
		line-height: 80rpx;
		background: $background-color-lsh;
		margin: 0 auto;
		border-radius: 80rpx;
		display: flex;
		.left{
			width: 200rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
				}
			}
			.text{
				color: $brand-theme-color;
				font-weight: 600;
				font-size: 28rpx;
			}
		}
		.center{
			flex:1;
			swiper{
				height: 100%;
				&-item{
					height: 100%;
					font-size: 30rpx;
					color:#666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.right{
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.course{
		margin: 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.course_images{
			width: calc(50% - 15rpx); /* 减去15rpx是为了添加30rpx的间距 */
			margin: 15rpx 0; /* 上下间距为15rpx */
			
		}
		.image-card {
		  width: 100%;
		}
	}
	
	.box{
		margin-bottom:60rpx;
		box-shadow:0 10rpx 40rpx rgba(0,0,0,0.08);
		border-radius:15rpx;
		overflow:hidden;
		.pic{
			image{
				width: 100%;
			}
		}
		pic_text{
			padding:30rpx;
		}
	}
}
</style>
