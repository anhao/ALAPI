# 二维码图片生成和解码

> 生成二维码图片，解码二维码图片



## 二维码生成

### 接口参数

请求地址：`/api/qr`

请求方式：`get`

请求参数：

| 参数名称        | 必选 | 类型   | 说明                                                     |
| --------------- | ---- | ------ | -------------------------------------------------------- |
| content         | 是   | string | 要生成二维码的内容                                       |
| size            | 否   | int    | 二维码的大小，默认 `150x150`                             |
| errorCorrection | 否   | string | 容错级别，可选：`L`  `M` `Q` `H`，默认 `H`，一般不用设置 |



### 返回数据

测试参数： `content=www.alapi.cn&size=150`

![](<http://file.alapi.cn/test//wLbjmvPDNAeOD2ooUMziywO1EUIPuNJUHvCiOatp.png>)

## 二维码解码

> 根据 二维码图片，解码获取内容



### 接口参数

请求地址：`/api/qr/decode`

请求方式：`get` `post`

请求参数：

`url`  和`file` 必选选择一个，`get` 方式只能使用 `url`, `file` 参数需要 `post` 方式上传图片, 文件类型只支持图片。图片文件最大 2MB

**推荐使用POST方式上传二维码图片解析**

| 参数名称 | 必选 | 类型     | 说明                                 |
| -------- | ---- | -------- | ------------------------------------ |
| `url`    | 否   | `string` | 二维码的 网络 地址                   |
| `file`   | 否   | `file`   | 二维码图片, 使用 `post` 方式上传文件 |

### 返回数据

测试参数： `url=http://v1.alapi.cn/api/qr/decode?url=http://file.alapi.cn/test//wLbjmvPDNAeOD2ooUMziywO1EUIPuNJUHvCiOatp.png`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "url": "http://v1.alapi.cn/api/qr?content=https://www.alpi.cn",
        "content": "https://www.alpi.cn"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

