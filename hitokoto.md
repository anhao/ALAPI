# Hitokoto 一言

说明：动漫也好、小说也好、网络也好，不论在哪里，我们总会看到有那么一两个句子能穿透你的心。我们把这些句子汇聚起来，形成一言网络，以传递更多的感动。如果可以，我们希望我们没有停止服务的那一天。

简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是一言存在的目的。_本段文本源自 hitokoto.us._

## 接口参数

接口地址：`/api/hitokoto`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型 | 说明 |
| :---: | :--- | :---: | :---: |
| `format` | 否 | `string` | 请求返回的数据类型：`json`  `text`  默认`json` |
| `type` | 否 | `string` | 一言的类型:`a`  `b`  `c`  `d`   `e`   `f`   `g` |

**Type参数说明**

| 参数 | 说明 |
| :---: | :---: |
| a | Anime - 动画 |
| b | Comic – 漫画 |
| c | Game – 游戏 |
| d | Novel – 小说 |
| e | Myself – 原创 |
| f | Internet – 来自网络 |
| g | Other – 其他 |

## 返回数据

```javascript
{
    "code": 200,
    "msg": "success",
    "data": {
        "id": 1084,
        "hitokoto": "人不是靠做出来的 而是靠活出来的。",
        "type": "g",
        "from": "士兵突击",
        "creator": "哆啦尼可夫"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

{% api-method method="get" host="https://v1.alapi.cn/api/hitokoto" path="" %}
{% api-method-summary %}
 请求测试
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="type" type="string" required=false %}
a
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



