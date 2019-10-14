# 二维码图片生成

> 生成二维码图片



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

