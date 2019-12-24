# 获取头像

> 获取QQ 头像 和 Gravatar 头像。可以通过本接口获取 qq 头像和 Gravatar头像，并通过 CDN缓存加速
>
> 加快头像加载速度。



## 接口参数

请求地址：`/api/avatar`

请求方法：`get`  `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明                                          |
| -------- | ---- | -------- | --------------------------------------------- |
| `email`  | 是   | `string` | 返回数据类型。可选：`json` ，默认直接返回图片 |
| `size`   | 否   | `number` | 获取头像的尺寸，默认 ` 100`                   |

 `email`  参数 可以输入`QQ`邮箱，注册 `Gravatar` 的邮箱

## 返回数据

测试参数：`email=im@alone88.cn`

![](<https://v1.alapi.cn/api/avatar?email=im@alone88.cn>)

