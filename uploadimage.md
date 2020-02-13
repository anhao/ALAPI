# 图片上传接口

> 图片上传接口，可以通过接口将图片上传到 阿里云，搜狗，`Vimcn` ,掘金，网易，小米等等...



## 接口参数

请求地址：`/api/image`

请求方式: `post`

请求参数：

只支持 `post` 请求方式

| 参数名称 | 必选 |  类型   |       说明       |
| :------: | :--: | :-----: | :--------------: |
| `image`  |  是  | `image` |    上传的图片    |
|  `type`  |  是  |   int   | 使用那个图片接口 |

**Type 参数说明**

`type` 为你图片要上传的地方，支持以下参数( 区分大小写 )，同时上传到多个图库，请使用英文逗号分割

| type 参数值      | 说明               |
| ---------------- | ------------------ |
| `Ali`            | 阿里云             |
| `Sogou`          | 搜狗               |
| `Vimcn`          | `Vim-cn.com`       |
| `Niupic`         | 牛图               |
| `Juejin`         | 掘金               |
| `UploadLiu`      | `upload.ouliu.net` |
| **~~UploadCC~~** | 这个接口暂时挂了   |
| `Catbox`         | `catbox`           |
| `NetEasy`        | 网易               |
| `Prnt`           | `Prnt`             |
| `Qihoo`          | 360奇虎            |
| `Souhu`          | 搜狐               |
| `Toutiao`        | 头条               |
| `Xiaomi`         | 小米               |
| `ImgTg`          | `imt.tg`           |

### 测试数据

请求方式 `post`  

`type=Ali,Qihoo`



**返回数据**

**`url`** 为返回的图片链接地址, 请求的 type 参数对应一个 图片 `url` 

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "url": {
            "Ali": "https://ae01.alicdn.com/kf/Hebcca5235fab4b0b85e7882ac043a0faP.png",
            "Qihoo": "http://p8.qhimg.com/t011e7c769a088f4320.png"
        }
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

