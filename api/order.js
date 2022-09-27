import Request from "../utils/request.js"
let request = new Request().http


/**
 * 获取订单列表
 */
export const orderList = (data) => request({
	url: "/prod-api/api/takeout/order/list",
	method: 'get',
	data: data
})