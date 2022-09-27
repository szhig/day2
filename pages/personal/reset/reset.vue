<template>
	<view class="content">
		<u-navbar fixed placeholder title="修改密码"></u-navbar>
		<view class="inner-content">
			<u-form labelWidth="120">
				<u-form-item label="原密码">
					<u-input v-model="pwd.oldPassword" placeholder="请输入原密码"></u-input>
				</u-form-item>
				<u-form-item label="新密码">
					<u-input v-model="pwd.newPassword" placeholder="请输入新密码"></u-input>
				</u-form-item>
				<u-form-item label="确认密码">
					<u-input v-model="pwd.comfirmPwd" placeholder="请确认密码"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<view class="inner-content">
			<u-button type="primary" @click="reset()">保存</u-button>
		</view>
	</view>
</template>

<script>
	import {resetPwd} from "../../../api/user.js"
	export default {
		data() {
			return {
				pwd: {
					oldPassword: "",
					newPassword: "",
					comfirmPwd: ""
				}
			}
		},
		methods: {
			reset() {
				if(this.pwd.newPassword != this.pwd.comfirmPwd) {
					uni.showToast({
						title: '两次密码不一致',
						icon:'none'
					})
					return
				}
				resetPwd(this.pwd).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title: '修改成功',
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		background-color: #f2ece7;
	}
	
	.inner-content {
		width: 98%;
		margin: 25rpx auto;
	}
	
	.u-input {
		border: none;
	}
	
	.u-form-item {
		border-bottom: 1px solid #C8C7CC;
	}
</style>
