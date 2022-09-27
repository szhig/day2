import Request from "../utils/request.js"
let request = new Request().http

export const swiper = (data) => request({
	url:  "/prod-api/api/public-welfare/ad-banner/list",
	method: 'get',
	data: data
})

/**
 * 公益分类列表
 */
export const welfareTypeList = (data) => request({
	url: "/prod-api/api/public-welfare/public-welfare-type/list",
	method: 'get',
	data: 'data'
})

/**
 * 被推荐的公益列表
 */
export const recommendList = (data) => request({
	url: '/prod-api/api/public-welfare/public-welfare-activity/recommend-list',
	method: 'get',
	data: data
})

/**
 * 获取某个分类下的所有公益
 */
export const activityList = (data) => request({
	url: '/prod-api/api/public-welfare/public-welfare-activity/list',
	method: 'get',
	data: data
})