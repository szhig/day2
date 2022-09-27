<template>
	<view class="content">
		<u-navbar title="个人信息" fixed placeholder @leftClikt="backTo"></u-navbar>
		<view class="inner-content">
			<u-form labelWidth="120">
				
				<u-form-item label="头像">
					<u-avatar :src="image" :size="120"></u-avatar>
				</u-form-item>
				<u-form-item label="昵称">
					<u-input v-model="info.nickName"></u-input>
				</u-form-item>
				<u-form-item label="性别">
					<u-input v-model="sex[info.sex]" @focus="showPicker"></u-input>
					<u-picker :columns="picker" :show="show" @confirm="confirm" @cancel="cancel"></u-picker>
				</u-form-item>
				<u-form-item label="联系电话">
					<u-input v-model="showPh" @change="changePw" maxlength="11"></u-input>
				</u-form-item>
				<u-form-item label="邮箱">
					<u-input v-model="info.email"></u-input>
				</u-form-item>
				<u-form-item label="身份证">
					<u-input v-model="info.idCard"></u-input>
				</u-form-item>
			</u-form>
			<u-button type="primary" @click="save" style="margin-top: 55rpx;">保存</u-button>
		</view>
	</view>
</template>

<script>
	import {userInfo, editUserInfo} from "../../../api/user.js"
	import { verifyEmail } from "../../../utils/verify.js"
	export default {
		data() {
			return {
				image: require("../../../static/image/a.jpg"),
				info: {},
				sex: {
					'0':"男",
					'1':"女"
				},
				showPh: '',
				picker: [
					['男','女']
				],
				show: false
			}
		},
		methods: {
			getUserInfo () {
				userInfo().then(res => {
					this.info = res.user
					this.showPh = this.info.phonenumber
					this.showPh = this.showPh.slice(0,7) + "****"
				})
			},
			changePw(ph) {
				if(this.showPh.length > 7) {
					this.info.phonenumber += ph.charAt(ph.length-1)
					this.showPh = this.showPh.slice(0,7) + this.addStar(this.showPh.length - 7)
				} else {
					this.info.phonenumber = this.showPh
				}
			},
			addStar(len) {
				let str = ""
				for(var i = 0; i< len; i++) {
					str += "*"
				}
				return str
			},
			confirm(value) {
				this.info.sex = value.indexs[0]
				this.show = false
			},
			cancel() {
				this.show = false
			},
			showPicker() {
				this.show = true
			},
			save() {
				if(!verifyEmail(this.info.email)) {
					uni.showToast({
						title: "邮箱格式不正确",
						icon: 'none'
					})
					return;
				}
				editUserInfo(this.info).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title:'保存成功',
							duration: 2000
						})
					}
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
		margin-top: 25rpx;
	}
</style>
