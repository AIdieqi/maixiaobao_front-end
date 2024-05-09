<template>
  <view class="layout pageBg">
	<view>
		
	</view>
    <expert-card
      v-for="expert in experts"
      :key="expert.id"
      :avatarSrc="expert.avatarSrc"
      :name="expert.name"
      :location="expert.location"
      :certification="expert.certification"
      :questionCount="expert.questionCount"
      :bestAnswerCount="expert.bestAnswerCount"
      :research="expert.research"
      :bio="expert.bio"
      :qa="expert.qa">
	<template #bio>{{expert.bio}}</template>
	<template #qa>
		<view>
			<qa-card
				  v-for="qainfo in qa_info.filter(item => item.expertId === expert.id)"
				  
			      :date="qainfo.date"
			      :question="qainfo.question"
			      :images="qainfo.images"
			      :username="qainfo.username"
			      :answer="qainfo.answer"
			      :views="qainfo.views"
			      :answers="qainfo.answers"
			    />
				</view>
		
	</template>
	</expert-card>
  </view>
</template>

<script setup>
const experts = ref([]);
const qa_info = ref([]);
onLoad(()=>{
	uni.request({
		url: 'http://192.168.43.113:3000/expert',
		// header: {
		//         'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
		//     },
		// success: res => {
		// 	const experts = ref (res.data.experts);
		// 	console.log(experts);
		// 	console.log(experts[0].avatarSrc)
		//}
	}).then(res=>{
		
		experts.value = res.data.experts;
		/* console.log(res.data);
		console.log(experts); */
	});
	uni.request({
		url: 'http://192.168.43.113:3000/questionAnswer',
		// header: {
		//         'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
		//     },
		// success: res => {
		// 	const experts = ref (res.data.experts);
		// 	console.log(experts);
		// 	console.log(experts[0].avatarSrc)
		//}
	}).then(res=>{
		
		qa_info.value = res.data.questionAnswers.map(info => {
		        return {
		            ...info,
		            images: info.images.split(',')
		        };
		    });
		// /console.log(res.data);
		console.log(qa_info.value);
	})
})

/*
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
*/
/*
const experts = ref([
  {
    id: 1,
    avatarSrc: '../../static/zh.jpg',
    
	name: '张浩先生',
	location: '河南',
	certification: '认证专家：河南农业大学 副教授',
	questionCount: 8,
	bestAnswerCount: 4,
	research: '农业信息化与农业大数据、空间信息智能决策、分布式系统与分布计算、边缘计算',
	bio: ' 教授课程：\n\t 算法设计与分析、软件体系结构、高级语言程序设计、面向对象程序设计、计算机科学与技术专业认知讲座、Web应用系统开发、网络编程技\n',
	qa: '这是专家2的问答内容。',
  },
  {
    id: 2,
    avatarSrc: '../../static/lsh.jpg',
	name: '卢世豪',
	location: '河南',
	certification: '认证专家：计算机农业专业技术人员',
	questionCount: 10,
	bestAnswerCount: 5,
	research: '计算机科学与技术',
	bio: '河南农业大学的一名优秀学生',
	qa: '这是专家1的问答内容。',
    
  },
  {
    id: 3,
    avatarSrc: '../../static/images/box1.png',
    name: '匿名',
    location: '深圳',
    certification: '认证专家',
    questionCount: 12,
    bestAnswerCount: 6,
    research: '深度学习',
    bio: '是深度学习领域的领军人物。',
    qa: '这是专家3的问答内容。',
	
  }
]);
*/
</script>

<style lang="scss">
.layout{padding-top: 100rpx;
	
	
}
</style>