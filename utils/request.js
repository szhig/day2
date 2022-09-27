import { forEach } from "./forEach.js"
import operate from "./operate.js"

export default class Request {
	http(param) {
		let url = param.url,
			method = param.method,
			header = param.header || {},
			data = param.data || {}
		
		header['Authorization'] = localStorage.getItem("token") || ""
		header['test'] = "123"
		
		let requestUrl = operate.api + url
		method = method.toUpperCase()
		if(method == "POST") {
			header['content-type'] = "application/json"
		} else if(method == "GET") {
			let getData = "?"
			header['content-type'] = "application/x-www-form-urlencoded"
			forEach(data, (value, key) => {
				getData += key + "=" + value + "&&"
			})
			requestUrl += getData
		}
		
		
		
		return new Promise((resolve, reject) => {
			uni.request({
				url: requestUrl,
				header: header,
				method: method,
				data: data,
				success(res) {
					if(res.data.code != 200) {
						uni.showToast({
							title: "err: " + res.data.msg,
							icon: "none"
						})
					}
					if(res.data.code == 200) {
						resolve(res.data)
					}
					if(res.data.code == 401) {
						uni.redirectTo({
							url:"/pages/index/index"
						})
					}
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
}