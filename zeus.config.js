// cli 相关动态数据配置
module.exports = {
	// smt cli 版本不满足，则强制退出
	exitVersion: '>=1.3.4',
	// smt cli 版本不满足，则警告
	warnVersion: '>=1.5.5',
	// 默认发布地址
	// 请填写发布服务地址
	defaultDeployPath: '',
	// git 库地址管理
	gitData: {
		tpl: {
			// 模版
			web: {
				// 项目名称
				name: '',
				// 输出地址
				exportDir: '',
				// repo
				gitLib: '',
				// 分支
				branch: 'master'
			},
			// 模版
			admin: {
				// 项目名称
				name: '',
				// 输出地址
				exportDir: '',
				// repo
				gitLib: '',
				// 分支
				branch: 'master'
			},
			// 模版
			openPlatform: {
				// 项目名称
				name: '',
				// 输出地址
				exportDir: '',
				// repo
				gitLib: '',
				// 分支
				branch: 'master'
			},
			cli: {
				name: '',
				branch: '',
				gitLib: ''
			}
		}
	}
}
