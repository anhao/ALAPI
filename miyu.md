# 笑话大全

> 获取最新的谜语大全



## 接口参数

请求地址：`/api/riddle`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型  | 说明                          |
| -------- | ---- | ----- | ----------------------------- |
| `num`    | 否   | `int` | 获取谜语的数量，默认 `10`  条 |
| `page`   | 否   | `int` | 获取页码数,默认 `0`           |

## 返回数据

测试参数：`num=3&page=0`

```json
{
    "code": 200,
    "msg": "success",
    "data": [
        {
            "title": "《石钟山记》",
            "content": "《石钟山记》",
            "answer": "自鸣得意",
            "type": "chengyumiyu",
            "type_name": {
                "type": "chengyumiyu",
                "name": "成语谜语",
                "desc": "顾名思义，成语谜指猜成语的谜语。"
            }
        },
        {
            "title": "长宽高",
            "content": "长宽高",
            "answer": "三位一体",
            "type": "chengyumiyu",
            "type_name": {
                "type": "chengyumiyu",
                "name": "成语谜语",
                "desc": "顾名思义，成语谜指猜成语的谜语。"
            }
        },
        {
            "title": "长城电扇，电扇长城",
            "content": "长城电扇，电扇长城",
            "answer": "风行万里",
            "type": "chengyumiyu",
            "type_name": {
                "type": "chengyumiyu",
                "name": "成语谜语",
                "desc": "顾名思义，成语谜指猜成语的谜语。"
            }
        }
    ],
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

