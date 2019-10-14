# 短网址生成

> 将一个特别长的网址生成 一个很短的网址
>
> 这里支持 新浪的 `t.cn` 腾讯的  `url.cn` ，百度的 `dwz.cn` 还有 `suo.im`





### 接口参数

请求地址：`/api/url`

请求方式: `get`  `post`

请求参数：

| 参数名称 | 必选 |   类型   |              说明               |
| :------: | :--: | :------: | :-----------------------------: |
|  `url`   |  是  | `string` |         要缩短的长网址          |
|  `type`  |  否  |   int    | 返回哪个短网址,默认返回  `t.cn` |

`**Type` 参数说明**

| 参数 | 说明                 |
| ---- | -------------------- |
| 1    | 返回 `t.cn` 短网址   |
| 2    | 返回 `url.cn` 短网址 |
| 3    | 返回 `dwz.cn` 短网址 |
| 4    | 返回 `suo.im` 短网址 |

### 返回数据

测试参数：`url=https://v1.alapi.cn&type=1`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "type": "t.cn",
        "long_url": "https://v1.alapi.cn",
        "short_url": "http://t.cn/Ain85GEZ"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```



