# 必应美图 - 每日一图

> 获取必应美图每天的一张美图
>
> https://cn.bing.com



## 接口参数

请求地址：`/api/bing`

请求方法：`get`  `post`

请求参数：

| 参数名称 | 必选 |类型|说明|
| -------- | ---- |----|----|
| `format` | 否 | `string` |返回数据类型。可选：`json` ，默认直接返回图片|

## 返回数据

测试参数：`format=json`

**2020-20-21更新：**

> 可以缩放图片大小
>
> 直接在图片链接后面加参数就可以了
>
> 比如：`http://file.alapi.cn/bing/2020/02/21/OHR.UffingStaffelseeWinter_ZH-CN4001263375_1920x1080.jpg`
>
> 后面加上 `!/both/500x200`
>
> 就变成：`http://file.alapi.cn/bing/2020/02/21/OHR.UffingStaffelseeWinter_ZH-CN4001263375_1920x1080.jpg!/both/500x200`
>
> 就可以缩放图片尺寸为 ：宽 500 像素，高 200 像素

```json
{
"code": 200,
"msg": "success",
"data": {
"url": "http://file.alapi.cn/bing/2020/02/21/OHR.UffingStaffelseeWinter_ZH-CN4001263375_1920x1080.jpg",
"startdate": "20200220",
"enddate": "20200221",
"copyright": "施塔弗尔湖畔乌芬附近的桦树大道，德国巴伐利亚 (© Reinhard Schmid/eStock Photo)",
"bing": "https://cn.bing.com/th?id=OHR.UffingStaffelseeWinter_ZH-CN4001263375_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
"th": "OHR.UffingStaffelseeWinter_ZH-CN4001263375_1920x1080.jpg"
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```



