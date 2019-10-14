# 域名备案查询 接口

> 获取域名是否备案，查询备案号



### 接口参数

请求地址： `/api/icp`

请求方式：`get`   `post`

请求参数：

| 参数名称 | 必选 | 类型   | 说明                       |
| -------- | ---- | ------ | -------------------------- |
| domain   | 是   | domain | 要查询的域名，例如：qq.com |



### 返回数据

测试参数：`domain=qq.com`

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "domain": "qq.com",
        "siteName": "腾讯网",
        "icp": "粤B2-20090059-5",
        "is_icp": true
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

