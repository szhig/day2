<template>
	<view class="content">
		<u-navbar title="" fixed placeholder></u-navbar>
		<view class="inner-content">
			<image :src="info.imgUrl" mode="aspectFill" style="width: 100%;"></image>
			<p class="name">{{info.name}}</p>
			<p class="decrition">筹款目标：{{info.moneyTotal}}</p>
			<p class="decrition">已筹善款：{{info.moneyNow}}</p>
			<p class="decrition">参与人数：{{info.donateCount}}</p>
			<p class="decrition">创建时间：{{info.createTime}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {}
			}
		},
		methods: {
			
		},
		onLoad(option) {
			this.info = JSON.parse(decodeURIComponent(option.data))
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
	
	.decrition {
		text-indent: 2em;
		font-size: 24rpx;
		padding: 10rpx 0;
	}
	
	.name {
		font-size: 30rpx;
	}
</style>
