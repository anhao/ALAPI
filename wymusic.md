# 网易云音乐

> 获取网易云音乐数据



## 获取歌曲直链地址

> 根据音乐 `id` 获取 直链下载地址



### 接口参数

请求地址：`/api/music/url`

请求方式：`get`  `post`

请求参数

| 参数名称 | 必选 |   类型   |                     说明                     |
| :------: | :--: | :------: | :------------------------------------------: |
|   `id`   |  是  |  `int`   |              网易云音乐的 `id`               |
| `format` |  否  | `string` | 返回数据类型,可选：`json` 。默认返回直链地址 |

### 返回数据

测试参数：`id=440342015&format=json`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "id": 440342015,
        "url": "http://m8.music.126.net/20190927195644/8c1a8a99597452a8f83475fde131a311/ymusic/5309/5159/560f/dcdfe8926bf316b3cfe6ae8346fbf118.flac",
        "br": 752304,
        "size": 18577806,
        "md5": "dcdfe8926bf316b3cfe6ae8346fbf118",
        "code": 200,
        "expi": 1200,
        "type": "flac",
        "gain": 0,
        "fee": 0,
        "uf": null,
        "payed": 0,
        "flag": 0,
        "canExtend": false,
        "freeTrialInfo": null,
        "level": null,
        "encodeType": null
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```







## 获取歌曲详情

> 根据 `id` 获取歌曲的详细详细





### 接口参数

请求地址：`/api/music/detail`

请求方式：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型  |       说明        |
| :------: | :--: | :---: | :---------------: |
|  `ids`   |  是  | `int` | 网易云音乐的 `id` |



### 返回数据

测试参数：`ids=440342015`



```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "songs": [
            {
                "name": "我还是很喜欢你(Demo)",
                "id": 440342015,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12064097,
                        "name": "CANNIE(晴子)",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 95,
                "st": 0,
                "rt": null,
                "fee": 0,
                "v": 9,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 34991011,
                    "name": "三月(March)",
                    "picUrl": "https://p1.music.126.net/2vxdp9-5K7zyKZbS7GOmUg==/109951162867583732.jpg",
                    "tns": [],
                    "pic_str": "109951162867583732",
                    "pic": 109951162867583730
                },
                "dt": 197556,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7904697,
                    "vd": 0
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4742835,
                    "vd": 0
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3161905,
                    "vd": 0
                },
                "a": null,
                "cd": "1",
                "no": 2,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 2,
                "s_id": 0,
                "mark": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 0,
                "publishTime": 1478832625640
            }
        ],
        "privileges": [
            {
                "id": 440342015,
                "fee": 0,
                "payed": 0,
                "st": 0,
                "pl": 999000,
                "dl": 999000,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 999000,
                "toast": false,
                "flag": 0,
                "preSell": false
            }
        ],
        "code": 200
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

## 搜索接口

> 通过关键词可以搜索 音乐 / 专辑 / 歌手 / 歌单 / 用户



### 接口参数

请求地址：`/api/music/search`

请求方式：`get` `post`

请求参数：

| 参数名称  | 必选 | 类型     | 说明                                                         |
| --------- | ---- | -------- | ------------------------------------------------------------ |
| `keyword` | 是   | `string` | 搜索的关键字                                                 |
| `limit`   | 否   | `int`    | 返回数量 ，默认 `10`                                         |
| `offset`  | 否   | `int`    | 偏移数量，用于分页 默认 0                                    |
| `type`    | 否   | `int`    | 搜索类型 默认为 1 即单曲 , 取值意义 :` 1`: 单曲, `10`: 专辑, `100`: 歌手, `1000`: 歌单, `1002`: 用户, `1004`: MV, `1006`: 歌词, `1009`: 电台, `1014`: 视频, `1018`:综合 |

### 返回数据

测试参数：`keyword=海阔天空`

```json
{
"code": 200,
"msg": "success",
"data": {
"songs": [
{
"id": 347230,
"name": "海阔天空",
"artists": [
{
"id": 11127,
"name": "Beyond",
"picUrl": null,
"alias": [],
"albumSize": 0,
"picId": 0,
"img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
"img1v1": 0,
"trans": null
}
],
"album": {
"id": 34209,
"name": "海阔天空",
"artist": {
"id": 0,
"name": "",
"picUrl": null,
"alias": [],
"albumSize": 0,
"picId": 0,
"img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
"img1v1": 0,
"trans": null
},
"publishTime": 746812800000,
"size": 10,
"copyrightId": 1003,
"status": 1,
"picId": 102254581395219,
"mark": 0
},
"duration": 326348,
"copyrightId": 7002,
"status": 0,
"alias": [],
"rtype": 0,
"ftype": 0,
"mvid": 376199,
"fee": 8,
"rUrl": null,
"mark": 0
}
],
"songCount": 336
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```



## 获取歌曲评论

> 通过歌曲 id 获取 歌曲的所有评论

###  接口参数

请求地址：`/api/music/comment/music`

请求方法：`get` `post`

请求参数:


| 参数名称 | 必选 | 类型  | 说明                      |
| -------- | ---- | ----- | ------------------------- |
| `id`     | 是   | `int` | 歌曲 `id`                 |
| `limit`  | 否   | `int` | 返回数量 ，默认 `10`      |
| `offset` | 否   | `int` | 偏移数量，用于分页 默认 0 |

### 返回数据

测试参数：`id=186016&limit=1`

```json
{
"code": 200,
"msg": "success",
"data": {
"comments": [
{
"user": {
"locationInfo": null,
"liveInfo": null,
"authStatus": 0,
"avatarUrl": "https://p4.music.126.net/y-M0VipfpPeznrXb1br5fg==/109951164002125361.jpg",
"experts": null,
"userId": 70874794,
"userType": 0,
"nickname": "Demo小红",
"vipRights": {
"associator": {
"vipCode": 100,
"rights": true
},
"musicPackage": null,
"redVipAnnualCount": 1
},
"vipType": 11,
"expertTags": null,
"remarkName": null
},
"beReplied": [],
"pendantData": null,
"showFloorComment": null,
"status": 0,
"commentId": 1650594759,
"content": "今日此时201w8701",
"time": 1570602199838,
"likedCount": 0,
"expressionUrl": null,
"commentLocationType": 0,
"parentCommentId": 0,
"decoration": [],
"repliedMark": null,
"liked": false
}
],
"total": 2018734
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```



## 获取热门评论

> 获取资源 `id` 的热门评论，支持：歌曲 , `mv`, 专辑 , 歌单 , 电台, 视频

###  接口参数

请求地址：`/api/music/comment/hot`

请求方法：`get` `post`

请求参数:


| 参数名称 | 必选 | 类型  | 说明                                                         |
| -------- | ---- | ----- | ------------------------------------------------------------ |
| `id`     | 是   | `int` | 歌曲 `id`                                                    |
| `limit`  | 否   | `int` | 返回数量 ，默认 `10`                                         |
| `offset` | 否   | `int` | 偏移数量，用于分页 默认 0                                    |
| `type`   | 否   | `int` | 资源类型，默认 0:  `0` :歌曲 `1` :  mv  ` 2 ` : 歌单 `3 `  : 专辑` 4 ` : 电台  ` 5`:  视频 |

### 返回数据

测试参数：`id=186016&limit=1`

```json
{
"code": 200,
"msg": "success",
"data": {
"hotComments": [
{
"user": {
"locationInfo": null,
"liveInfo": null,
"remarkName": null,
"vipRights": null,
"vipType": 0,
"userId": 16838326,
"expertTags": null,
"userType": 0,
"nickname": "-荒灰黄-",
"authStatus": 0,
"avatarUrl": "https://p3.music.126.net/stdTZ6aLNTal0sXbyjCNlw==/109951164226420286.jpg",
"experts": null
},
"beReplied": [],
"pendantData": null,
"showFloorComment": null,
"status": 0,
"commentId": 5453734,
"content": "老子要听一辈子周杰伦！！！",
"time": 1415092759779,
"likedCount": 341408,
"expressionUrl": null,
"commentLocationType": 0,
"parentCommentId": 0,
"decoration": null,
"repliedMark": null,
"liked": false
}
],
"total": 22571
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

