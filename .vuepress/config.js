module.exports = {
	// base:'/vuepressBlog/',
	title: '小七先生',
	description: '',
	dest: 'public',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/qi.ico',
			},
		],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no',
			},
		],
	],
	theme: 'reco',
	themeConfig: {
		nav: [
			{
				text: '首页',
				link: '/',
				icon: 'reco-home',
			},
			{
				text: 'TimeLine',
				link: '/timeline/',
				icon: 'reco-date',
			},
			// {
			// 	text: 'Docs',
			// 	icon: 'reco-message',
			// 	items: [
			// 		{
			// 			text: 'vuepress-reco',
			// 			link: '/docs/theme-reco/',
			// 		},
			// 	],
			// },
			// {
			// 	text: 'Contact',
			// 	icon: 'reco-message',
			// 	items: [
			// 		{
			// 			text: 'GitHub',
			// 			link: 'https://github.com/recoluan',
			// 			icon: 'reco-github',
			// 		},
			// 	],
			// },
		],
		sidebar: {
			'/docs/theme-reco/': ['', 'project', 'love', 'share'],
		},
		type: 'blog',
		blogConfig: {
			category: {
				location: 2,
				text: '分类',
			},
			tag: {
				location: 3,
				text: 'Tag',
			},
		},
		// friendLink: [
		// 	{
		// 		title: '午后南杂',
		// 		desc: 'Enjoy when you can, and endure when you must.',
		// 		email: '1156743527@qq.com',
		// 		link: 'https://www.recoluan.com',
		// 	},
		// 	{
		// 		title: 'vuepress-theme-reco',
		// 		desc: 'A simple and beautiful vuepress Blog & Doc theme.',
		// 		avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
		// 		link: 'https://vuepress-theme-reco.recoluan.com',
		// 	},
		// ],
		// logo: '/logo.png',
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: 'Last Updated',
		author: '',
		authorAvatar: '/ai.jpg',
		record: '木子李',
		startYear: '2020',
	},
	markdown: {
		lineNumbers: true,
	},
	// 看板娘
	plugins: [
		[
			'@vuepress-reco/vuepress-plugin-kan-ban-niang',
			{
				theme: [
					'whiteCat',
					'blackCat',
					'miku',
					'haru1',
					'haru2',
					'haruto',
					'koharu',
					'izumi',
					'shizuku',
					'wanko',
					'z16',
				],
				clean: false,
				messages: {
					welcome: '欢迎来到我的博客',
					home: '心里的花，我想要带你回家。',
					theme: '好吧，希望你能喜欢我的其他小伙伴。',
					close: '你不喜欢我了吗？痴痴地望着你。',
				},
				messageStyle: { right: '68px', bottom: '290px' },
				width: 250,
				height: 350,
			},
		],
		[
			'@vuepress-reco/vuepress-plugin-bulletin-popover',
			{
				title: '公告',
				body: [
					{
						type: 'title',
						content: '欢迎加我的QQ 🎉🎉🎉',
						style: 'text-aligin: center;',
					},
					{
						type: 'text',
						content: 'QQ：2633294801',
						style: 'text-align: center;',
					},
					// {
					// 	type: 'text',
					// 	content: '喜欢的主题特效可以去个人信息',
					// 	style: 'text-align: center;',
					// },
					// {
					// 	type: 'text',
					// 	content: '友链或疑问均可在留言板给我留言',
					// 	style: 'text-align: center;',
					// },
				],
				// footer: [
				// 	{
				// 		type: 'button',
				// 		text: '打赏',
				// 		link: '/blog/donate',
				// 	},
				// ],
			},
		],
		[
			'@vuepress-reco/vuepress-plugin-bgm-player',
			{
				audios: [
					// 本地文件示例
					// {
					//   name: '장가갈 수 있을까',
					//   artist: '咖啡少年',
					//   url: '/bgm/1.mp3',
					//   cover: '/bgm/1.jpg'
					// },
					// 网络文件示例
					{
						name: '原来你(衡)',
						artist: '郭零叁 /刘至远',
						url: 'http://dl.stream.qqmusic.qq.com/C400002ZOXdV1TjbyJ.m4a?guid=3386020560&vkey=B0FCF51CB287A453A0EBD1F6004DE910F642D6A547F5B6F74CCF7E3BB9597B0E9C84B06A8074EF8E989B497F5F02A47CFEDF389FFB91067B&uin=2633294801&fromtag=120002',
						cover: '//y.qq.com/music/photo_new/T002R300x300M000001w1sAc3RHZQf_2.jpg?max_age=2592000',
					},
					{
						name: '蓝色灰色(衡)',
						artist: 'Zkaaai',
						url: 'http://dl.stream.qqmusic.qq.com/C400001SWfzm2QSeMQ.m4a?guid=5229185190&vkey=B2EE6D7B0E1B49E36FF7789AB08AABB23DEAD0882CD301A7DBE12F3BA8BACE5667FDDCCC7B4BD67B9BBA30CB468D8D46914E3D6811DE29DC&uin=2633294801&fromtag=120002',
						cover: '//y.qq.com/music/photo_new/T002R300x300M000004Leq1i33DLah_1.jpg?max_age=2592000',
					},
					{
						name: '강남역 4번 출구',
						artist: 'Plastic / Fallin` Dild',
						url: 'https://assets.smallsunnyfox.com/music/2.mp3',
						cover: 'https://assets.smallsunnyfox.com/music/2.jpg',
					},
					{
						name: '用胳膊当枕头',
						artist: '최낙타',
						url: 'https://assets.smallsunnyfox.com/music/3.mp3',
						cover: 'https://assets.smallsunnyfox.com/music/3.jpg',
					},
					{
						name: '爱丫爱丫',
						artist: '李浩然',
						url: 'http://dl.stream.qqmusic.qq.com/C400000PGMdY1RiJzJ.m4a?guid=4551754748&vkey=23254A6E843AEB1687677B0D0C5C9303087C5D7BDA8E83B794A5B5BDEF7D08F70C16FD5784812B3A1E70356E8691E0382758668F0D1CEDDF&uin=2633294801&fromtag=120002',
						cover: '//y.qq.com/music/photo_new/T002R300x300M000003lFoIZ2ACrjx_1.jpg?max_age=2592000',
					},
					{
						name: 'Aloha Heja He',
						artist: 'Christian /die saubern Jungs',
						url: 'http://dl.stream.qqmusic.qq.com/C400002yyWqT0KzPJE.m4a?guid=666494344&vkey=30AF044D6210018B346D1B1964E2064F56B0C056DD264FE693FA0AC22146B895395E6DAFFBADC9537EE9C98143BE39A53233CC27F775FB00&uin=2633294801&fromtag=120002',
						cover: '//y.qq.com/music/photo_new/T002R300x300M000002VxxO91TA3Zb_1.jpg?max_age=2592000',
					},
					{
						name: '最美的瞬间',
						artist: '小阿七',
						url: 'http://dl.stream.qqmusic.qq.com/C400000EMMBy3umewW.m4a?guid=1562045487&vkey=21E77EABE4DC1C7EC524F9B8DC32B062CEC34F78FFEE71697D90B227706466AD6A2E6304DA89DE37DAE3038B54EBA0405E3ACA9076440E56&uin=2633294801&fromtag=120002',
						cover: '//y.qq.com/music/photo_new/T002R300x300M000003fdv2p072OLG_1.jpg?max_age=2592000',
					},
				],
			},
		],
		[
			'vuepress-plugin-cursor-effects',
			{
				size: 2, // size of the particle, default: 2
				shape: 'circle', // shape of the particle, default: 'star'
				zIndex: 999999999, // z-index property of the canvas, default: 999999999
			},
		],
		[
			'ribbon-animation',
			{
				size: 90, // 默认数据
				opacity: 0.3, //  透明度
				zIndex: -1, //  层级
				opt: {
					// 色带HSL饱和度
					colorSaturation: '80%',
					// 色带HSL亮度量
					colorBrightness: '60%',
					// 带状颜色不透明度
					colorAlpha: 0.65,
					// 在HSL颜色空间中循环显示颜色的速度有多快
					colorCycleSpeed: 6,
					// 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
					verticalPosition: 'center',
					// 到达屏幕另一侧的速度有多快
					horizontalSpeed: 200,
					// 在任何给定时间，屏幕上会保留多少条带
					ribbonCount: 2,
					// 添加笔划以及色带填充颜色
					strokeSize: 0,
					// 通过页面滚动上的因子垂直移动色带
					parallaxAmount: -0.5,
					// 随着时间的推移，为每个功能区添加动画效果
					animateSections: true,
				},
				ribbonShow: false, //  点击彩带  true显示  false为不显示
				ribbonAnimationShow: true, // 滑动彩带
			},
		],
	],
}
