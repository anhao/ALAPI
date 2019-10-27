# Whois 域名 接口

> 获取域名的的 `whois` 信息

## 接口参数

请求地址： `/api/whois`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | :--- |
| domain | 是 | domain | 要查询的域名，例如：qq.com |

## 返回数据

测试参数：`domain=qq.com`

```javascript
{
    "code": 200,
    "msg": "success",
    "data": {
        "is_Reg": true,
        "domain": "QQ.COM",
        "suffix": "com",
        "Whois_Server": "whois.markmonitor.com",
        "Creation_Date": "1995-05-04T04:00:00Z",
        "Expiration_Date": "2027-07-27T02:09:19Z",
        "Registrar": "MarkMonitor Inc.",
        "Registrant_Email": "abusecomplaints@markmonitor.com",
        "Registrant_Phone": "+1.2083895740",
        "Domain_Status": [
            "禁止删除(clientDeleteProhibited)",
            "禁止转移(clientTransferProhibited)",
            "禁止修改(clientUpdateProhibited)",
            "禁止删除(serverDeleteProhibited)",
            "禁止转移(serverTransferProhibited)",
            "禁止修改(serverUpdateProhibited)"
        ],
        "Name_Server": [
            "NS1.QQ.COM",
            "NS2.QQ.COM",
            "NS3.QQ.COM",
            "NS4.QQ.COM"
        ],
        "DNSSEC": "unsigned"
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

