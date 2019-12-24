# 汉服新闻数据

> 获取有关汉服新闻数据



## 接口参数

请求地址：`/api/new/hanfu`

请求方法：`get`  `post`

请求参数：

| 参数名称 | 必选 | 类型   | 说明                 |
| -------- | ---- | ------ | -------------------- |
| `num`    | 否   | int    | 请求条数，默认 `10`  |
| `page`   | 否   | int    | 页码，默认 `1`       |
| `rand`   | 否   | int    | 随机获取 ， 默认 `1` |
| `word`   | 否   | string | 检索关键词，默认无   |

## 返回数据

测试参数：`num=5&page=1&rand=1&word=小姐姐`

```json
{
    "code": 200,
    "msg": "success",
    "data": [
        {
            "ctime": "2019-09-23 16:56",
            "title": "小姐姐身穿古装汉服走秀，一颦一笑都好优雅，太漂亮了！",
            "source": "新浪汉服",
            "picUrl": "http://n.sinaimg.cn/sinacn20117/199/w639h360/20190923/e231-ifaencf1487795.jpg",
            "url": "https://k.sina.com.cn/article_6067221237_m169a272f503300htrs.html?from=fashion"
        },
        {
            "ctime": "2019-09-22 16:40",
            "title": "小姐姐穿上汉服后，颜值提高的不是一点点，而是秒变仙女！",
            "source": "新浪汉服",
            "picUrl": "http://n.sinaimg.cn/sinacn20117/199/w639h360/20190922/18d1-iewtena4942791.jpg",
            "url": "https://k.sina.com.cn/article_6067221237_m169a272f503300ht8y.html?from=beauty"
        },
        {
            "ctime": "2019-09-16 18:48",
            "title": "小姐姐穿汉服去悉尼歌剧院，没想到会有外国人也想买一套！",
            "source": "新浪汉服",
            "picUrl": "http://n.sinaimg.cn/sinacn20118/135/w575h360/20190916/c336-ietnfsp6229069.jpg",
            "url": "https://k.sina.com.cn/article_6067221237_m169a272f503300hpkb.html?from=photo"
        },
        {
            "ctime": "2019-09-14 16:42",
            "title": "小姐姐穿汉服甩头换装，这个换装有没有惊艳到你们，喜欢吗？",
            "source": "新浪汉服",
            "picUrl": "http://n.sinaimg.cn/sinacn20116/199/w639h360/20190914/15d1-iepyyhi5615041.jpg",
            "url": "https://k.sina.com.cn/article_6067221237_m169a272f503300hoee.html?from=photo"
        },
        {
            "ctime": "2019-09-14 11:39",
            "title": "小姐姐这样一套汉服，转圈圈，真的好美，好漂亮！",
            "source": "新浪汉服",
            "picUrl": "http://n.sinaimg.cn/sinacn20111/199/w639h360/20190914/95de-iepyyhi4286861.jpg",
            "url": "https://k.sina.com.cn/article_6067221237_m169a272f503300ho7j.html?from=beauty"
        }
    ],
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

