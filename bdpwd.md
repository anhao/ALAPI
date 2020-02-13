# 百度云盘提取码接口

根据百度网盘的分享链接获取提取码。数据来自于全网收集，不保证每个分享链接都有提取码



## 接口参数

接口地址：`/api/bdpwd`

请求方式：`get` `post`

请求参数：

| 参数名 | 必选 | 类型     | 说明               |
| ------ | ---- | -------- | ------------------ |
| `url`  | 是   | `string` | 百度云盘的分享链接 |

百度云盘的分享链接支持以下格式:

`https://pan.baidu.com/share/init?surl=*****`

`https://pan.baidu.com/wap/init?surl=*****`

`https://pan.baidu.com/s/****`

## 测试返回

`https://v1.alapi.cn/api/bdpwd?url=https://pan.baidu.com/share/init?surl=vlny0C5moLIu97GvBzVw7Q`

**成功返回**：

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "share_url": "https://pan.baidu.com/share/init?surl=vlny0C5moLIu97GvBzVw7Q",
        "share_id": "vlny0C5moLIu97GvBzVw7Q",
        "password": "rhpb"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

**失败返回**：

```
{
    "code": 422,
    "msg": "提取码获取失败",
    "data": "",
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```