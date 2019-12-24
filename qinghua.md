# 土味情话

> 生成二维码图片



## 接口参数

请求地址：`/api/qinghua`

请求方式：`get`  `post`

请求参数：

| 参数名称 | 必选 | 类型   | 说明                           |
| -------- | ---- | ------ | ------------------------------ |
| `type`   | 否   | string | 返回的格式, `json` 或者 `text` |



## 返回数据

测试参数：`type=json`

``````json
{
    "code": 200,
    "msg": "success",
    "data": {
        "content": "石头和你脑袋碰在一起谁痛？当然我的头痛了，不，是我心痛。"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
``````

