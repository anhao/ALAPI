# 农历查询

> 根据输入的阳历日期查询相应的农历信息。`农历` `干支` `五行` `生肖` `节气` 等等



## 接口参数

请求地址：`/api/lunar`

请求方法：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型   | 说明                                                         |
| -------- | ---- | ------ | ------------------------------------------------------------ |
| `date`   | 否   | `date` | 阳历的时间，格式为：`yyyy-MM-dd-HH` ，2020-03-23-12 [年份-月份-日-小时] |
| `year`   | 否   | date   | 年份, `yyyy`                                                 |
| `month`  | 否   | date   | 月份 `MM`                                                    |
| `day`    | 否   | date   | 日 `dd`                                                      |
| `hour`   | 否   | date   | 小时 `HH`                                                    |

**PS:使用year 参数时，month,day,hour 必须同时有值。使用 date 参数则不需要 year,month,day,hour 参数**

**不填参数时，默认获取当天的农历信息**

## 返回参数

```json5
{
"code": 200,
"msg": "success",
"data": {
"lunar_year": "2020",//农历年
"lunar_month": "02",//农历月
"lunar_day": "19",//农历日
"lunar_hour": "21",//农历时
"lunar_year_chinese": "二零二零",//(中文)农历年
"lunar_month_chinese": "二月",//(中文)农历月
"lunar_day_chinese": "十九",//(中文)农历日
"ganzhi_year": "庚子",// (干支)年柱
"ganzhi_month": "己卯",// (干支)月柱
"ganzhi_day": "甲寅",// (干支)日柱
"ganzhi_hour": "乙亥", // (干支)时柱
"wuxing_year": "金水",//五行年
"wuxing_month": "土木", //五行月
"wuxing_day": "木木", // 五行日
"wuxing_hour": "木水",//五行水
"color_year": "白", //颜色年
"color_month": "黄",// 颜色月
"color_day": "青", //颜色日
"color_hour": "青", // 颜色时
"animal": "鼠",//生肖 
"term": null,//节气
"is_leap": false,//是否闰年
"gregorian_year": "2020", //公历年
"gregorian_month": "03", //公历月
"gregorian_day": "12", //公历日
"week_no": 4,//(数组)星期
"week_name": "星期四",// (中文)星期
"is_today": true,//是否今天
"constellation": "双鱼",//星座
"is_same_year": true //是否今年
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

