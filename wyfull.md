# 网易新闻详情解析

> 通过 网易新闻 `docid` , 获取新闻的主体详情解析

## 接口参数

请求地址：`/api/new/detail`

请求方式：`get` `post`

请求参数

| 参数名称 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | :--- |
| `docid` | 是 | `string` | 网易新闻的 `docid` |

## 返回数据

测试参数 `docid=EQ1NGK0I0001875P`

```javascript
{
    "code": 200,
    "msg": "success",
    "data": {
        "EQ1NGK0I0001875P": {
            "template": "normal",
            "img": [],
            "searchKw": [],
            "picCards": [],
            "topiclist_news": [
                {
                    "ename": "yaowenspecial",
                    "hasCover": false,
                    "tname": "要闻",
                    "alias": "yaowenspecial",
                    "subnum": "0",
                    "tid": "T1467284926140",
                    "cid": "C1348647991705"
                },
                {
                    "ename": "androidnews",
                    "hasCover": false,
                    "tname": "头条",
                    "alias": "Top News",
                    "subnum": "0",
                    "tid": "T1348647909107",
                    "cid": "C1348646712614"
                },
                {
                    "ename": "iosnews",
                    "hasCover": false,
                    "tname": "头条",
                    "alias": "Top News",
                    "subnum": "0",
                    "tid": "T1348647853363",
                    "cid": "C1348646712614"
                }
            ],
            "book": [],
            "link": [],
            "shareLink": "https://c.m.163.com/news/a/EQ1NGK0I0001875P.html?spss=newsapp",
            "source": "梨视频",
            "video": [
                {
                    "broadcast": "in",
                    "sizeHD": 4330,
                    "url_mp4": "http://flv3.bn.netease.com/videolib1/1909/26/6z3cxw5dr/SD/6z3cxw5dr-mobile.mp4",
                    "videoRatio": 1.78,
                    "alt": "车祸瞬间，妈妈护住孩子自己却身亡",
                    "mp4Hd_url": "http://flv3.bn.netease.com/videolib1/1909/26/6z3cxw5dr/HD/6z3cxw5dr-mobile.mp4",
                    "length": 63,
                    "videosource": "其他",
                    "appurl": "",
                    "m3u8Hd_url": "http://flv0.bn.netease.com/videolib1/1909/26/6z3cxw5dr/HD/movie_index.m3u8",
                    "mp4_url": "http://flv3.bn.netease.com/videolib1/1909/26/6z3cxw5dr/SD/6z3cxw5dr-mobile.mp4",
                    "sizeSD": 2524,
                    "sid": "",
                    "cover": "http://videoimg.nos-jd.163yun.com/cmssnapshot/20190926/cyiP11383_4.jpg",
                    "vid": "VKP3TDN30",
                    "url_m3u8": "http://flv3.bn.netease.com/videolib1/1909/26/6z3cxw5dr/SD/6z3cxw5dr-mobile.mp4",
                    "sizeSHD": 0,
                    "ref": "<!--VIDEO#0-->",
                    "topicid": "00019FGD",
                    "commentboard": "video_bbs",
                    "size": "",
                    "commentid": "KP3TDN30050835RB",
                    "m3u8_url": "http://flv0.bn.netease.com/videolib1/1909/26/6z3cxw5dr/SD/movie_index.m3u8"
                }
            ],
            "threadVote": 77,
            "title": "母亲车祸瞬间用身体护住3岁孩子 自己却不幸身亡",
            "body": "<p><!--VIDEO#0--></p><p>　　2019年9月25日，辽宁沈阳，一女子带孩子过马路被一轿车撞倒。医护人员赶到现场后，宣布女子已死亡，万幸的是孩子没有受伤。据市民介绍，该女子是在接孩子放学回家途中遭遇车祸的，被撞倒瞬间，女子本能的抱住孩子。</p><p>原标题：车祸瞬间，妈妈护住孩子自己却身亡</p><p><!--viewpoint--></p>",
            "tid": "",
            "picnews": true,
            "advertiseType": "0001",
            "articleType": "normal",
            "digest": "",
            "boboList": [],
            "ptime": "2019-09-26 23:30:41",
            "ec": "刘效武_NN4113",
            "docid": "EQ1NGK0I0001875P",
            "threadAgainst": 5,
            "hasNext": false,
            "recImgsrc": "http://cms-bucket.ws.126.net/2019/09/26/7ca05dca65f8478f962b3856f089616b.png",
            "dkeys": "车祸,轿车,本能,沈阳,辽宁",
            "ydbaike": [],
            "hidePlane": false,
            "replyCount": 2879,
            "voicecomment": "off",
            "replyBoard": "news_shehui7_bbs",
            "votes": [],
            "topiclist": []
        }
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

