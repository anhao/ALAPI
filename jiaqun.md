# 直连加QQ群

> 输入 QQ 群号就可以直接加群

## 接口参数

请求地址：`/api/qun`

请求方法：`get`  `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明            |
| -------- | ---- | -------- | --------------- |
| `guin`   | 是   | `number` | QQ 群号         |
| `format` | 否   | `number` | 数据格式 `json` |

### 测试

`api/qun?guin=464306428&format=json`

如果 `format` 不填写，则直接跳转加群链接

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "guin": "464306428",
        "key": "6244dfeca4b8026328abef080b4aa9b782166a1c0b6d9f3cc1adbad33f15f7d6",
        "url": "https://shang.qq.com/wpa/qunwpa?idkey=6244dfeca4b8026328abef080b4aa9b782166a1c0b6d9f3cc1adbad33f15f7d6"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

