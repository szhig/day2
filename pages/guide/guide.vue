<template>
	<view class="content">
		<u-swiper :list="list" @change="changeImg" style="height:100%" indicator indicatorMode="dot"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					require("../../static/index/1.jpg"),
					require("../../static/index/2.jpg"),
					require("../../static/index/3.jpg")
				]
			}
		},
		methods: {
			changeImg(index) {
				if(index.current == this.list.length - 1) {
					uni.redirectTo({
						url: "/pages/index/index"
					})
				}
			}
		}
	}
</script>

<style scoped>
	.content >>> .u-swiper__wrapper{
		height: 100% !important;
	}
	
	.content >>> .u-swiper__wrapper__item__wrapper__image {
		height: 100% !important;
	}
</style>
