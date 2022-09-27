import Request from "../utils/request.js"
let request = new Request().http

/**
 * 获取用户信息
 */
export const userInfo = (data) => request({
	url: '/prod-api/api/common/user/getInfo',
	method: 'get',
	data: data
})

/**
 * 意见反馈
 */
export const feedback = (data) => request({
	url: "/prod-api/api/common/feedback",
	method: 'post',
	data: data
})

/**
 * 修改用户密码
 */
export const resetPwd = (data) => request({
	url: "/prod-api/api/common/user/resetPwd",
	method: 'put',
	data: data
})

/**
 * 修改用户信息
 */
export const editUserInfo = (data) => request({
	url: '/prod-api/api/common/user',
	method: 'put',
	data: data
})