# 无水印视频解析

> 各大短视频无水印解析接口

## 短视频无水印解析(聚合接口)

> 短视频无水印解析(聚合接口)，支持：**抖音**、**快手**、**小红书**、**微视**、**火山小视频**、**秒拍**、**西瓜视频**、**今日头条**、**陌陌视频**、**映客视频**、**小咖秀**、**皮皮搞笑**、**开眼**、**全民小视频**、**全民K歌**、**最右**、**小影**、**微博**、**美拍**、**皮皮虾**等平台的短视频去水印解析···



### 接口参数

请求地址：`/api/video/url`

请求方法：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型   | 说明                                                  |
| -------- | ---- | ------ | ----------------------------------------------------- |
| `url`    | 是   | string | 短视频分享地址,例如：`https://h5.pipix.com/s/uW4KXh/` |

### 返回数据

测试参数：`url=https://h5.pipix.com/s/uW4KXh/`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "status": "101",
        "msg": "获取成功",
        "data": {
            "title": "飞来的横祸",
            "image": "https://p3-dy.byteimg.com/img/mosaic-legacy/2d47b00023620d91b5d1e~540x952_q80.webp",
            "video": "http://v6-ppx.ixigua.com/ac68123e03fa3d3f09a9308e286b4794/5d989c9c/video/m/220ef070e8d9c3b4a6f875dbca676ffe79411637034d000025bd1bbb3777/?a=1319&br=952&cr=0&cs=0&dr=6&ds=6&er=&l=20191005203717010014047021101D9DE5&lr=&rc=ajNtdnA7OW1xbzMzNGYzM0ApZzw2PDs1NGU7NzpnaTdpaGdvamAwb2UtL21fLS1fMS9zczJhXy4vMS0wMTMxYGE1XzQ6Yw%3D%3D",
            "url": "http://v6-ppx.ixigua.com/ac68123e03fa3d3f09a9308e286b4794/5d989c9c/video/m/220ef070e8d9c3b4a6f875dbca676ffe79411637034d000025bd1bbb3777/?a=1319&br=952&cr=0&cs=0&dr=6&ds=6&er=&l=20191005203717010014047021101D9DE5&lr=&rc=ajNtdnA7OW1xbzMzNGYzM0ApZzw2PDs1NGU7NzpnaTdpaGdvamAwb2UtL21fLS1fMS9zczJhXy4vMS0wMTMxYGE1XzQ6Yw%3D%3D"
        }
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```



## 无水印视频解析（聚合接口2）

> 短视频无水印解析(聚合接口)，支持：**抖音**、**快手**、**小红书**、**微视**、**火山小视频**、**秒拍**、**西瓜视频**、**今日头条**、**陌陌视频**、**映客视频**、**小咖秀**、**皮皮搞笑**、**开眼**、**全民小视频**、**全民K歌**、**最右**、**小影**、**微博**、**美拍**、**皮皮虾**等平台的短视频去水印解析
>
> ** 和上面的接口一样的，只是返回参数不同 **，上面的接口返参数也会改成这样，统一所有短视频解析接口返回参数

### 接口参数

请求地址：`/api/video/jh`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型   | 说明                                                         |
| -------- | ---- | ------ | ------------------------------------------------------------ |
| `url`    | 是   | string | 短视频分享地址,例如：`http://v.douyin.com/xTmdYK`，支持中文和链接一起输入 |

### 返回数据

统一 `data` 返回参数

`title` 标题

`cover_url` 封面地址

`video_url` 视频地址

```json
{
"code": 200,
"msg": "success",
"data": {
"title": "就爱这一口",
"cover_url": "http://p9-dy.byteimg.com/large/tos-cn-p-0015/7d1ea7f8d99044e186e949a984040524_1572780949.jpeg?from=2563711402_large",
"video_url": "http://v3-dy.ixigua.com/9299a2d5cc0c50367fd95dee64464716/5e5d281c/video/m/2203183afcac4da4d80ad848fcd54fc54721163fb99000008c4911f1bf54/?a=1128&br=0&bt=894&cr=0&cs=0&dr=0&ds=6&er=&l=202003022236450100080621960B45081F&lr=&qs=0&rc=M3B4dnFkbDRlcDMzO2kzM0ApOTo7OmdnOWU1N2hpZzc3aGcuMmNkcWhea3NfLS0vLS9zczI2XjIuYDQzYTAwNWEuYzM6Yw%3D%3D"
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

### 单解析接口

> 单独解析视频的接口

### 接口参数

请求地址：`/api/video/[type]`

请求方式：`get` `post`

请求参数：
| 参数名称 | 必选 | 类型   | 说明                        |
| -------- | ---- | ------ | --------------------------- |
| `url`    | 是   | string | 短视频分享地址,只支持 `URL` |

请求地址的 `type` 参数支持

| 地址             | 说明                |
| ---------------- | ------------------- |
| `/api/video/dy`  | 抖音解析            |
| `/api/video/ks`  | 快手解析            |
| `/api/video/ws`  | 微视解析            |
| `/api/video/ppx` | 皮皮虾解析          |
| `/api/video/wb`  | 微博视频和秒拍解析  |
| `/api/video/mp`  | 美拍解析            |
| `/api/video/bi`  | `BiliBili` 视频解析 |
| `/api/video/hs`  | 火山视频解析        |
| `/api/video/xkx` | 小咖秀视频解析      |
| `/api/video/kd`  | QQ看点视频解析      |
| `/api/video/uc`  | UC 视频解析         |

这里是单独解析的视频接口，上面的聚合接口都可以解析

### 返回数据

```json
{
"code": 200,
"msg": "success",
"data": {
"title": "#最新：世卫组织将新冠肺炎全球风险级别提高到“非常高”！#新闻 #疫情全知道",
"cover_url": "http://pic640.weishi.qq.com/cfc9f7256b6149d293c5bc83af7acover.jpg",
"video_url": "http://v.weishi.qq.com/v.weishi.qq.com/shg_1047_1047_0bf2daafoaaaaaajlnczanpbogaek4hqau2a.f0.mp4?dis_k=5c21e2d867a0a4b13d2b788503a386ee&dis_t=1583160496&guid=0508AFC000E081E13F01036CF26192E5&fromtag=0&personid=h5"
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

