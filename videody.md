# 抖音无水印视频解析

> 根据抖音分享的链接，解析出没有水印的视频



### 接口参数

请求地址：`/api/video/dy`

请求方法：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型   | 说明                                                   |
| -------- | ---- | ------ | ------------------------------------------------------ |
| `url`    | 是   | string | 抖音视频的分享地址,例如：`http://v.douyin.com/rJjgX8/` |

### 返回数据

测试参数：`url=http://v.douyin.com/rJjgX8/`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "status": true,
        "msg": "获取成功",
        "title": "露西高尔夫舞#轻漫计划 @抖音动漫",
        "video_url": [
            "http://v9-dy-z.ixigua.com/de267f24ebb1571009f084143ed6dd14/5d989bc8/video/m/2209c36709d08f346d6b848f341ef203da2116255dc100004e550a0e9e7d/?a=1128&br=1321&cr=0&cs=0&dr=0&ds=6&er=&l=2019100520334401001606613424128A&lr=aweme_self&rc=amhpZWprZGZsbTMzPGkzM0ApZDo2NTY4aTw5NzkzMzkzZ2dqb25xXi40a21fLS0uLS9zcy5eNmE0YzYvLV9iYzMzNWE6Yw%3D%3D",
            "http://7916e63e.tt.x.bsgslb.cn/xdispatch7532417d78344822/v9-dy-z.ixigua.com/de267f24ebb1571009f084143ed6dd14/5d989bc8/video/m/2209c36709d08f346d6b848f341ef203da2116255dc100004e550a0e9e7d/?a=1128&br=1321&cr=0&cs=0&dr=0&ds=6&er=&l=2019100520334401001606613424128A&lr=aweme_self&rc=amhpZWprZGZsbTMzPGkzM0ApZDo2NTY4aTw5NzkzMzkzZ2dqb25xXi40a21fLS0uLS9zcy5eNmE0YzYvLV9iYzMzNWE6Yw%3D%3D&bsxdisp=co"
        ],
        "cover_image": "https://p9-dy.byteimg.com/aweme/300x400/17b950012c067520d8587.jpeg"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

