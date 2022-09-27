import Request from "../utils/request.js"
let request = new Request().http

export const swiper =(data) => request({
	url: '/prod-api/api/activity/rotation/list',
	method: 'get',
	data: data
})

export const activityType = (data) =>request({
	url: '/prod-api/api/activity/category/list',
	method: 'get',
	data: data
})

export const activityList = (data) =>request({
	url: '/prod-api/api/activity/activity/list',
	method: 'get',
	data: data
})

/**
 * 获取活动详情
 */
export const activityInfo = (data) => request({
	url: '/prod-api/api/activity/activity/' + data,
	method: 'get'
})

/**
 * 活动报名
 */
export const singUp = (data) =>request({
	url: '/prod-api/api/activity/signup',
	method: 'post',
	data: data
})

/**
 * 判断该用户是否已经报名
 * */
 export const isSingUp = (data) => request({
	 url: '/prod-api/api/activity/signup/check',
	 method: 'get',
	 data: data
 })
 
 /**
  * 发布评论
  */
 export const addCoomment = (data) => request({
	 url: '/prod-api/api/activity/comment',
	 method: "post",
	 data: data
 })
 
 /**
  * 获取活动评论列表
  */
 export const commentList= (data) => request({
	 url: '/prod-api/api/activity/comment/list',
	 method: 'get',
	 data: data
})

/**
 * 获取活动评论数
 */
export const commentNum = (data) => request({
	url: '/prod-api/api/activity/comment/number',
	method: 'get',
	data: data
})