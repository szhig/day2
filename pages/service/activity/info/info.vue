<template>
	<view class="content">
		<u-navbar fixed placeholder></u-navbar>
		<view class="title">
			{{info.name}}
		</view>
		<view class="inner-content">
			<div v-html="info.content" class="info-content"></div>
		</view>
		
		<div class="sign-div">
			<view class="sign-up">
				<u-button type="primary" v-if="!isSingUp" @click="addSignUp">报名</u-button>
				<u-button type="warning" disabled v-else>已报名</u-button>
			</view>
		</div>
		
		<view class="inner-content">
			<u-cell-group title="1">
				<div slot="title">
					评论
				</div>
				<u-cell-group title="1" v-for="(item,index) in commentList" :border="false">
					<div slot="title" class="user">
						<u-avatar :size="50"></u-avatar>
						{{item.nickName}}
					</div>
					<u-cell>
						<div slot='icon'>
							{{item.content}}
						</div>
						<div slot="value">
							<u-icon name="thumb-up"></u-icon>
						</div>
					</u-cell>
				</u-cell-group>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import { activityInfo, isSingUp, singUp, commentList } from "../../../../api/activity.js" 
	export default {
		data() {
			return {
				query: {},
				info: {},
				isSingUp: false,
				commentList: []
			}
		},
		methods: {
			getActivityInfo() {
				return activityInfo(this.query.id).then(res => {
					this.info = res.data
					console.log(1);
				}).then( _ => {
				})
			},
			getIsSingUp() {
				isSingUp({
					activityId: this.info.id
				}).then(res => {
					this.isSingUp = res.isSignup
				})
			},
			addSignUp () {
				singUp({
					'activityId': this.info.id
				}).then(res => {
					if(res.code == 200) {
						this.getIsSingUp()
					}
				})
			},
			getCommentList() {
				commentList({
					activityId: this.info.id,
					pageNum: 1,
					pageSize: 20
				}).then(res => {
					console.log(res);
					this.commentList = res.rows
				})
			}
		},
		onLoad(option) {
			this.query = JSON.parse(decodeURIComponent(option.data))
		},
		mounted() {
			// Promise.resolve()
			new Promise((resolve, reject) => {
				this.getActivityInfo().then( _ => resolve())
			}).then( _ => {
				this.getIsSingUp()
				this.getActivityInfo()
				this.getCommentList()
			}) 
		}
	}
</script>

<style scoped>
	
	.content {
		overflow:  scroll;
	}
	.inner-content {
		width: 98%;
		margin: 15rpx auto;
		background-color: white;
	}
	
	.title {
		font-size: 40rpx;
		text-align: center;
	}
	.sign-div {
		display: flex;
		justify-content: flex-end;
	}
	.sign-up {
		width: 20%;
		margin-right: 15rpx;
	}
	.user {
		display: flex;
		font-size: 28rpx;
		align-items: center;
	}
	.info-content >>> img {
		width: 100% !important;
	}
</style>
