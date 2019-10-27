# 蓝奏云 lanzous 直连解析

> 通过分享的链接，获取直接下载的地址

## 接口参数

请求地址: `/api/lanzou`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | 是 | string | 蓝奏云的分享链接 |
| format | 否 | string | 返回的数据类型,可选：`json` ，默认302跳转到下载链接 |

## 返回数据

测试参数 : `url=https://www.lanzous.com/i5k10wd&format=json`

```javascript
{
    "code": 200,
    "msg": "success",
    "data": {
        "status": "获取成功",
        "url": "https://vip.d0.baidupan.com/file/?AmRUagw9VWRRWFZuCj9SPlplVW0ELgRyAWBQe1QwUHYBIVYmC79SrQPNAr0KzVbWV+kEvwT7UbUHlFLtUCFStAKuVK8MaFXlUbxWowpwUiFaYVUiBH0EYAFvUDpUbVAOAWhWZQtrUjcDZAJkCmhWZ1c8BDIEaFF1B2ZSJ1AxUmECMVQ0DGRVNVE2VjQKbVJ1WnBVIARmBDQBNlBnVDFQfgExVjkLeVI3A2YCewo7VjZXaQRlBGxRYgdiUmJQaVJhAmNUMQxoVWdRMlYwCjpSY1oxVWIEbAQwATNQZ1QxUGgBY1ZkC2dSNQM0AmYKcFYlV2wEcwR9USYHc1IxUH5SOgJmVD4MZlUwUTdWNwpvUmRaJlUkBDIEawFjUDBUNVBgATRWNwtvUjMDYgJgCmpWZVc1BC8EdVF1B2ZSOFB7Um4CM1Q2DGdVOFEzVjAKblJqWjJVYQR9BHMBdlAhVDVQYAE0VjcLY1IwA20CZgpvVm9XOg=="
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

