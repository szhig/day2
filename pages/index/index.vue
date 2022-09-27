<template>
	<view class="content">
		<div style="padding: 15rpx;background-color: white;">
			<u-search :height="50" style="background-color: white;margin-bottom: 20rpx;"></u-search>
		</div>
		<u-swiper :list="swiperList" :keyName="'advImg'" :height="300"></u-swiper>
		<view class="inner-contents">
			<u-grid :list="serviceList" :col="5">
				<u-grid-item v-for="item in serviceList" style="margin-top: 15rpx;" :key="item.id"  @click="toService(item)">
					<u-avatar :src="item.imgUrl" :size="70"></u-avatar>
					<text>{{item.serviceName}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="inner-content" style="background-color: white;">
			<u-tabs :list="newsTypeList" keyName="name" @change="changeNews"></u-tabs>
		</view>
		
		<view class="inner-content" v-for="item in newsAllList" :key="item.id">
			<u-cell>
				<div slot="icon">
					<u-avatar :src="item.cover" mode="" :size="200" shape="square"></u-avatar>
				</div>
				<div slot="title" class="title">
					{{item.title}}
				</div>
				<div slot="label" class=:news-content>
					<div v-html="item.content" class="news">
						
					</div>
				</div>
			</u-cell>
		</view>
	</view>
</template>

<script>
	import { swiper, serviceAllList, newsTypeList, newsList } from '../../api/common.js'
	import operate from "../../utils/operate.js"
	export default {
		data() {
			return {
				swiperList: [],
				serviceList: [],
				newsTypeList: [],
				newsAllList: [],
				typeId: 0
			}
		},
		methods: {
			getSwiper() {
				swiper().then(res => {
						this.swiperList = res.rows
						this.swiperList.forEach(item => {
							item.advImg = operate.api + item.advImg
						})
				})
			},
			getServiceList () {
				serviceAllList().then(res => {
					this.serviceList = res.rows
					// this.serviceList.length = 9
					this.serviceList.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			getNewsType() {
				newsTypeList().then(res => {
					this.newsTypeList= res.data
					this.typeId = this.newsTypeList[0].id
					this.getNewsList()
				})
			},
			getNewsList() {
				newsList({
					type: this.typeId
				}).then(res => {
					console.log(res);
					this.newsAllList = res.rows
					this.newsAllList.forEach(item => {
						item.cover = operate.api + item.cover
					})
				})
			},
			changeNews(index) {
				this.typeId = index.id
				this.getNewsList()
			},
			toService(item) {
				console.log(item);
				uni.navigateTo({
					url: "/pages/service/" + item.link
				})
			}
		},
		onLoad() {
			this.getServiceList()
			this.getSwiper()
			this.getNewsType()
			
		}
	}
</script>

<style scoped>
	.content {
		background-color: #F1F1F1;
		overflow: scroll;
	}
	.inner-content {
		width: 98%;
		margin: 15rpx auto;
		background-color: white;
		overflow: scroll;
	}
	.u-grid {
		background-color: white;
		padding: 10px 0;
	}
	.title {
		font-size: 28rpx;
	}
	.news {
		height: 120rpx;
		overflow: hidden;
		line-height: 40rpx;
		text-overflow: ellipsis;
		display:-webkit-box;
		overflow: hidden; /*超出隐藏*/
		text-overflow: ellipsis;/*隐藏后添加省略号*/
		-webkit-box-orient:vertical; 
		-webkit-line-clamp:3;
	}
	
</style>
