<template>
  <view class="homelayout pageBg">
	  
    <image class="upload-image" :src="dissss" @click="testYoloV8()"></image>
	<uni-icons  class= "icon1" type="camera" size="30" color="white" @click="testYoloV8()"></uni-icons>

	<view class="title1">识别结果</view>
	<view class="result">
		<view class="title2">{{dis}}</view>
		<view class="result_card">
			<image :src="disss" mode="aspectFill"></image>
			<view class="right">
				<view class="jianjie">{{diss}}
				</view>
				<view class="detail">
					详情 >
				</view>
			</view>
		</view>
	</view>	
	
	<view class="consultation">
		<view class="title3"></view>
		<view class="consultation_box"></view>
	</view>
	<view class="title4">相关回答</view>
	<view class="qa-card-home">
	<qa-card 
					v-for="qainfo in qa_info"
			      :date="qainfo.date"
			      :question="qainfo.question"
			      :images="qainfo.images"
			      :username="qainfo.username"
			      :answer="qainfo.answer"
			      :views="qainfo.views"
			      :answers="qainfo.answers"
				  >
		
	</qa-card>
	</view>
  </view>
</template>

<script setup>	
const yolov8 = uni.requireNativePlugin('kk-yolov8');
const detection = ref([]);
let maxConfidenceObject = ref([]);
let classId = ref(0);
const dissss = ref ("../../static/disease/scab.JPG");
const dis = ref("赤霉病");
const diss = ref('小麦赤霉病又称烂穗病、麦秸枯、烂麦头、红麦头、红头瘴，是由多种镰刀菌侵染所引起的、发生在小麦上的病害。');
const disss = ref ("../../static/disease/scab.JPG");
const disease = ref(['健康麦穗','健康麦叶','健康麦秆','赤霉病','叶锈病','条锈病','秆锈病','小麦壳针孢斑病','未检测到病害']);
const qa_info = ref([
	{
		date: '2024-04-08',
		question: '这是杆锈病吗？',
		images: ['../../static/disease/stem_rust.jpg', '../../static/disease/stem_rust.jpg', '../../static/disease/stem_rust.jpg','../../static/disease/stem_rust.jpg'],
		username: 'lsh',
		answer: '小麦秆锈病是由禾柄锈菌小麦变种引起的、发生在小麦的病害。主要为害小麦的茎秆和叶鞘，也可为害叶片和穗部。',
		views: 123,
		answers: 4,
	},
	{
		date: '2024-04-09',
		question: '这是赤霉病吗？',
		images: ['../../static/disease/scab.JPG', '../../static/disease/scab.JPG', '../../static/disease/scab.JPG', '../../static/disease/scab.JPG'],
		username: '银河系的一名专家',
		answer: '是的，小麦赤霉病又称烂穗病、麦秸枯、烂麦头、红麦头、红头瘴，是由多种镰刀菌侵染所引起的、发生在小麦上的病害。',
		views: 123,
		answers: 4,
	},
	{
		date: '2024-04-08',
		question: '我这养的小麦好吗？',
		images: ["../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg","../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg"],
		username: '啦啦啦阿联',
		answer: '好，挺不错的',
		views: 123,
		answers: 4,
	},
])

const result =['小麦很健康','小麦很健康','小麦很健康','小麦赤霉病又称烂穗病、麦秸枯、烂麦头、红麦头、红头瘴，是由多种镰刀菌侵染所引起的、发生在小麦上的病害。','小麦叶锈病又称黄疸病，是由小麦隐匿柄锈菌侵染所引起的、发生在小麦上的病害。主要危害小麦叶片，产生疱疹状病斑，很少危害叶鞘和茎秆。','小麦条锈病是由条形柄锈菌引起的、发生在小麦的病害。该病自小麦出苗至成熟都有可能会发生，危害的主要部位是叶片，其次是叶鞘、茎秆，也侵染穗部、颖壳和芒等组织。','小麦秆锈病是由禾柄锈菌小麦变种引起的、发生在小麦的病害。主要为害小麦的茎秆和叶鞘，也可为害叶片和穗部。','又称小麦斑枯病。主要为害叶片、叶鞘，也为害茎部和穗部。','请对准小麦病害关键部分拍照'];
const diseasesrc = ["../../static/disease/wheat.jpg","../../static/disease/wheat.jpg","../../static/disease/wheat.jpg","../../static/disease/scab.JPG","../../static/disease/leaf_rust.JPG","../../static/disease/stripe_rust.png","../../static/disease/stem_rust.jpg","../../static/disease/septoria.JPG"];

let lshmodel = "/storage/emulated/0/Android/data/lushihao.maixiaobao/apps/__UNI__5E3B096/www/static/best.onnx";

let savedImagePaths = []; // 用于保存图片路径的数组
let disease1 = [];




const testYoloV8 = () => {
	uni.getStorage({
	    key: 'savedImagePaths',
	    success: function (res) {
	        savedImagePaths = res.data;
	        console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));
	    },
	    fail: function () {
			savedImagePaths = [];
	        console.log('本地存储中没有找到 savedImagePaths 数组，将初始化为空数组');
	    }
	});
	uni.getStorage({
	    key: 'disease',
	    success: function (res) {
	        disease1 = res.data;
	        console.log('从本地存储中获取的图片路径：' + JSON.stringify(res.data));
	    },
	    fail: function () {
			disease1 = [];
	        console.log('本地存储中没有找到 savedImagePaths 数组，将初始化为空数组');
	    }
	});
	
    yolov8.create({
        model: lshmodel 
    }, ret => {
        if (ret['code'] == 0) {
            uni.chooseImage({
                count: 1, //默认9
                sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], //从相册选择
                success: res => {
                    const image_path = plus.io.convertLocalFileSystemURL(res.tempFilePaths[0]);
						uni.saveFile({
					    tempFilePath: image_path,
					    success: function (saveFileRes) {
							
					        const savedFilePath = saveFileRes.savedFilePath;
					        const newFileName = savedImagePaths.length.toString() + '.jpg'; // 新的文件名，使用数组的长度
					        const newFilePath = savedFilePath.substring(0, savedFilePath.lastIndexOf('/')+1) + newFileName;
					        plus.io.resolveLocalFileSystemURL(savedFilePath, function(entry) {
					            plus.io.resolveLocalFileSystemURL(newFilePath.substring(0, newFilePath.lastIndexOf('/')+1), function(dirEntry) {
					                entry.moveTo(dirEntry, newFileName, function(target) {
					                    console.log('图片已重命名并保存到：' + target.fullPath);
					                    savedImagePaths.push(target.fullPath); // 将新的文件路径添加到数组中
					    
					                    // 将数组保存到本地存储
					                    uni.setStorage({
					                        key: 'savedImagePaths',
					                        data: savedImagePaths,
					                        success: function () {
					                            console.log('图片路径已保存到本地存储');
					                        }
					                    });
					                }, function(e) {
					                    console.log('图片重命名失败：' + e.message);
					                });
					            }, function(e) {
					                console.log("Resolve directory URL error: " + e.message);
					            });
					        }, function(e) {
					            console.log("Resolve file URL error: " + e.message);
					        });
					    }
					})
					
					
                    yolov8.predict({
                        image: image_path,
                        threshold: 0.1,
                    }, ret => {
                       detection.value = ret;
					   if (detection.value.length > 0){
					   console.log(detection.value);
					   maxConfidenceObject = detection.value.reduce((max, obj) => max.confidence > obj.confidence ? max : obj);
					   classId = maxConfidenceObject.class_id;
					   
					   dis.value = disease.value[classId];
					   diss.value = result[classId];
					   disss.value = diseasesrc[classId];
					   dissss.value = image_path;
					   disease1.push(disease.value[classId]);
					   uni.setStorage({
					       key: 'disease',
					       data: disease1,
					       success: function () {
					           console.log('病害类型已保存');
					       }
					   });
					   }
					   else{
						   dis.value = disease.value[8];
						   diss.value = result[8];
						   disss.value = diseasesrc[8];
						   dissss.value = image_path;
						   disease1.push(disease.value[8]);
						   uni.setStorage({
						       key: 'disease',
						       data: disease1,
						       success: function () {
						           console.log('病害类型已保存');
						       }
						   });
					   }
                    })
                }
            })
        } else {
            uni.showModal({
                title: '模型加载',
                content: '加载模型失败',
            });
        }
    });
	
}

</script>

<style lang="scss" scoped>
.homelayout {
	position: relative;
	width: 100%;
	padding-top: 100rpx;
    height: 100%;
	.icon1{
		position: absolute;
		top: 39%;
		right: 5%;
	}
	.upload-image {
	width: 100%; /* 设置宽度为100% */
	height: 40%; /* 占屏幕高度的2/5 */
	}
    .title1{
		margin: 50rpx 0 0 40rpx;
		
		
		
	}
	.result{
		
		background-color: white;
		padding: 30rpx;
		margin: 30rpx;
	.title2{
		margin: 10rpx 0 30rpx 0;
		font-size: 35rpx;
		font-weight: 500;
		
		
	}
	.result_card{
		display: flex;
		border-radius: 10rpx;
		image{
			width: 180rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}
		.right{position: relative;
			.jianjie{
				width: 430rpx;
				height: 150rpx;
				margin-left: 30rpx;
				padding-right: 30rpx;
				font-size: 25rpx;
				overflow: hidden;
			text-overflow: ellipsis;
			}
			.detail{
				position: absolute;
				color: plum;
				font-size: 20rpx;
				  right: 0;
				  bottom: 0;
			}
			
			
		}
	}
	}
	.qa-card-home{
		background-color: $background-color-lsh;
		
		padding: 30rpx;
	}
  
}

</style>
