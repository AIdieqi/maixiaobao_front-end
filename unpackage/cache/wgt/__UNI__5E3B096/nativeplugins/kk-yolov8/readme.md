### YoloV8目标识别

1、插件说明 此插件实现yoloV8目标识别算法。


2、代码示例
```
<template>
	<view class="uni-container">
		<view class="uni-hello-text">
			<text class="hello-text">YoloV8识别演示</text>
		</view>
		<button type="primary" plain="true" @click="testYoloV8()">YoloV8</button>
	</view>
</template>

```

```
<script>
// 获取 module
const yolov8 = uni.requireNativePlugin('kk-yolov8');
export default {

    onLoad() {
        
    },
    methods: {
        testYoloV8() {
            testYolov8() {
            	yolov8.create({
            		model: "/storage/emulated/0/Download/yolov8s.onnx"
            	}, ret => {
            		if (ret['code'] == 0) {
            			uni.chooseImage({
            				count: 1, //默认9
            				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            				sourceType: ['album', 'camera'], //从相册选择
            				success: res => {
            					const image_path = plus.io.convertLocalFileSystemURL(res
            						.tempFilePaths[
            							0]);
            					yolov8.predict({
            						image: image_path,
            						threshold: 0.5,
            					}, ret => {
            						uni.showModal({
            							title: '识别结果',
            							content: JSON.stringify(ret),
            							showCancel: false
            						});
            					})
            				}
            			})
            		} else {
            			uni.showModal({
            				title: '模型加载',
            				content: '加载模型失败',
            			});
            		}
            	})
            }
        }
    }
}
</script>

```