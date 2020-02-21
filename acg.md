# ACG 图片

> ACG 图片,指的是动画、漫画、游戏之类的图片。
>
> ACG 接口 可以随机返回一张图片



## 接口参数

接口地址：`/api/acg`

请求方式：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型   | 说明                                          |
| -------- | ---- | ------ | --------------------------------------------- |
| `format` | 否   | string | 返回数据类型。可选：`json` ，默认直接返回图片 |

## 返回数据

测试参数 

`https://v1.alapi.cn/api/acg?format=json`

**2020-20-21更新：**

> 可以缩放图片大小
>
> 直接在图片链接后面加参数就可以了
>
> 比如：`https://file.alapi.cn/image/comic/215610-154116697054cd.jpg`
>
> 后面加上 `!/both/500x200`
>
> 就变成：`https://file.alapi.cn/image/comic/215610-154116697054cd.jpg!/both/500x200`
>
> 就可以缩放图片尺寸为 ：宽 500 像素，高 200 像素

```json
{
"code": 200,
"msg": "success",
"data": {
"url": "https://file.alapi.cn/image/comic/215610-154116697054cd.jpg",
"width": 1199,
"height": 846,
"total": 2608
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

