# 微信 网址安全检测

> 检测 网址或者域名，在微信中是否被拦截。 该接口有频率限制 `1 QPS`





## 接口参数

请求地址：`/api/urlcheck/wx`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明                 |
| -------- | ---- | -------- | -------------------- |
| `url`    | `是` | `string` | 要查询的网址或者域名 |

## 返回数据

测试参数：`url=http://alapi.cn`

> 2020.2.19 更新返回数据。 status : 0 检测失败，1 正常，2 拦截

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "type": "weixin",
        "status": 1,
        "msg": "正常",
        "url": "http://alapi.cn"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```