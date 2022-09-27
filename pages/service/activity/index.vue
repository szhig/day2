<template>
	<view class="content">
		<u-navbar fixed placeholder></u-navbar>
		<u-swiper :list="swiper" keyName="advImg" height="400"></u-swiper>
		<u-tabs :list="activityType" keyName="name" :scrollable="false" @change="changeTab" style="background-color: white;margin-top: 15rpx;"></u-tabs>
		<div class="list">
			<view class="inner-content" v-for="(item,index) in activityList" @click="toInfo(item)">
				<u-cell>
					<div slot="icon">
						<u-avatar :src="item.imgUrl" :size="150" shape="square"></u-avatar>
					</div>
					<div slot="title" class="title">
						{{item.name}}
					</div>
					<div slot="label" class="label">
						<p>报名人数：{{item.signupNum}}</p>
						<p>发布时间；{{item.publishTime}}</p>
					</div>
					<div slot="value"></div>
				</u-cell>
			</view>
		</div>
	</view>
</template>

<script>
	import { swiper, activityList, activityType } from "../../../api/activity.js"
	import operate from "../../../utils/operate.js"
	export default {
		data() {
			return {
				swiper: [],
				activityList: [],
				activityType: [],
				typeId: 0
			}
		},
		methods: {
			getSwiper () {
				swiper().then(res => {
					this.swiper = res.rows
					this.swiper.forEach( item => {
						item.advImg = operate.api + item.advImg
					})
				})
			},
			getActivityList () {
				activityList({
					categoryId: this.typeId
				}).then(res => {
					this.activityList = res.rows
					this.activityList.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			getActivityType () {
				activityType().then(res => {
					this.activityType = res.data
					this.typeId = this.activityType[0].id
					this.getActivityList()
				})
			},
			changeTab(index) {
				this.typeId = index.id
				this.getActivityList()
			},
			toInfo(item) {
				let data= {
					id: item.id
				}
				uni.navigateTo({
					url: "/pages/service/activity/info/info?data= " + encodeURIComponent(JSON.stringify(data))
				})
			}
		},
		onLoad() {
			this.getSwiper()
			this.getActivityType()
		}
	}
</script>

<style scoped>
	.content {
		background-color: #F1F1F1;
		overflow:  scroll;
	}
	.inner-content {
		width: 98%;
		margin: 15rpx auto;
		background-color: white;
	}
	.inner-content >>> .u-cell__body__content {
		align-items: flex-start !important; 
	}
	.title {
		font-size: 34rpx;
		text-overflow: ellipsis;
		display:-webkit-box;
		overflow: hidden; /*超出隐藏*/
		text-overflow: ellipsis;/*隐藏后添加省略号*/
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:1;
	}
	.label{ 
		font-size: 26rpx;
	}
</style>
