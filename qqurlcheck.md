# `QQ` 网址安全检测

> 检测 网址或者域名，在 `QQ` 中是否被拦截





### 接口参数

请求地址：`/api/urlcheck/qq`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明                 |
| -------- | ---- | -------- | -------------------- |
| `url`    | `是` | `string` | 要查询的网址或者域名 |

### 返回数据

测试参数：`url=alapi.cn`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "type": "qq",
        "url": "alapi.cn",
        "status": "ok",//正常返回ok,被拦截显示 danger
        "message": "正常"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

