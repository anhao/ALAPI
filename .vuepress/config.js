module.exports = {
    title: 'ALAPI',
    description: 'ALAPI,免费API,Free API,免费API访问,免费快递查询接口..',
    dest: 'dist',
    themeConfig: {
        repo: 'anhao/alapi',
        sidebarDepth: 2, // displayAllHeaders: true,
        lastUpdated: '上次更新',
        smoothScroll: true,
        algolia: {
            apiKey: '152fd99568ed0024cb8721c2f89b9836',
            indexName:
                'alapi'
        }
        ,
        nav: [{
            text: 'Home',
            link: 'https://www.alapi.cn'
        }, {
            text: 'Alone88',
            link: 'https://alone88.cn'
        },{
			text: 'APP版 文档',
			link: 'https://file.alapi.cn/app-release.apk'
		}],
        sidebar:
            [
                ['alapi', 'ALAPI(必看)'],
                ['update', "更新日志"],
                ['soul', '心灵毒鸡汤'],
                ['hitokoto', 'Hitokoto 一言'],
                ['hotComment', '网易云乐评'],
                ['acg', 'ACG 图片'],
                ['bing', '必应美图'],
                ['avatar', '获取头像'],
                ['ipquery', 'IP查询'],
                ['shorturl', '短网址生成'],
                ['bdpwd', '百度网盘提取码'],
                ['videojx', '短视频无水印解析（聚合接口）'],
                ['videody', '抖音无水印解析'],
                ['ppx', '皮皮虾无水印解析'],
                ['qr', '二维码生成和解码'],
                ['lanzous', '蓝奏云直连解析'],
                ['wytt', '网易新闻头条'],
                ['wyfull', '网易新闻详情解析'],
                ['hanfu', '汉服新闻数据'],
                ['wbtop', '微博热搜榜'],
                ['whois', '域名Whois'],
                ['icp', '域名备案Icp'],
                ['wymusic', '网易云音乐'],
                ['kd', '快递查询接口'],
                ['fanyi', '翻译查询接口'],
                ['mingyan', '名人名言'],
                ['gntq', '国内天气预报'],
                ['qqtq', '全球天气预报'],
                ['qinghua', '土味情话'],
                ['qqurlcheck', 'QQ域名安全检测'],
                ['wxcheckurl', '微信域名安全检测'],
                ['lajifenlei', '垃圾分类'],
                ['eventhitory', '历史上的今天'],
                ['joke', '笑话大全'],
                ['miyu', '谜语大全'],
                ['zhihu', '知乎日报'],
                ['mryw', '每日一文'],
                ['encrypt', '内容加密'],
                ['ai', '内容审核-文本图片'],
                ['tophub', '今日热榜'],
                ['jiaqun', '加群直链'],
                ['uploadimage', '图片上传'],
                ['shici', '随机诗词'],
                ['bbcover', "Bilibili 封面获取"],
                ['idcard', '身份证信息查询'],
                ['pinyin', '中文转拼音'],
                ['lunar', '农历信息查询']
            ],
        markdown:
            {
                lineNumbers: true,
            }
        ,
    },
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }]
    ],
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
    ],
}