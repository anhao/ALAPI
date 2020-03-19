# 对联生成

> 根据输入的上联，AI 智能匹配出下联。

## 接口参数

请求地址：`/api/couplet	`

请求方式：`get` `post`

请求参数：

| 参数名称 |   是否必选   |  类型    |  说明    |
| -------- | ---- | ---- | ---- |
|    `keyword`      |  是    |   `string`   |   上联，只支持中文   |

## 返回数据
`http://v1.alapi.cn/api/couplet?keyword=%E5%8D%81%E4%B9%9D%E5%A4%A7%E6%98%A5%E9%A3%8E%E5%8C%96%E9%9B%A8`

```json5
{
"code": 200,
"msg": "success",
"data": {
"keyword": "十九大春风化雨", // 输入的上联
"text": "千千年秋日凝心" // 返回的下联
},
"author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

