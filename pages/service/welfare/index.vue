<template>
	<view class="content">
		<u-navbar title="" fixed placeholder></u-navbar>
		<view class="inner-content">
			<u-search :height="50" @search="search" v-model="searchName"></u-search>
		</view>
			<u-swiper :list="swiper" keyName="imgUrl" :height="400"></u-swiper>
		<view class="inner-content">
			<u-grid col="4">
				<u-grid-item v-for="item in types" @click="toList(item)">
					<u-avatar :src="item.imgUrl" :size="50"></u-avatar>
					<text>{{item.name}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="inner-content" v-for="item in recommend" @click="toInfo(item)">
			<u-cell-group title="1">
				<div slot="title" style="font-size: 34rpx;">
					创办人： {{item.author}}
				</div>
				<u-cell>
					<div slot="icon">
						<u-avatar :src="item.imgUrl" :size="120" shape="square"></u-avatar>
					</div>
					<div slot="title" style="font-size: 30rpx;">
						{{item.name}}
					</div>
					<div slot="label" style="font-size: 24rpx;line-height: 44rpx;">
						<div>
							所需善款：&yen;{{item.moneyTotal}}
						</div>
						<div>
							已筹善款：&yen;{{item.moneyNow}}
						</div>
					</div>
					<div slot="value"></div>
				</u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import { swiper, welfareTypeList, recommendList } from "../../../api/welfare.js"
	import operate from "../../../utils/operate.js"
	export default {
		data() {
			return {
				swiper: [],
				types: [],
				recommend: [],
				searchName: ''
			}
		},
		methods: {
			getSwiper () {
				swiper().then(res => {
					this.swiper = res.data
					this.swiper.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			getTypeList () {
				welfareTypeList().then(res => {
					this.types = res.data
					this.types.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			getRecommend() {
				recommendList().then(res => {
					this.recommend = res.rows
					this.recommend.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			toList(item) {
				let data = {
					id: item.id
				}
				
				uni.navigateTo({
					url: "/pages/service/welfare/list/list?data=" + encodeURIComponent(JSON.stringify(data))
				})
			},
			search() {
				console.log(1);
				let data = {
					name: this.searchName
				}
				uni.navigateTo({
					url: "/pages/service/welfare/list/list?data=" + encodeURIComponent(JSON.stringify(data))
				})
			},
			toInfo(item) {
				uni.navigateTo({
					url:"/pages/service/welfare/info/info?data="  + encodeURIComponent(JSON.stringify(item))
				})
			}
		},
		onLoad() {
			this.getSwiper()
			this.getTypeList()
			this.getRecommend()
		}
	}
</script>

<style scoped>
	.content {
		background-color: #F1F1F1;
	}
	.inner-content {
		background-color: white;
		padding: 10rpx 15rpx;
		margin: 10rpx 0;
	}
	
	.u-cell >>> .u-cell__body__content{
		align-items: flex-start !important;
	}
</style>
