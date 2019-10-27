# IP 查询

> 根据 `ip` 查询 位置 ，和 网络

## 接口参数

请求地址：`/api/ip`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | :--- |
| `ip` | 是 | string | 要查询的 `ip` |
| format | 否 | string | 返回数据类型。可选 ：`json`,`text`，默认`json` |

## 返回数据

测试参数：`ip=132.145.90.122&format=json`

```javascript
{
    "code": 200,
    "msg": "success",
    "data": {
        "beginip": "132.79.0.0",
        "endip": "132.145.255.255",
        "pos": "美国",
        "isp": ""
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

