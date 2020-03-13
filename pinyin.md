# 中文转拼音

> 可以将输入的中文转为拼音。



## 接口参数

请求地址：`/api/pinyin`

请求方法：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型      | 说明                                               |
| -------- | ---- | --------- | -------------------------------------------------- |
| `word`   | 是   | `string`  | 要转换的中文字符                                   |
| `de`     | 否   | `string`  | 拼音分割符，默认为一个空格，分隔符最多为一个字符串 |
| `tone`   | 否   | `boolean` | 拼音是否带音标，默认0。输入值 为 1 或者 0          |
| `abbr`   | 否   | `boolean` | 是否首字母模式，默认0。输入值 为 1 或者 0          |

## 返回参数

```json
{
"code": 200,
"msg": "success",
"data": {
"word": "ALAPI,免费API服务,支持短网址缩短,快递查询,天气接口,翻译接口,网易云接口等...",
"pinyin": "ALAPI, mian fei API fu wu, zhi chi duan wang zhi suo duan, kuai di cha xun, tian qi jie kou, fan yi jie kou, wang yi yun jie kou deng..."
},
"Author": {
"name": "Alone88",
"desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
}
}
```

