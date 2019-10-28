# 内容加密

> 内容加密接口,支持 `md5`  `sha1` `sha256` `sha512` `urlencode` `urldecode` `base64_encode`,`base64_decode`



## 接口参数

请求地址： `/api/encrypt`

请求方式：`get` `post`

请求参数：

请求参数：

| 参数名称  | 必选 | 类型     | 说明         |
| --------- | ---- | -------- | ------------ |
| `content` | 是   | `string` | 要加密的内容 |
| `type`    | 否   | `string` | 加密的方式   |

| type 类型   | 说明                 |
| ----------- | -------------------- |
| `md5`       | `md5` 加密           |
| `sha1`      | `sha1 `加密          |
| `sha256`    | `sha256` 加密        |
| `sha512`    | `sha512 `加密        |
| `urlencode` | `urlencode` 加密     |
| `urldecode` | `urldecode` 解码     |
| `debase64`  | `base64_decode` 解码 |
| `enbase64`  | `base64_encode `加密 |

## 返回数据

测试参数： `type=md5&content=alapi`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "type": "md5",
        "content": "alapi",
        "encrypt": "e4253a110eaafd5a9e74840f3b077c6b"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

