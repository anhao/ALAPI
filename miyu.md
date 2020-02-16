# 谜语大全

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

返回参数说明：

`current_page` ：当前请求页

`data` : 数组集合，笑话的列表

​	`title` : 谜语标题

​	`content` : 谜语的内容

​	`answer`:  答案

​	`type`: 谜语类型

​	`type_name.name` : 谜语类型中文

​	`type_name.desc` : 谜语类型说明

`first_page_url` 第一页链接地址

`from` :

`last_page`  最后一页页数

`last_page_url` 最后一页链接

`next_page_url` 下一页链接地址

`path` 当前 `api` 地址

`per_page` 上一页数量

`prev_page_url` 上一页地址

`total` 笑话总的数量

```json
{
"code": 200,
"msg": "success",
"data": {
"current_page": 1,
"data": [
{
"title": "秦观酒兴大发·下楼格--打一诗词句",
"content": "秦观酒兴大发·下楼格",
"answer": "多少游春意",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "富而思进--打一诗词句",
"content": "富而思进",
"answer": "觉道之无穷",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "孤零零的，闲时烦请关注--打一诗词句",
"content": "孤零零的，闲时烦请关注",
"answer": "一个空劳牵挂",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "送故人--打一诗词句",
"content": "送故人",
"answer": "却是故时相识",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "早看东南，晚看西北--打一诗词句",
"content": "早看东南，晚看西北",
"answer": "天下事，可知矣",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "只开店铺不设摊--打一诗词句",
"content": "只开店铺不设摊",
"answer": "所营唯第宅",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "牛郎织女终分手--打一诗词句",
"content": "牛郎织女终分手",
"answer": "人有悲欢离合",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "一笑之余--打一诗词句",
"content": "一笑之余",
"answer": "只可自怡悦",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "三月正当三十日--打一诗词句",
"content": "三月正当三十日",
"answer": "花落知多少",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
},
{
"title": "细想碧霄黄泉事--打一诗词句",
"content": "细想碧霄黄泉事",
"answer": "何似在人间",
"type": "shiwenmiyu",
"type_name": {
"type": "shiwenmiyu",
"name": "诗文谜语",
"desc": "顾名思义，诗文迷指猜诗文的谜语"
}
}
],
"first_page_url": "https://v1.alapi.cn/api/riddle?page=1",
"from": 1,
"last_page": 574,
"last_page_url": "https://v1.alapi.cn/api/riddle?page=574",
"next_page_url": "https://v1.alapi.cn/api/riddle?page=2",
"path": "https://v1.alapi.cn/api/riddle",
"per_page": 10,
"prev_page_url": null,
"to": 10,
"total": 5731
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

