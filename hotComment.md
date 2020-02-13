# 网易云乐评

>**人这辈子，最害怕突然把某一首歌听懂了。 ——来自 北风神75 在「有多少爱可以重来」的评论**
>
>项目灵感来源于网易云音乐的与农夫山泉合作的乐瓶营销「乐瓶」——这 30 条乐评，是从网易云音乐后台点赞数最高的 8000 条乐评中，经过人工筛选产生的，它们文字简练，富有故事性，即使脱离歌曲本身也可以被理解。
>
>在使用网易云音乐的时候，常常在评论区看到与之共鸣的评论。有时候很想将其记录下来，同朋友分享。时间久了，那种感动依然不可褪去。
>
>你能在这倾听别人的故事，亦或许是你的故事。												form:[WangMao](https://blog.wangmao.me/hot-comments.html)

此接口随机返回一条网易云歌曲的热门评论，也可以指定返回一首歌曲的热门评论，目前总共有3000多条乐评。

你也可以提交自己喜欢的歌曲或者歌单给我们收录。

## 随机乐评

### 接口参数

接口地址：`/api/comment`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 |   类型   |                             说明                             |
| :------: | ---- | :------: | :----------------------------------------------------------: |
|   `id`   | 否   | `number` | 不加 `id` 则随机返回一条热评，如果输入指定歌曲`id`，则返回指定歌曲和它所有的热评。只返回系统收录的。 |

### 返回数据

[https://v1.alapi.cn/api/comment](https://v1.alapi.cn/api/comment)

| 参数名             | 含义                                      |
| ------------------ | ----------------------------------------- |
| song_id            | 歌曲 ID                                   |
| title              | 歌曲名称                                  |
| image              | 歌曲封面图片，已处理为 https 链接         |
| author             | 歌曲作者                                  |
| album              | 歌曲所属专辑                              |
| description        | 歌曲描述                                  |
| mp3_url            | 歌曲资源链接，已处理为 https 链接         |
| pub_date           | 歌曲发行时间                              |
| comment_id         | 评论 ID                                   |
| comment_user_id    | 评论所属用户 ID                           |
| comment_nickname   | 评论所属用户名称                          |
| comment_avatar_url | 评论所属用户头像链接，已处理为 https 链接 |
| comment_content    | 评论正文                                  |
| comment_pub_date   | 评论发表日期                              |

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "song_id": 1374154676,
        "title": "无期",
        "image": "https://p1.music.126.net/kFFj2ZXHP_cI_RV8Et7feA==/109951164630675384.jpg",
        "author": "光头华夏",
        "album": "无期",
        "description": "歌手：光头华夏。所属专辑：无期。",
        "mp3_url": "https://v1.alapi.cn/api/music/url?id=1374154676",
        "published_date": "2020-02-09 19:57:11",
        "comment_id": 1680126534,
        "comment_user_id": 1312202469,
        "comment_nickname": "璟钖",
        "comment_avatar_url": "https://p3.music.126.net/jgMr4l6zc4hQojKY69t5Rg==/109951164541407291.jpg",
        "comment_liked_count": 899,
        "comment_content": "我还能熬夜听歌，能点烟，证明我没有事",
        "comment_published_date": "2019-11-12 23:04:03"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

## 提交收录
> 可以将你喜欢的歌曲或者歌单提交给我们来收录歌曲的热门评论。
> 一天最多只能提交3次。

### 接口参数

接口地址：`/api/comment/submit`

请求方式：`get` `post`

请求参数：



| 参数名称 | 必选 |   类型   |                  说明                  |
| :------: | ---- | :------: | :------------------------------------: |
|   `id`   | 是   | `number` |       网易云歌曲或者歌单的 `id`        |
|  `type`  | 否   | `string` | 默认为歌单：`playlist`, 歌曲为：`song` |

### 返回数据

[https://v1.alapi.cn/api/comment/submit?id=1413812846&type=song](https://v1.alapi.cn/api/comment/submit?id=1413812846&type=song)

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "msg": "任务提交成功,队列"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

