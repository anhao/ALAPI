# 皮皮虾无水印视频解析

> 根据皮皮虾分享的链接，解析出没有水印的视频

## 接口参数

请求地址：`/api/video/ppx`

请求方法：`get` `post`

请求参数

| 参数名称 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | 是 | string | 皮皮虾视频的分享地址,例如：`https://h5.pipix.com/s/uW4KXh/` |

## 返回数据

测试参数：`url=https://h5.pipix.com/s/uW4KXh/`

```javascript
{
    "code": 200,
    "msg": "success",
    "data": {
        "title": "飞来的横祸",
        "video_url": "http://v6-ppx.ixigua.com/8fb38fe3a88f2bb20dff5b7e167b926a/5d989bf5/video/m/220ef070e8d9c3b4a6f875dbca676ffe79411637034d000025bd1bbb3777/?a=1319&br=952&cr=0&cs=0&dr=6&ds=6&er=&l=20191005203430010010058203077EB20C&lr=&rc=ajNtdnA7OW1xbzMzNGYzM0ApZzw2PDs1NGU7NzpnaTdpaGdvamAwb2UtL21fLS1fMS9zczJhXy4vMS0wMTMxYGE1XzQ6Yw%3D%3D",
        "cover_image": "https://p3-dy.byteimg.com/img/mosaic-legacy/2d47b00023620d91b5d1e~tplv-ppx-logo.jpeg",
        "author": {
            "id": 110595617632,
            "name": "皮皮侠23072319"
        }
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

