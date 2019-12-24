# 今日热榜

> 今日热榜提供各站热榜聚合：微信、今日头条、百度、知乎、V2EX、微博、贴吧、豆瓣、天涯、虎扑、Github、抖音...追踪全网热点、简单高效阅读。
>
> 数据来自于：[https://tophub.today](https://tophub.today)



## 刷屏热词

> 获取网络上网络流行语或者梗。

### 请求参数

接口地址：`/api/tophub/wiki`

请求参数：`get`  `post`

请求参数：无

### 返回数据

| 参数名称      | 说明         |
| ------------- | ------------ |
| `last_update` | 上次更新时间 |
| `list`        | 数据列表     |
| `new`         | 最新热词     |
| `hot`         | 最热热词     |
| `title`       | 热词标题     |
| `link`        | 热词链接     |

```
{
    "code": 200,
    "msg": "success",
    "data": {
        "last_update": "2019-12-18 19:03:52",
        "new": [
            {
                "title": "VIP是个P",
                "link": "https://jikipedia.com/definition/458533106"
            },
            {
                "title": "1216女巫吃人",
                "link": "https://jikipedia.com/definition/408599793"
            },
				...
            {
                "title": "六万",
                "link": "https://jikipedia.com/definition/967418880"
            }
        ],
        "hot": [
            {
                "title": "diss",
                "link": "http://www.fanjian.net/jbk/diss.html"
            },
            {
                "title": "ojbk",
                "link": "http://www.fanjian.net/jbk/ojbk.html"
            },
            	...
            {
                "title": "象拔蚌",
                "link": "http://www.fanjian.net/jbk/xbp.html"
            }
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

## 获取热榜

> 获取 `今日日榜` 的 id ,来返回热榜 `JSON` 格式的数据
>
> 如：链接是：`https://tophub.today/n/WnBe01o371`  那么 id 就是 `WnBe01o371`

### 接口参数

请求地址：`/api/tophub/query`

请求方式：`get`  `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明                                                        |
| -------- | ---- | -------- | ----------------------------------------------------------- |
| `id`     | 是   | `string` | 今日日榜的**url**   `ID`                                    |
| `cookie` | 否   | `string` | 今日日榜的登录`cookie`,如果需要获取私人的热榜数据就需要这个 |

### 返回数据

**返回参数说明**

| 参数名称      | 说明         |
| ------------- | ------------ |
| `last_update` | 上次更新时间 |
| `name`        | 热榜名称     |
| `list`        | 数据列表     |
| `title`       | 热榜标题     |
| `link`        | 热榜链接     |

```json
{
"code": 200,
"msg": "success",
"data": {
"last_update": "2019-12-18 19:11:43",
"name": "微信 ‧ 24h热文榜",
"list": [
{
"title": "「人民日报」我国首艘国产航母交付海军，习近平出席交接入列仪式",
"link": "https://mp.weixin.qq.com/s?__biz=MjM5MjAxNDM4MA==&mid=2666285769&idx=1&sn=66e0ec9f22cd0e6bd70d2b92e08c62a8&scene=0"
},
{
"title": "「人民日报」将军，您不用踮起脚看别人的航母了！",
"link": "https://mp.weixin.qq.com/s?__biz=MjM5MjAxNDM4MA==&mid=2666285810&idx=1&sn=62af4e126d44cb8ca0983d87128dbc31&scene=0"
},
{
"title": "「人民日报」【夜读】一个人越活越好的7个迹象",
"link": "https://mp.weixin.qq.com/s?__biz=MjM5MjAxNDM4MA==&mid=2666285785&idx=1&sn=64008fc7b6e2287772fd0267bcf16d3e&chksm=bdb4239a8ac3aa8cc6e33e6a64afacdab4c88fad66bf3b06211b9ceec823a696e01fdcb21a1b&scene=27#wechat_redirect"
},
...
]
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```



## 获取热榜(无需ID)

> 上一个是需要自己去今日日榜找id的，这个接口里面已经封装好了`id`,你只需提供 `type` 就可以了



### 接口参数

请求地址:	`/api/tophub/get`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明                                          |
| -------- | ---- | -------- | --------------------------------------------- |
| `type`   | 否   | `string` | 获取热榜的 `type` ，默认 `36k`,详细见下面表格 |

**type 参数说明**

因为已经封装好了`id`, 你只需要提供对应的 `type` 就可以

| `type`参数值 | 说明                    |
| ------------ | ----------------------- |
| `zhihu`      | 知乎热榜                |
| `weibo`      | 微博热搜                |
| `weixin`     | 微信 ‧ **24h**热文榜    |
| `baidu`      | 百度 ‧ 实时热点         |
| `toutiao`    | 今日头条                |
| `163`        | 网易新闻                |
| `xl`         | 新浪网 ‧ 热词排行榜     |
| `36k`        | 36氪 ‧ 24小时热榜(默认) |
| `hitory`     | 历史上的今天            |
| `sspai`      | `少数派`                |
| `csdn`       | **csdn **今日推荐       |
| `juejin`     | 掘金热榜                |
| `bilibili`   | 哔哩哔哩热榜            |
| `douyin`     | 抖音视频榜              |
| `52pojie`    | 吾爱破解热榜            |
| `v2ex`       | **V2ex** 热帖           |
| `hostloc`    | 全球主机论坛热帖        |

### 返回参数

和获取热榜参数一致