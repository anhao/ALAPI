# IP 查询

> 根据 `ip`  查询 位置 ，和 网络



## 接口参数

请求地址：`/api/ip`

请求方式：`get`  `post`

请求参数：

| 参数名称 | 必选 | 类型   | 说明                                           |
| -------- | ---- | ------ | ---------------------------------------------- |
| `ip`     | 是   | string | 要查询的 `ip`                                  |
| format   | 否   | string | 返回数据类型。可选 ：`json`,`text`，默认`json` |

## 返回数据

测试参数：`ip=114.114.114.114&format=json`

参数说明：

| 参数               | 说明                                                |
| ------------------ | --------------------------------------------------- |
| `beginip`          | 中间记录的开始 `IP` 地址                            |
| `endip`            | 中间记录的结束 `IP` 地址                            |
| `pos`              | 具体地理位置                                        |
| `isp`              | 运营商                                              |
| `location`         | `location.lat` 经度，`location.lng` 维度            |
| `rectangle`        | 所在城市范围的左下右上对标对 （只有国内 `ip` 才有） |
| `ad_info`          | 定位行政区划信息                                    |
| ad_info.nation     | 国家                                                |
| `ad_info.province` | 省                                                  |
| `ad_info.city`     | 市                                                  |
| `ad_info.district` | 区                                                  |
| `ad_info.adcode`   | 行政区划代码                                        |

```json
{
"code": 200,
"msg": "success",
"data": {
"beginip": "114.114.114.114",
"endip": "114.114.114.114",
"pos": "中国江苏省南京市",
"isp": "南京信风网络科技有限公司GreatbitDNS服务器",
"location": {
"lat": 32.05838,
"lng": 118.79647
},
"rectangle": "",
"ad_info": {
"nation": "中国",
"province": "江苏省",
"city": "南京市",
"district": "",
"adcode": 320100
},
"ip": "114.114.114.114"
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```





