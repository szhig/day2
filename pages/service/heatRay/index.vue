<template>
	<view class="content">
		<u-navbar fixed placeholder></u-navbar>
		<u-swiper :list="swiper" keyName="imgUrl" :height="400"></u-swiper>
		<view class="inner-content">
			<u-scroll-list>
				<u-grid :col="8" style="width: 200%;">
					<u-grid-item v-for="item in govList" @click="toList(item)">
						<u-avatar :src="item.imgUrl" :size="80" shape="square"></u-avatar>
						<text>{{item.name}}</text>
					</u-grid-item>
				</u-grid>
			</u-scroll-list>
		</view>
		<view class="inner-content" v-for="item in myAppeal">
			<u-cell-group title="1">
				<div slot="title">
					<span class="tab">{{status[item.state]}}</span>{{item.undertaker}}
				</div>
				<u-cell>
					<div slot="title">
						{{item.appealCategoryName}}
					</div>
					<div slot="label">
						提交时间：{{item.createTime}}
					</div>
				</u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import {
		swiper,
		govList,
		myGovList,
		myAppeal
	} from "../../../api/gov.js"
	import operate from "../../../utils/operate.js"
	export default {
		data() {
			return {
				swiper: [],
				govList: [],
				myGovList: [],
				myAppeal: [],
				status: {
					'1': '未处理',
					'0': '已处理'
				}
			}
		},
		methods: {
			getSwiper() {
				swiper().then(res => {
					this.swiper = res.data
					this.swiper.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			getGovList() {
				govList().then(res => {
					this.govList = res.rows
					this.govList.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			getMyGovList() {
				myGovList().then(res => {
					this.myGovList = res.rows
					this.myGovList.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			toList(item) {
				let data = {
					id: item.id
				}

				uni.navigateTo({
					url: "/pages/service/heatRay/list/list?data=" + encodeURIComponent(JSON.stringify(data))
				})
			},
			getMyAppeal() {
				myAppeal().then(res => {
					this.myAppeal = res.rows
					this.myAppeal.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
					console.log(this.myAppeal);
				})
			}
		},
		onLoad() {
			this.getSwiper()
			this.getGovList()
			this.getMyGovList()
			this.getMyAppeal()
		}
	}
</script>

<style>
	.content {
		background-color: #F1F1F1;
	}

	.inner-content {
		width: 100%;
		margin: 15rpx auto;
		background-color: white;
	}
	
	.tab {
		background-color: #007AFF;
		font-size: 24rpx;
		display: inline-block;
		padding: 5rpx 15rpx;
		color: white;
		margin: 0 15rpx 0 0;
	}
</style>
