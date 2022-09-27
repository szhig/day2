import Request from "../utils/request.js"
let request = new Request().http

/**
 * 获取轮播图
 * */
export const swiper = (data) => request({
	url: "/prod-api/api/rotation/list",
	method: 'get',
	data: data
})

/**
 * 获取全部服务
 */
export const serviceAllList = (data) => request({
	url: "/prod-api/api/service/list",
	method: 'get',
	data: data
})

/**
 * 获取新闻分类
 */
export const newsTypeList = (data) => request({
	url: "/prod-api/press/category/list",
	method: 'get',
	data: data
})

/**
 * 获取新闻详情
 */
export const newsList = (data) => request({
	url: '/prod-api/press/press/list',
	method: 'get',
	data: data
})
