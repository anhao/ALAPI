# Bilibili  封面获取

> 想必很多人都会遇到这样的一个问题。在B站浏览视频的时候，往往很多人会被各式各样的封面所吸引，从而点了进去，结果发现往往封面的图片在这些视频中一闪而过，甚至有的时候都没有出现。
>
> 这个接口就可以获取 b 站的 视频封面，直播封面，专栏封面等。

## 接口参数

请求地址：`/api/bbcover`

请求方式：`get` `post`

接口参数:

| 参数名称 | 必选 | 类型           | 说明                             |
| -------- | ---- | -------------- | -------------------------------- |
| `c`      | 是   | string\|number | b 站的视频地址，或者视频的 av 号 |

`c` 参数支持什么呢？

支持：链接 或者  视频或者 直播 的`id`

例如视频支持：`https://www.bilibili.com/video/av86863038`  或者 `av86863038`  `

直播：`https://live.bilibili.com/14524390 或者 `14524390`

专栏：`https://www.bilibili.com/read/cv4750375` 或者 `cv4750375` 

## 返回数据

测试参数 ：`c=av86863038`

`title` : 标题

`description` 描述

`cover` 封面 `url` 地址

```json
{
"code": 200,
"msg": "success",
"data": {
"title": "【酥酥】进来看看她玩皮城执法官 蔚！",
"description": "素材来源斗鱼直播。剪辑成品<br />喜欢记得三连～后续会更新很多好看的视频<br />酥酥的斗鱼直播间是266055，每晚九点直播",
"cover": "http://i2.hdslb.com/bfs/archive/d68a7cacb2ee51fae9a34b294ad554c5c0672280.jpg"
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

