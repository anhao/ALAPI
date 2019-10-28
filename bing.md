# 必应美图 - 每日一图

> 获取必应美图每天的一张美图
>
> https://cn.bing.com



### 接口参数

请求地址：`/api/bing`

请求方法：`get`  `post`

请求参数：

| 参数名称 | 必选 |类型|说明|
| -------- | ---- |----|----|
| `format` | 否 | `string` |返回数据类型。可选：`json` ，默认直接返回图片|

### 返回数据

测试参数：`format=json`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "url": "https://cn.bing.com/th?id=OHR.BardenasDesert_ZH-CN1357611840_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
        "startdate": "20190926",
        "enddate": "20190927",
        "copyright": "德纳斯雷亚尔斯自然公园Castildetierra上空绚丽的日落，西班牙纳瓦拉 (© Inigofotografia/iStock/Getty Images Plus)"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```



