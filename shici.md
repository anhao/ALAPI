# 随机诗词

随机诗词服务，随机返回一篇古代诗词

## 接口参数

接口地址：`api/shici`

请求方式：`get`  `post` 

请求参数：

| 参数名称 | 必选 |   类型   |   说明   |
| :------: | ---- | :------: | :------: |
|  `type`  | 否   | `string` | 诗词类型 |

**Type 参数说明**

| type 参数值 | 说明     |
| ----------- | -------- |
| all         | 所有类型 |
| `shuqing`   | 抒情     |
| `siji`      | 四季     |
| `shanshui`  | 山水     |
| `tianqi`    | 天气     |
| `renwu`     | 人物     |
| `shenghuo`  | 生活     |
| `jieri`     | 节日     |
| `dongwu`    | 动物     |
| `zhiwu`     | 植物     |
| `shiwu`     | 食物     |

## 返回数据

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "content": "残雪楼台，迟日园林。",
        "origin": "高阳台·除夜",
        "author": "韩疁",
        "category": "古诗文-天气-写雪"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

