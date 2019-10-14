# 微博热搜榜

> 获取实时微博热搜榜



### 接口参数

请求地址：`/api/new/wbtop`

请求方式：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型 | 说明                |
| -------- | ---- | ---- | ------------------- |
| `num`    | 否   | int  | 数据条数，默认 `50` |



### 返回数据

测试参数：`num=5`

```json
{
    "code": 200,
    "msg": "success",
    "data": [
        {
            "hostWord": [
                "沈腾说沙溢不是校草"
            ],
            "hostWordNum": [
                "2492423"
            ]
        },
        {
            "hostWord": [
                "OK手势被列入种族仇恨符号"
            ],
            "hostWordNum": [
                "1645031"
            ]
        },
        {
            "hostWord": [],
            "hostWordNum": []
        },
        {
            "hostWord": [
                "阅兵官兵每天都吃啥"
            ],
            "hostWordNum": [
                "813567"
            ]
        },
        {
            "hostWord": [
                "李振宁眼中含着泪"
            ],
            "hostWordNum": [
                "713805"
            ]
        }
    ],
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

