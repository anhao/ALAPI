# 国内天气预报查询

> 查询国内城市天气预报



##	查询今日天气预报（3小时一更）

> 查询今日天气预报，3小时一更新



### 接口参数

请求地址:  `/api/tianqi/now`

请求方式：`get`  `post`

请求参数：

**这3个参数必选选择一个**

| 参数名称 | 必选 | 类型     | 说明                                         |
| -------- | ---- | -------- | -------------------------------------------- |
| `cityid` | 否   | `int`    | 城市的`id`,如：`101010400`                   |
| `city`   | 否   | `string` | 城市的名称，如：`北京`                       |
| `ip`     | 否   | `string` | `ip`,根据 `ip` 查询天气，默认请求客户端 `ip` |

### 返回数据

测试参数：`city=北京`

```json
{
"code": 200,
"msg": "success",
"data": {
"cityid": "101010100",
"date": "2019-09-30",
"week": "星期一",
"update_time": "10:15",
"city": "北京",
"cityEn": "beijing",
"country": "中国",
"countryEn": "China",
"wea": "晴",
"wea_img": "qing",
"tem": "23",
"tem1": "30",
"tem2": "19",
"win": "东风",
"win_speed": "2级",
"win_meter": "小于12km/h",
"humidity": "62%",
"visibility": "3.4km",
"pressure": "1011",
"air": "124",
"air_pm25": "124",
"air_level": "轻度污染",
"air_tips": "儿童、老年人及心脏病、呼吸系统疾病患者应尽量减少体力消耗大的户外活动。",
"alarm": {
"alarm_type": "",
"alarm_level": "",
"alarm_content": ""
}
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```



## 国内 `7` 日 天气预报

> 预报 `7` 日 的天气预报

### 接口参数

请求地址:  `/api/tianqi/grid`

请求方式：`get`  `post`

请求参数：

**这3个参数必选选择一个**

| 参数名称 | 必选 | 类型     | 说明                                         |
| -------- | ---- | -------- | -------------------------------------------- |
| `cityid` | 否   | `int`    | 城市的`id`,如：`101010400`                   |
| `city`   | 否   | `string` | 城市的名称，如：`北京`                       |
| `ip`     | 否   | `string` | `ip`,根据 `ip` 查询天气，默认请求客户端 `ip` |

### 返回数据

测试参数：`city=北京`

```json
{
"code": 200,
"msg": "success",
"data": {
"cityid": "101010100",
"update_time": "2019-09-30 07:30:00",
"city": "北京",
"cityEn": "beijing",
"country": "中国",
"countryEn": "China",
"data": [
{
"day": "30日（今天）",
"date": "2019-09-30",
"week": "星期一",
"wea": "多云转晴",
"wea_img": "yun",
"air": 124,
"humidity": 55,
"air_level": "轻度",
"air_tips": "儿童、老年人及心脏病、呼吸系统疾病患者应尽量减少体力消耗大的户外活动。",
"alarm": {
"alarm_type": "",
"alarm_level": "",
"alarm_content": ""
},
"tem1": "30℃",
"tem2": "19℃",
"tem": "19℃",
"win": [
"南风",
"南风"
],
"win_speed": "<3级",
"hours": [
{
"day": "30日08时",
"wea": "晴",
"tem": "20℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "30日11时",
"wea": "晴",
"tem": "25℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "30日14时",
"wea": "晴",
"tem": "28℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "30日17时",
"wea": "多云",
"tem": "28℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "30日20时",
"wea": "多云",
"tem": "24℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "30日23时",
"wea": "多云",
"tem": "22℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "01日02时",
"wea": "多云",
"tem": "20℃",
"win": "南风",
"win_speed": "<3级"
},
{
"day": "01日05时",
"wea": "晴",
"tem": "19℃",
"win": "南风",
"win_speed": "<3级"
}
],
"index": [
{
"title": "紫外线指数",
"level": "中等",
"desc": "涂擦SPF大于15、PA+防晒护肤品。"
},
{
"title": "</em><em>",
"level": null,
"desc": "春天不减肥，夏天徒伤悲。天气较舒适，快去运动吧。"
},
{
"title": "健臻·血糖指数",
"level": "较易波动",
"desc": "血糖较易波动，注意监测。"
},
{
"title": "穿衣指数",
"level": "热",
"desc": "适合穿T恤、短薄外套等夏季服装。"
},
{
"title": "洗车指数",
"level": "适宜",
"desc": "天气较好，适合擦洗汽车。"
},
{
"title": "空气污染扩散指数",
"level": "中",
"desc": "易感人群应适当减少室外活动。"
}
]
},
...
]
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

## 国内机场天气查询

> 查询国内机场天气

### 接口参数

请求地址:  `/api/tianqi/grid`

请求方式：`get`  `post`

请求参数：

**这3个参数必选选择一个**

| 参数名称 | 必选 | 类型     | 说明                |
| -------- | ---- | -------- | ------------------- |
| `iata`   | 是   | `string` | 机场代码：如：`SJW` |

**机场代码**

| 机场代码 | 机场名称               |
| -------- | ---------------------- |
| SJW      | 石家庄正定国际机场     |
| PEK      | 北京首都国际机场       |
| CGQ      | 长春龙嘉国际机场       |
| HRB      | 哈尔滨太平国际机场     |
| SHE      | 沈阳桃仙国际机场       |
| DLC      | 大连周水子国际机场     |
| YNT      | 烟台蓬莱国际机场       |
| TAO      | 青岛流亭国际机场       |
| TNA      | 济南遥墙国际机场       |
| TSN      | 天津滨海国际机场       |
| URC      | 乌鲁木齐地窝堡国际机场 |
| LXA      | 拉萨贡嘎国际机场       |
| LJG      | 丽江三义国际机场       |
| KMG      | 昆明长水国际机场       |
| JHG      | 西双版纳嘎洒国际机场   |
| SYX      | 三亚凤凰国际机场       |
| HAK      | 海口美兰国际机场       |
| NNG      | 南宁吴圩国际机场       |
| KWL      | 桂林两江国际机场       |
| KWE      | 贵阳龙洞堡国际机场     |
| CKG      | 重庆江北国际机场       |
| CTU      | 成都双流国际机场       |
| XNN      | 西宁曹家堡国际机场     |
| LHW      | 兰州中川国际机场       |
| INC      | 银川河东国际机场       |
| XIY      | 西安咸阳国际机场       |
| HET      | 呼和浩特白塔国际机场   |
| TYN      | 太原武宿国际机场       |
| CGO      | 郑州新郑国际机场       |
| WUH      | 武汉天河国际机场       |
| CSX      | 长沙黄花国际机场       |
| KHN      | 南昌昌北国际机场       |
| HFE      | 合肥新桥国际机场       |
| NKG      | 南京禄口国际机场       |
| CAN      | 广州白云国际机场       |
| SZX      | 深圳宝安国际机场       |
| HKG      | 香港国际机场           |
| ZUH      | 珠海金湾机场           |
| TPE      | 桃园国际机场           |
| XMN      | 厦门高崎国际机场       |
| JJN      | 泉州晋江国际机场       |
| FOC      | 福州长乐国际机场       |
| WNZ      | 温州龙湾国际机场       |
| NGB      | 宁波栎社国际机场       |
| HGH      | 杭州萧山国际机场       |
| SHA      | 上海虹桥国际机场       |
| PVG      | 上海浦东国际机场       |
| WUX      | 苏南硕放国际机场       |

### 返回数据

测试参数：`iata=SJW`



```json
{
"code": 200,
"msg": "success",
"data": {
"iata": "sjw",
"airport": "石家庄正定国际机场",
"update_time": "2019-09-30 11:30",
"data": [
{
"hour": "08时",
"wea": "晴",
"tem1": 20,
"tem2": 17,
"win": "西南风",
"win_speed": "0.6",
"humidity": "77.1",
"rain": "0.00"
},
{
"hour": "11时",
"wea": "晴",
"tem1": 27,
"tem2": 20,
"win": "东南风",
"win_speed": "1.1",
"humidity": "52.2",
"rain": "0.00"
},
{
"hour": "14时",
"wea": "晴",
"tem1": 30,
"tem2": 27,
"win": "东南风",
"win_speed": "2.3",
"humidity": "38.8",
"rain": "0.00"
},
{
"hour": "17时",
"wea": "晴",
"tem1": 30,
"tem2": 29,
"win": "东南风",
"win_speed": "2.8",
"humidity": "38.9",
"rain": "0.00"
},
{
"hour": "20时",
"wea": "晴",
"tem1": 29,
"tem2": 24,
"win": "东南风",
"win_speed": "2.1",
"humidity": "56.2",
"rain": "0.00"
},
{
"hour": "23时",
"wea": "晴",
"tem1": 25,
"tem2": 22,
"win": "东南风",
"win_speed": "1.8",
"humidity": "61.4",
"rain": "0.00"
},
{
"hour": "02时",
"wea": "晴",
"tem1": 23,
"tem2": 21,
"win": "东风",
"win_speed": "1.6",
"humidity": "57.8",
"rain": "0.00"
},
{
"hour": "05时",
"wea": "晴",
"tem1": 22,
"tem2": 20,
"win": "东风",
"win_speed": "1.4",
"humidity": "65.7",
"rain": "0.00"
},
{
"hour": "08时",
"wea": "多云",
"tem1": 22,
"tem2": 19,
"win": "东风",
"win_speed": "1.3",
"humidity": "64.8",
"rain": "0.00"
}
]
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

# 返回参数说明

| 参数名      | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| cityid      | 当前城市ID                                                   |
| update_time | 气象台更新时间                                               |
| date        | 日期                                                         |
| week        | 星期                                                         |
| wea         | 天气情况                                                     |
| wea_img     | 天气对应图标(xue, lei, shachen, wu, bingbao, yun, yu, yin, qing) |
| tem         | 当前温度                                                     |
| air         | 空气质量                                                     |
| air_pm25    | PM2.5                                                        |
| air_level   | 空气质量等级                                                 |
| air_tips    | 空气质量描述                                                 |
| humidity    | 湿度                                                         |
| visibility  | 能见度                                                       |
| pressure    | 气压hPa                                                      |
| win         | 风向                                                         |
| win_speed   | 风速等级                                                     |
| win_meter   | 风速 如: 12km/h                                              |