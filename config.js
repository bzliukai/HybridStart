/*
 * app config
 * v2.0.0
 * rebuild
 * 2017-07-12
 */
var proEnv = true;
window.appcfg = {
	host: {
		control: proEnv ? "" : "http://app.xxx.com",
		source: proEnv ? "" : "http://source.xxx.com",
		upload: proEnv ? "" : "http://app.xxx.com/upload/"
	},
	set: {
		version: "",
		outime: 10000,
		longtime: 20000,
		windowAnimate: "push",
		animateSubType: "from_right",
		animateDuration: 300,
		bgColor: "#f0f0f0",
		safeStorage: "user,appInit",
		temporary: "templateCache,gps"
	},
	ajax: {
		type: "get",
		crypto: {
			enable: false,
			url: ""
		}
	},
	loading: {
		text: "正在加载",
		title: "",
		anim: "fade"
	},
	pull: {
		bgColor: "#C0C0C0",
		loadAnimInterval: 200,
		isScale: true,
		image: {}
	},
	plugin: {
		bdmap: {
			zoomLeval: 18
		}
	},
	project: {		//自定义配置
		sid: 1
	}
};
