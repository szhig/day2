<template>
	<view class="content">
		<u-cell isLink style="background-color: #f2ece7;">
			<div slot='icon'>
				<u-avatar :src = "image" :size="150"></u-avatar>
			</div>
			<div slot="title" class="name">
				{{info.nickName}}
			</div>
			<div slot="label">
				{{info.phonenumber}}
			</div>
			<div slot="value"></div>
		</u-cell>
		
		<view class="inner-content">
			<u-cell v-for="(item,index) in operate"  isLink @click="to(item)">
				<div slot="icon">
					<u-icon name="order"></u-icon>
				</div>
				<div slot="label" style='font-size: 30rpx;'>
					{{item.name}}
				</div>
			</u-cell>
		</view>
		
		<view class="inner-content">
			<u-button type="primary" @click="logout">退出登陆</u-button>
		</view>
	</view>
</template>

<script>
	import { userInfo } from "../../api/user.js"
 	export default {
		data() {
			return {
				info: {},
				image: require('../../static/image/a.jpg'),
				operate: [{
					name: '个人信息',
					path: '/pages/personal/userInfo/userInfo'
				},{
					name: '订单列表',
					path: '/pages/personal/order/order'
				},{
					name: '修改密码',
					path: '/pages/personal/reset/reset'
				},{
					name: '意见反馈',
					path: '/pages/personal/feedback/feedback'
				}]
			}
		},
		methods: {
			getUserInfo () {
				userInfo().then(res => {
					this.info = res.user
				})
			},
			to(item) {
				uni.navigateTo({
					url: item.path
				})
			},
			logout() {
				localStorage.removeItem("token")
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		},
		onLoad() {
			this.getUserInfo()
		}
	}
</script>

<style scoped>
	
	.content {
		background-color: #fbfbfb;
	}
	
	.inner-content {
		width: 98%;
		margin: 50rpx auto;
		background-color: white;
	}
	
	.u-cell {
		border-radius: 10rpx;
	}
	
	.name {
		font-size: 42rpx;
	}
</style>
