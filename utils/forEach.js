export const forEach = (obj, fn) => {
	Object.keys(obj).forEach((item) => fn(obj[item], item))
}