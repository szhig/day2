<template>
	<view class="content">
		<u-navbar title="" fixed placeholder @leftClick="backTo"></u-navbar>
		<view class="inner-content">
			<u-search :height="50" @search="search" v-model="searchName"></u-search>
		</view>
		<view class="inner-content" v-for="item in list" @click="toInfo(item)">
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
							参与人数：{{item.donateCount}}
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
	</view>
</template>

<script>
	import { activityList } from "../../../../api/welfare.js"
	import operate from "../../../../utils/operate.js"
	export default {
		data() {
			return {
				list: [],
				searchName: ""
			}
		},
		methods: {
			getList() {
				activityList({
					typeId: this.query.id ? this.query.id : undefined,
					name: this.query.name ? this.query.name : undefined
				}).then(res => {
					console.log(res);
					this.list = res.rows
					this.list.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
					})
				})
			},
			search() {
				this.query.name = this.searchName
				this.getList()
			},
			toInfo(item) {
				uni.navigateTo({
					url:"/pages/service/welfare/info/info?data="  + encodeURIComponent(JSON.stringify(item))
				})
			}
		},
		onLoad(option) {
			this.query = JSON.parse(decodeURIComponent(option.data))
			this.getList()
			this.searchName = this.query.name
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
