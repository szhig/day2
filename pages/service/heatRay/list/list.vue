<template>
	<view class="content">
		<u-navbar fixed placeholder @leftClick="backTo">
			<div slot="right">
				<u-button @click="toNew" type="primary" text="发布诉求" size="small"></u-button>
			</div>
		</u-navbar>
		<view class="inner-content" v-for="item in list">
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
	import { gov } from "../../../../api/gov.js"
	export default {
		data() {
			return {
				query: {},
				list: [],
				status: {
					'1': '未处理',
					'0': '已处理'
				}
			}
		},
		methods: {
			getGov() {
				gov({
					appealCategoryId: this.query.id,
					pageNum: 1,
					pageSize: 15
				}).then(res => {
					this.list = res.rows
				})
			},
			toNew() {
				uni.navigateTo({
					url: "/pages/service/heatRay/new/new"
				})
			}
		},
		onLoad(option) {
			this.query = JSON.parse(decodeURIComponent(option.data))
			this.getGov()
		}
	}
</script>

<style scoped>
	.tab {
		background-color: #007AFF;
		font-size: 24rpx;
		display: inline-block;
		padding: 5rpx 15rpx;
		color: white;
		margin: 0 15rpx 0 0;
	}
	
	.content {
		background-color: #F1F1F1;
		overflow: scroll;
	}
	
	.inner-content {
		width: 98%;
		margin: 15rpx auto;
		background-color: white;
	}
</style>
