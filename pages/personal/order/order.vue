<template>
	<view class="content">
		<u-navbar title="订单列表" fixed placeholder @leftClick="backTo"></u-navbar>
		<u-tabs :list="types" :scrollable="false" class="tabs"></u-tabs>
		<view class="inner-content">
			<u-cell-group title="1" v-for="(item,index) in orderList">
				<div slot="title" class="order-no">
					<div>
						{{item.orderNo}}
						{{item.payTime}}
					</div>
					<div>
						{{item.status}}
					</div>
				</div>
				<u-cell v-for="(order,index) in item.orderItemList">
					<div slot="icon">
						<u-avatar :src="image" :size="80" shape="square"></u-avatar>
					</div>
					<div slot="title">
						<p>{{order.productName}}</p>
						
					</div>
					<div slot="label">
						<p>&yen;{{order.productPrice}}</p>
					</div>
					<div slot="value">
						&times;{{order.totalPrice}}
					</div>
				</u-cell>
				<div class="foot">
					<u-button style="width: 150rpx;" type="warning" size="small">支付</u-button>
					<span style="display: inline-block; width: 20rpx;"></span>
					<u-button style="width: 150rpx;" type="primary" size="small">取消</u-button>
				</div>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types: [{
					name: '待支付'
				}, {
					name: '已完成'
				}, {
					name: '待评价'
				}, {
					name: '退货'
				}],
				orderList: [{
					"id": 19,
					"orderNo": "2021051121282519510",
					"userId": 2,
					"sellerId": 14,
					"amount": 40,
					"postage": null,
					"status": "待支付",
					"paymentType": null,
					"payTime": "2020-01-25 12:01:22",
					"sendTime": null,
					"receiverName": "王先生",
					"receiverPhone": "13800000000",
					"receiverAddress": "大连理工大学 教学楼 A3-118",
					"receiverLabel": null,
					"houseNumber": null,
					"orderItemList": [{
						"id": 20,
						"userId": 2,
						"orderNo": "2021051121282519510",
						"productId": 169,
						"productName": "鱿鱼炒面",
						"productImage": "http://118.190.154.52:7777/profile/uploa d/image/2021/05/09/c025e6a0-f91a-4965-835d-17ce2e7efe44.jpg",
						"productPrice": 20,
						"quantity": 1,
						"totalPrice": 20
					}, {
						"id": 21,
						"userId": 2,
						"orderNo": "2021051121282519510",
						"productId": 170,
						"productName": "芸豆蚬子打卤面",
						"productImage": "http://118.190.154.52:7777/profile/uploa d/image/2021/05/09/882a3bb6-6893-4658-aead-6ace164d0da0.jpg",
						"productPrice": 20,
						"quantity": 1,
						"totalPrice": 20
					}]
				}],
				image: require("../../../static/image/a.jpg")
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content {
		background-color: #F1F1F1;
	}

	.inner-content {
		width: 98%;
		margin: 15rpx auto;
		background-color: white;
	}

	.u-cell {
		border-radius: 10rpx;
	}

	.name {
		font-size: 42rpx;
	}

	.tabs {
		background-color: white;
	}
	.foot {
		display: flex;
		justify-content: flex-end;
		padding: 10rpx 0;
	}
	.u-button {
		margin: 0 !important;
	}
</style>
