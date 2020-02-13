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

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "url": "https://ws4.sinaimg.cn/large/0072Vf1pgy1foxkd6lx6jj31kw0w0wyb.jpg",
        "width": 2048,
        "height": 1152
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

