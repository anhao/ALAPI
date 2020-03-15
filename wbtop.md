# 微博热搜榜

> 获取实时微博热搜榜



## 接口参数

请求地址：`/api/new/wbtop`

请求方式：`get`  `post`

请求参数

| 参数名称 | 必选 | 类型 | 说明                |
| -------- | ---- | ---- | ------------------- |
| `num`    | 否   | int  | 数据条数，默认 `50` |



## 返回数据

测试参数：`num=5``

``hot_word`: 微博热搜词

`hot_word_num` : 热度

```json
{
"code": 200,
"msg": "success",
"data": [
{
"hot_word": "英国将自我隔离70岁以上老人",
"hot_word_num": "2782312"
},
{
"hot_word": "火车学生票使用时间延长至5月31日",
"hot_word_num": "1576430"
},
{
"hot_word": "拒吃野生动物",
"hot_word_num": "1351373"
},
{
"hot_word": "阿联酋地标为中国亮灯",
"hot_word_num": "1295108"
},
{
"hot_word": "当老师加了家长微信后",
"hot_word_num": "1267019"
},
{
"hot_word": "买过最无语的假货",
"hot_word_num": "1261886"
},
{
"hot_word": "意大利切内市市长病逝",
"hot_word_num": "1154564"
},
{
"hot_word": "宣美开微博",
"hot_word_num": "1148547"
},
{
"hot_word": "Puff偷家",
"hot_word_num": "832181"
},
{
"hot_word": "挪威将寻求从中国进口医疗物资",
"hot_word_num": "770855"
},
{
"hot_word": "美国多个机场大量乘客滞留",
"hot_word_num": "746907"
},
{
"hot_word": "天津新冠肺炎确诊病例清零",
"hot_word_num": "722642"
},
{
"hot_word": "武汉非新冠肺炎患者就医安排",
"hot_word_num": "690874"
},
{
"hot_word": "哈尔滨下雪",
"hot_word_num": "658270"
},
{
"hot_word": "冰糖炖雪梨海外版预告片",
"hot_word_num": "594291"
},
{
"hot_word": "官方回应隔离14天收14000元",
"hot_word_num": "593719"
},
{
"hot_word": "你是江苏队小可爱",
"hot_word_num": "590332"
},
{
"hot_word": "被口罩封印住的颜值",
"hot_word_num": "587719"
},
{
"hot_word": "陕西护士让樱花在病房绽放",
"hot_word_num": "584341"
},
{
"hot_word": "你见过最惊艳的毕业照",
"hot_word_num": "581289"
},
{
"hot_word": "人猴无障碍交流",
"hot_word_num": "575618"
},
{
"hot_word": "邱晨",
"hot_word_num": "567192"
},
{
"hot_word": "湖北襄阳机关事业单位16日恢复上班",
"hot_word_num": "499578"
},
{
"hot_word": "为了省钱做过最卑微的事",
"hot_word_num": "470756"
},
{
"hot_word": "NBA打假大会",
"hot_word_num": "439772"
},
{
"hot_word": "所有无症状入境北京人员集中隔离14天",
"hot_word_num": "380080"
},
{
"hot_word": "北京地铁部分车站早高峰限流",
"hot_word_num": "353236"
},
{
"hot_word": "中国以外已确诊超7万例新冠肺炎",
"hot_word_num": "335747"
},
{
"hot_word": "蔡徐坤点评",
"hot_word_num": "311297"
},
{
"hot_word": "伊朗总统谴责美国制裁妨碍抗击疫情",
"hot_word_num": "294051"
},
{
"hot_word": "武汉定点医院月底前将全部完成修复",
"hot_word_num": "281584"
},
{
"hot_word": "杨奇函",
"hot_word_num": "281440"
},
{
"hot_word": "上海未参加医保境外输入病例自费治疗",
"hot_word_num": "280949"
},
{
"hot_word": "IU四月刊封面",
"hot_word_num": "276910"
},
{
"hot_word": "联合国秘书长呼吁全球共同向新冠宣战",
"hot_word_num": "275150"
},
{
"hot_word": "我近视但我能看到帅哥",
"hot_word_num": "275118"
},
{
"hot_word": "武警万亩樱花林中练兵",
"hot_word_num": "274120"
},
{
"hot_word": "315照骗大赛",
"hot_word_num": "261292"
},
{
"hot_word": "木子洋给RNG加油",
"hot_word_num": "247337"
},
{
"hot_word": "少儿歌曲方舱医院真神奇",
"hot_word_num": "247067"
},
{
"hot_word": "伊朗一天新增新冠肺炎1209例",
"hot_word_num": "246369"
},
{
"hot_word": "聊天终结者的日常",
"hot_word_num": "245352"
},
{
"hot_word": "千奇百怪的比心",
"hot_word_num": "245240"
},
{
"hot_word": "镜头下最美的日落",
"hot_word_num": "244540"
},
{
"hot_word": "印度新冠肺炎确诊病例破百",
"hot_word_num": "243327"
},
{
"hot_word": "RNG战胜WE",
"hot_word_num": "242861"
},
{
"hot_word": "马来西亚激增190例确诊病例",
"hot_word_num": "242334"
},
{
"hot_word": "新加坡女子戴口罩晕倒无人敢扶",
"hot_word_num": "241756"
},
{
"hot_word": "盖尔加朵分享武汉医护人员摘口罩视频",
"hot_word_num": "238822"
},
{
"hot_word": "纽约时报记者介绍中国疫情防控",
"hot_word_num": "233600"
}
],
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

