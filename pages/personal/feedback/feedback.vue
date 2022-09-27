<template>
	<view class="content">
		<u-navbar fixed placeholder title="意见反馈"></u-navbar>
		<view class="inner-content">
			<u-input v-model="feedback.title" placeholder="请输入反馈标题"></u-input>
		</view>
		<view class="inner-content">
			<u-textarea :count='true' placeholder="请输入反馈内容" :height="200"></u-textarea>
		</view>
		<view class="inner-content">
			<u-button type="primary" @click="addFeedBack()">提交</u-button>
		</view>
	</view>
</template>

<script>
	import { feedback } from "../../../api/user.js"
	export default {
		data() {
			return {
				feedback: {
					content: '',
					title: ''
				}
			}
		},
		methods: {
			addFeedBack() {
				feedback(this.feedback).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title:"提交成功",
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		background-color: #F1F1F1;
	}
	
	.inner-content {
		width: 98%;
		margin: 15rpx auto;
		background-color: white;
	}
</style>
