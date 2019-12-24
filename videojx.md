# 短视频无水印解析(聚合接口)

> 短视频无水印解析(聚合接口)，支持：抖音 快手 火山 最右 微视 皮皮虾 小伽秀 全民小视频 小红书 微博 等等···



## 接口参数

请求地址：`/api/video/url`

请求方法：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型   | 说明                                                  |
| -------- | ---- | ------ | ----------------------------------------------------- |
| `url`    | 是   | string | 短视频分享地址,例如：`https://h5.pipix.com/s/uW4KXh/` |

## 返回数据

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

