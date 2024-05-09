<template>
	<view class ="recardlayout">
		<button @click="deleteAllImages" class ="delete">清空历史记录</button>
		
		<view class ="content">
			<view class = "item"
				v-for="(savedImagePath,index) in savedImagePaths1">
				<image :src="savedImagePath" mode = "aspectFill" ></image>
				<view>{{disease1[index]}}</view>
				
			</view>
		</view>
	</view>
	
	
</template>

<script setup>
import { onShow } from "@dcloudio/uni-app";
import { onMounted } from "vue";

	
let savedImagePaths1 = ref([]); 
let disease1 = ref([]);
let qwer = ref(["qwer","qweqr","qwrqwr","qrwr","qrwqwr"]);
// 用于保存图片路径的数组

onShow(()=>{
	console.log("我显示了");
	uni.getStorage({
	    key: 'savedImagePaths',
	    success: function (res) {
	        savedImagePaths1.value = res.data;
	        console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));
	    },
	    fail: function () {
	        console.log('本地存储中没有找到 savedImagePaths 数组，将初始化为空数组');
	    }
	});
	uni.getStorage({
	    key: 'disease',
	    success: function (res) {
	        disease1.value = res.data;
	        console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));
	    },
	    fail: function () {
	        console.log('本地存储中没有找到 disease 数组，将初始化为空数组');
	    }
	});
})

const deleteAllImages = () => {
  // 从本地存储中获取 savedImagePaths 数组
  uni.getStorage({
      key: 'savedImagePaths',
      success: function (res) {
          let savedImagePaths = res.data;
          console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));

          // 遍历数组，删除每一个文件
          for (let i = 0; i < savedImagePaths.length; i++) {
              plus.io.resolveLocalFileSystemURL(savedImagePaths[i], function(entry) {
                  entry.remove(function() {
                      console.log('文件已成功删除');
                  }, function(e) {
                      console.log('文件删除失败：' + e.message);
                  });
              }, function(e) {
                  console.log("Resolve file URL error: " + e.message);
              });
          }

          // 清空数组
          savedImagePaths = [];
		  savedImagePaths1.value = [];

          // 将空数组保存到本地存储
          uni.setStorage({
              key: 'savedImagePaths',
              data: savedImagePaths,
              success: function () {
                  console.log('图片路径已从本地存储中删除');
              }
          });
		  
      },
      fail: function () {
          console.log('本地存储中没有找到 savedImagePaths 数组');
      }
  });
  uni.getStorage({
      key: 'disease',
      success: function (res) {
          let disease = res.data;
          console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));
  
          
          
  
          // 清空数组
          disease = [];
  		  disease1.value = [];
  
          // 将空数组保存到本地存储
          uni.setStorage({
              key: 'disease',
              data: disease,
              success: function () {
                  console.log('图片路径已从本地存储中删除');
              }
          });
  		  
      },
      fail: function () {
          console.log('本地存储中没有找到 disease 数组');
      }
  });
};


</script>

<style lang="scss" scoped>
.recardlayout{
	.delete{
		margin-top: 55rpx;
	}
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:20rpx;
		padding: 20rpx;
		.item{margin-bottom: 40rpx;
			/* display: flex;
			flex-direction: column;
			justify-content: center; */
			height: 230rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
			view{
				display: block;
			}
		}
	}
}
	
</style>