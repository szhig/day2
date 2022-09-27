import Request from "../utils/request.js"
let request = new Request().http

/**
 * 获取轮播图
 */
export const swiper = (data) => request({
	url: '/prod-api/api/gov-service-hotline/ad-banner/list',
	method: 'get',
	data: data
})

/**
 * 获取所有诉求分类
 */
export const govList = () => request({
	url: '/prod-api/api/gov-service-hotline/appeal-category/list',
	method: 'get'
})

/**
 * 我的诉求列表
 */
export const myGovList = (data) => request({
	url: '/prod-api/api/gov-service-hotline/appeal/my-list',
	method: 'get',
	data: data
}) 

/**
 * 分页查询某个诉求分类下的所有诉求
 */
export const gov = (data) => request({
	url: '/prod-api/api/gov-service-hotline/appeal/list',
	method: 'get',
	data: data
})

/**
 * 发布诉求
 */
export const create = (data) => request({
	url: '/prod-api/api/gov-service-hotline/appeal',
	method: 'post',
	data: data
})

/**
 * 分页查询我提交的所有诉求
 */
export const myAppeal = (data) => request({
	url: '/prod-api/api/gov-service-hotline/appeal/my-list',
	method: 'get',
	data: data
})