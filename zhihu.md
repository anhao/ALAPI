# 知乎日报

> 获取知乎每天的日报，可以获取日报评论和详情



## 获取当日日报

> 获取当日的知乎日报

### 接口参数

请求地址：`/api/zhihu/latest`

请求方式：`get`  `post` 

请求参数：无

### 返回数据

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "date": "20191015",
        "stories": [
            {
                "image_hue": "0x55606e",
                "title": "自动泊车系统现在发展到什么程度了？",
                "url": "https://daily.zhihu.com/story/9716101",
                "hint": "懂车帝App · 7 分钟阅读",
                "ga_prefix": "101509",
                "images": [
                    "https://pic2.zhimg.com/v2-d7ca6707a247fe72653e70c936885855.jpg"
                ],
                "type": 0,
                "id": 9716101
            },
            {
                "image_hue": "0x8f8f8f",
                "title": "原 f(x) 成员崔雪莉确认身亡，事情的真相如何？",
                "url": "https://daily.zhihu.com/story/9716169",
                "hint": "Pucifan · 1 分钟阅读",
                "ga_prefix": "101507",
                "images": [
                    "https://pic2.zhimg.com/v2-2c30aa62201465e008cd288293736ab5.jpg"
                ],
                "type": 0,
                "id": 9716169
            },
            {
                "image_hue": "0xb4a179",
                "title": "瞎扯 · 如何正确地吐槽",
                "url": "https://daily.zhihu.com/story/9716160",
                "hint": "VOL.2239",
                "ga_prefix": "101506",
                "images": [
                    "https://pic2.zhimg.com/v2-c9e9d13003b3b77110f3fc230c452cc1.jpg"
                ],
                "type": 0,
                "id": 9716160
            }
        ],
        "top_stories": [
            {
                "image_hue": "0x636b62",
                "hint": "作者 / 黄彦思Raymond",
                "url": "https://daily.zhihu.com/story/9716048",
                "image": "https://pic4.zhimg.com/v2-e4625163a1bd98cf50c77406cef6be53.jpg",
                "title": "无锡小吃店燃气爆炸致 9 人死亡，为什么伤亡如此惨重？",
                "ga_prefix": "101407",
                "type": 0,
                "id": 9716048
            },
            {
                "image_hue": "0x675948",
                "hint": "作者 / 飒姐",
                "url": "https://daily.zhihu.com/story/9715893",
                "image": "https://pic1.zhimg.com/v2-73eba9226854eb384bac0b39f417d978.jpg",
                "title": "无痛分娩到底管用么？",
                "ga_prefix": "101016",
                "type": 0,
                "id": 9715893
            },
            {
                "image_hue": "0xf7db1c",
                "hint": "作者 / 张抗抗",
                "url": "https://daily.zhihu.com/story/9715912",
                "image": "https://pic3.zhimg.com/v2-4bd771a11c83b38bc015da823c7a8ce6.jpg",
                "title": "2019 年诺贝尔化学奖授予锂电池，这项技术如何改变了我们的生活？",
                "ga_prefix": "101009",
                "type": 0,
                "id": 9715912
            },
            {
                "image_hue": "0x662530",
                "hint": "作者 / 知识分子",
                "url": "https://daily.zhihu.com/story/9715796",
                "image": "https://pic2.zhimg.com/v2-650616a8303ffc11e4668a08625a9581.jpg",
                "title": "如何通俗地理解 2019 年诺贝尔生理学或医学奖？",
                "ga_prefix": "100807",
                "type": 0,
                "id": 9715796
            },
            {
                "image_hue": "0x8b9391",
                "hint": "作者 / 知乎日报",
                "url": "https://daily.zhihu.com/story/9715527",
                "image": "https://pic4.zhimg.com/v2-eeac7fe3e3c28eae5517eea4cc7f56bf.jpg",
                "title": "谁，还没有点光荣历史呢？",
                "ga_prefix": "092709",
                "type": 0,
                "id": 9715527
            }
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```





## 获取以前的日报

> 根据日期，获取日期的前一天的日报。比如输入 `20191007`，那么获取的数据就是` 20191006` 的日报

### 接口参数

请求地址：`/api/zhihu/before`

请求方式：`get`  `post` 

请求参数：

| 参数名称 | 必选 | 类型   | 说明                     |
| -------- | ---- | ------ | ------------------------ |
| `date`   | 是   | `date` | 日报的日期,如 `20191007` |



### 返回数据

测试参数：`date=20191010`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "date": "20191009",
        "stories": [
            {
                "image_hue": "0x060806",
                "title": "如何看待宁夏首创「夫妻共同育儿假」， 0 至 3 岁子女父母每年可休 10 天假？",
                "url": "https://daily.zhihu.com/story/9715872",
                "hint": "豆妈可爱多 · 3 分钟阅读",
                "ga_prefix": "100920",
                "images": [
                    "https://pic2.zhimg.com/v2-9e3156587ae269673497db6e97830981.jpg"
                ],
                "type": 0,
                "id": 9715872
            },
            {
                "image_hue": "0xa89881",
                "title": "索尼（Sony）电视为什么只坚持画质，而不对设计易用性做改进？",
                "url": "https://daily.zhihu.com/story/9715866",
                "hint": "伽利略略略 · 1 分钟阅读",
                "ga_prefix": "100918",
                "images": [
                    "https://pic3.zhimg.com/v2-554f3adcb6567be4471c25aafe06370a.jpg"
                ],
                "type": 0,
                "id": 9715866
            },
            {
                "image_hue": "0x617276",
                "title": "智能手机的续航是不是永远不会超过一天？",
                "url": "https://daily.zhihu.com/story/9715859",
                "hint": "pansz · 1 分钟阅读",
                "ga_prefix": "100916",
                "images": [
                    "https://pic2.zhimg.com/v2-7c10a2975ec8c8845db9efa572a10319.jpg"
                ],
                "type": 0,
                "id": 9715859
            },
            {
                "image_hue": "0x3c4744",
                "title": "在四大工作是一种怎样的体验？",
                "url": "https://daily.zhihu.com/story/9715864",
                "hint": "Yvette Zheng · 1 分钟阅读",
                "ga_prefix": "100915",
                "images": [
                    "https://pic1.zhimg.com/v2-237bf3dd7dec62a72701492a813c9308.jpg"
                ],
                "type": 0,
                "id": 9715864
            },
            {
                "image_hue": "0x435a79",
                "title": "扫描隧道显微镜和原子力显微镜的基本原理是什么？",
                "url": "https://daily.zhihu.com/story/9715853",
                "hint": "知乎用户 · 2 分钟阅读",
                "ga_prefix": "100909",
                "images": [
                    "https://pic1.zhimg.com/v2-55aa46fc161a86bec286c83d0318bd08.jpg"
                ],
                "type": 0,
                "id": 9715853
            },
            {
                "image_hue": "0x7d735b",
                "title": "iPhone 11 拍照鬼影这么严重，原因有哪些？可能的影响会是什么？",
                "url": "https://daily.zhihu.com/story/9715870",
                "hint": "项迪伦 · 1 分钟阅读",
                "ga_prefix": "100907",
                "images": [
                    "https://pic3.zhimg.com/v2-83e016e976f05f3c1838805c821d292a.jpg"
                ],
                "type": 0,
                "id": 9715870
            },
            {
                "image_hue": "0x8b6248",
                "title": "瞎扯 · 如何正确地吐槽",
                "url": "https://daily.zhihu.com/story/9715843",
                "hint": "VOL.2235",
                "ga_prefix": "100906",
                "images": [
                    "https://pic2.zhimg.com/v2-0b85cd6ef8c3a195ec8ec95e535b6515.jpg"
                ],
                "type": 0,
                "id": 9715843
            }
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

## 获取日报详情内容

> 获取日报的详情内容



### 接口参数

请求地址：`/api/zhihu/news`

请求方式：`get`  `post` 

请求参数：

| 参数名称 | 必选 | 类型  | 说明         |
| -------- | ---- | ----- | ------------ |
| `id`     | 是   | `int` | 日报 的` id` |

### 返回数据

测试参数：id=

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "body": "...不过相比手动停车，自动泊车系统在空间利用上更加谨慎，....(内容太多了...)",
        "image_hue": "0x55606e",
        "image_source": "fill / CC0",
        "title": "自动泊车系统现在发展到什么程度了？",
        "url": "https://daily.zhihu.com/story/9716101",
        "image": "https://pic3.zhimg.com/v2-809d738b450653e680a475bd77d7661a.jpg",
        "share_url": "http://daily.zhihu.com/story/9716101",
        "js": [],
        "ga_prefix": "101509",
        "images": [
            "https://pic2.zhimg.com/v2-d7ca6707a247fe72653e70c936885855.jpg"
        ],
        "type": 0,
        "id": 9716101,
        "css": [
            "http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3"
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```



### 获取日报评论

> 获取日报的评论列表



### 接口参数

请求地址：`/api/zhuhu/{comment-type}`

请求方式：`get`  `post`

请求参数：

| **comment-type** 参数 | 说明       |
| --------------------- | ---------- |
| short_comments        | 获取短评论 |
| long_comments         | 获取长评论 |



| 参数名称 | 必选 | 类型  | 说明         |
| -------- | ---- | ----- | ------------ |
| `id`     | 是   | `int` | 日报 的` id` |

### 返回数据

测试参数：`http://v1.alapi.cn/api/zhihu/short_comments?id=9716101`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "comments": [
            {
                "author": "soga方丈",
                "content": "和自动驾驶有异曲同工",
                "avatar": "http://pic2.zhimg.com/a44bce1c5_im.jpg",
                "time": 1571115914,
                "id": 33419887,
                "likes": 0
            },
            {
                "author": "寻找北极星2011",
                "content": "手动点赞",
                "avatar": "http://pic3.zhimg.com/248c5f11965360bc781b6d258f6e02c6_im.jpg",
                "time": 1571113814,
                "id": 33419865,
                "likes": 0
            },
            {
                "author": "生苏",
                "content": "好好练车才是正道。",
                "avatar": "http://pic2.zhimg.com/486d2b23864a68fab4a98844639e1d3d_im.jpg",
                "time": 1571111073,
                "id": 33419828,
                "likes": 1
            },
            {
                "author": "雅猴",
                "content": "本想知“发展到了什么程度”，结果是几款的测评～",
                "avatar": "http://pic2.zhimg.com/v2-dc533d65decec2fa0fa92ef7e2b0d5e1_im.jpg",
                "time": 1571110652,
                "id": 33419819,
                "likes": 2
            },
            {
                "author": "丶他的琴",
                "content": "曾几何时这个词都不会用…啥文化啊",
                "avatar": "http://pic4.zhimg.com/v2-f2379a7ddb82f6f56ae1675e120ad7db_im.jpg",
                "time": 1571107342,
                "id": 33419728,
                "likes": 1
            },
            {
                "author": "倒楣臉",
                "content": "自动泊车刮蹭了，就像图片中呈现的长安蹭了前车，这种情况是车企赔钱还是车主自己承担？",
                "avatar": "http://pic1.zhimg.com/7d0579404_im.jpg",
                "time": 1571107038,
                "id": 33419698,
                "likes": 3
            },
            {
                "author": "leslie zou",
                "content": "可怜的brz躺枪了",
                "avatar": "http://pic4.zhimg.com/4d85c4e7b_im.jpg",
                "time": 1571104996,
                "id": 33419629,
                "likes": 0
            },
            {
                "author": "骑驴打狗",
                "content": "长安好好啊，我都想买了（五毛一条）",
                "avatar": "http://pic2.zhimg.com/0037c1e07f05c48c517377e69bddb9f5_im.jpg",
                "time": 1571103721,
                "id": 33419596,
                "likes": 4
            },
            {
                "author": "qwerty",
                "content": "各位好，天气还不错",
                "avatar": "http://pic3.zhimg.com/v2-e1dcd7a475e5367e5f51ca925640ae8e_im.jpg",
                "time": 1571101230,
                "id": 33419541,
                "likes": 1
            }
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

