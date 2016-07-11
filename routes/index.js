/**
 * 路由配置
 * @author     qcloud
 * @date 	   2016.7.9
 */

module.exports = {
	'/part0': {
		'method': 'get',
		'path': '/',
	},
	'/part1': {
		'method': 'get',
		'path': '/',
	},
	'/part4/upload': {
		'method': 'post',
		'path': '/part4/upload'
	},
	'/part4/list': {
		'method': 'get',
		'path': '/part4/list'
	},
	'/part4/meta': {
		'method': 'put',
		'path': '/part4/meta'
	},
	'/part4/keyword': {
		'method': 'get',
		'path': '/part4/keyword'
	},
	'/part4/delete': {
		'method': 'delete',
		'path': '/part4/delete'
	},
	'/part5/upload': {
		'method': 'post',
		'path': '/part5/upload'
	},
	'/part5/stat': {
		'method': 'get',
		'path': '/part5/stat'
	},
	'/part5/resize': {
		'method': 'put',
		'path': '/part5/resize'
	},
	'/part5/rotate': {
		'method': 'get',
		'path': '/part5/rotate'
	},
	'/part5/delete': {
		'method': 'delete',
		'path': '/part5/delete'
	},
}