<template>
	<view class="content">
		<u-navbar fixed placeholder title="新建诉求">
			<div slot="center">
				<selection :candidates="candidates" :placeholder="'请选择诉求类别'" @select="onSelect"></selection>
			</div>
		</u-navbar>
		<view class="inner-content">
			<u-form labelWidth="150">
				<u-form-item>
					<u-input placeholder="请输入标题" v-model="gov.title"></u-input>
				</u-form-item>
				<u-form-item>
					<u-textarea placeholder="请输入诉求内容" height="150" v-model="gov.content"></u-textarea>
				</u-form-item>
				<u-form-item>
					<u-input placeholder="请输入承办单位" v-model="gov.undertaker"></u-input>
				</u-form-item>
		<!-- 		<u-form-item>
					<u-input placeholder="请输入反馈手机号" v-model="gov.title"></u-input>
				</u-form-item> -->
			</u-form>
		</view>

		<view class="inner-content">
			<u-button type="primary" @click="publish">发布</u-button>
		</view>
	</view>
</template>

<script>
	import {
		govList,
		create
	} from "../../../../api/gov.js"
	import selection from "../../../../components/selection.vue"
	import operate from "../../../../utils/operate.js"
	export default {
		data() {
			return {
				gov: {
					"appealCategoryId": 0,
					"title": "",
					"content": "",
					"undertaker": "",
					"imgUrl": "/dev-api/profile/upload/image/2022/02/24/82a57 055-3298-4b74-94e0-d2a222d3d19e.png",
				},
				govList: [],
				select:'',
				candidates: [],
				typeId: ''
			}
		},
		methods: {
			getGovList() {
				govList().then(res => {
					this.govList = res.rows
					this.govList.forEach(item => {
						item.imgUrl = operate.api + item.imgUrl
						this.candidates	.push(item.name)
					})
					
				})
			},
			onSelect(index) {
				this.typeId = this.govList[index].id
			},
			publish() {
				if(this.typeId == '') {
					uni.showToast({
						title: "请选择您要诉求的类别",
						icon: "none"
					})
					return
				}
				this.gov.appealCategoryId = this.typeId
				create(this.gov).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title: "发布成功"
						})
					}
				})
			}
		},
		onLoad() {
			this.getGovList()
		},
		components: {
			selection
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

	.u-textarea {
		background-color: #F2ECE7;
		border: none;
	}

	.u-form-item {
		border-bottom: 1px solid #C8C7CC;
		margin-top: 25rpx;
	}
</style>
