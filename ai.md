# 内容审核

内容审核接口，支持 色情，暴恐，政治图片识别，文本违规识别...

本接口来自 **百度AI**,有些返回参数可参考百度AI 文档



## 文本审核

检测是否包含违规文本信息。检测是否包含：**色情文字**， **广告文字**，**敏感文字**，**涉政文字**， **灌水文字**

**低俗辱骂**

### 接口参数

请求地址：`/api/ai/image`

请求方式：`get` `post`

请求参数：



| 参数名称 | 必选 | 类型     | 说明         |
| -------- | ---- | -------- | ------------ |
| `text`   | 是   | `string` | 要检测的文本 |

### 返回参数

**返回参数**

| 参数名称 | 类型   | 详细说明                                                     |
| -------- | ------ | ------------------------------------------------------------ |
| logid    | uint64 | 正确调用生成的唯一标识码，用于问题定位                       |
| result   | object | 包含审核结果详情                                             |
| +spam    | int    | 请求中是否包含违禁，0表示非违禁，1表示违禁，2表示建议人工复审 |
| +reject  | array  | 审核未通过的类别列表与详情                                   |
| +review  | array  | 待人工复审的类别列表与详情                                   |
| +pass    | array  | 审核通过的类别列表与详情                                     |
| ++label  | int    | 请求中的违禁类型                                             |
| ++score  | float  | 违禁检测分，范围0~1，数值从低到高代表风险程度的高低          |
| ++hit    | array  | 违禁类型对应命中的违禁词集合，可能为空                       |

返回通过示例

```
{
    "code": 200,
    "msg": "success",
    "data": {
        "spam": 0,
        "review": [],
        "reject": [],
        "pass": [
            {
                "score": 0.2,
                "hit": [],
                "label": 1
            },
            {
                "score": 0.12200000137091,
                "hit": [],
                "label": 2
            },
            {
                "score": 0,
                "hit": [],
                "label": 3
            },
            {
                "score": 0.2195476119403,
                "hit": [],
                "label": 4
            },
            {
                "score": 0.017000000923872,
                "hit": [],
                "label": 5
            }
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

不通过示例：

``````
{
    "code": 200,
    "msg": "success",
    "data": {
        "spam": 2,
        "review": [
            {
                "score": 0.8,
                "hit": [
                    "双筒猎枪"
                ],
                "label": 1
            },
            {
                "score": 0.63,
                "hit": [
                    "傻x"
                ],
                "label": 5
            }
        ],
        "reject": [],
        "pass": [
            {
                "score": 0.012000000104308,
                "hit": [],
                "label": 2
            },
            {
                "score": 0,
                "hit": [],
                "label": 3
            },
            {
                "score": 0.33230149253731,
                "hit": [],
                "label": 4
            }
        ]
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
``````



## 图片识别

用来检测图片是否色情，暴恐，政治，公众，OCR,网图OCR,恶心图,水印二维码

### 接口参数

请求地址：`/api/ai/image`

请求方式：`get` `post`

请求参数：

| 参数名称 | 必选 | 类型     | 说明                                 |
| -------- | ---- | -------- | ------------------------------------ |
| `url`    | 否   | `string` | 图片 `url` 地址                      |
| `file`   | 否   | `image`  | 上传要识别的图片,`post` 方式上传     |
| `type`   | 否   | `string` | 检测的类型 ,默认 色情检测 `antiporn` |

**type** 参数说明

**type** 支持多个组合识别，如 `type=public,antiporn` 多个类型用英文逗号分隔

更多返回参数可参考百度AI 文档，写文档好累...（；´д｀）ゞ

| 参数名称     | 说明         |
| ------------ | ------------ |
| `ocr`        | 通用文字识别 |
| `public`     | 公众人物识别 |
| `politician` | 政治人物识别 |
| `antiporn`   | 色情识别     |
| `terror`     | 暴恐识别。   |
| `webimage`   | 网图OCR识别  |
| `disgust`    | 恶心图       |
| `watermark`  | 水印、二维码 |

### 返回参数

**色情识别**(默认类型)

`data` 下面 `antiporn` 参数就是 type 参数。`probability` ： 不合规项置信度。`class_name` ：描述

`conclusion` 最后识别结果

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "antiporn": {
            "result": [
                {
                    "probability": 0.000116,
                    "class_name": "性感"
                },
                {
                    "probability": 0.998825,
                    "class_name": "色情"
                },
                {
                    "probability": 0.001059,
                    "class_name": "正常"
                }
            ],
            "conclusion": "色情",
            "log_id": 1335898886229066160,
            "result_fine": [
                {
                    "probability": 0.978202,
                    "class_name": "一般色情"
                },
                {
                    "probability": 0.020615,
                    "class_name": "卡通色情"
                },
                {
                    "probability": 8.0e-6,
                    "class_name": "SM"
                },
                {
                    "probability": 7.2e-5,
                    "class_name": "艺术品色情"
                },
                {
                    "probability": 3.6e-5,
                    "class_name": "儿童裸露"
                },
                {
                    "probability": 0.000258,
                    "class_name": "低俗"
                },
                {
                    "probability": 0.000608,
                    "class_name": "性玩具"
                },
                {
                    "probability": 3.4e-5,
                    "class_name": "女性性感"
                },
                {
                    "probability": 1.2e-5,
                    "class_name": "卡通女性性感"
                },
                {
                    "probability": 8.2e-5,
                    "class_name": "男性性感"
                },
                {
                    "probability": 2.8e-5,
                    "class_name": "自然男性裸露"
                },
                {
                    "probability": 4.0e-6,
                    "class_name": "亲密行为"
                },
                {
                    "probability": 8.0e-6,
                    "class_name": "卡通亲密行为"
                },
                {
                    "probability": 1.9e-5,
                    "class_name": "特殊类"
                },
                {
                    "probability": 1.0e-6,
                    "class_name": "一般正常"
                },
                {
                    "probability": 1.2e-5,
                    "class_name": "卡通正常"
                }
            ],
            "result_num": 16,
            "confidence_coefficient": "确定"
        }
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```

## 内容审核

- 百度官方违禁图库：基于百度海量历史数据，提供对敏感事件、场景及对监管机构要求封禁图片的识别能力
- 色情识别：检测图中是否包含各类色情违禁、儿童裸露、女性性感等内容，细分为16个审核标签
- 暴恐识别：检测图中是否包含暴恐旗帜/人物、警察部队、军事武器等内容，细分为11个标签
- 旗帜标志识别：对中国国旗、地图、党徽党旗、警徽、臂章、及反动组织的旗帜、徽章、标志进行识别
- 政治人物识别：检测图中是否包含政治人物/公众人物的人脸，并可添加自定义违规人物人脸
- 用户头像审核：对图像中是否要包含真人头像、是否允许遮挡、人脸占比大小等进行审核
- 图文审核：检测图片中的文字是否包含色情、暴恐违禁、政治敏感、广告推广、低俗辱骂、低质灌水等内容
- 广告检测：检测图片中是否包含水印、二维码、条形码，并可识别具体二维码、条形码中的内容
- 恶心图像识别：检测图片中是否包含病变组织、流血恐怖等恶心内容
- 图像质量检测：对图像的清晰度和美观度进行打分
- 自定义图像黑名单：用户可以创建自定义图片黑名单，实现对用户黑名单中的图片进行拦截
- 自定义图像白名单：用户可以创建自定义图片白名单，实现对用户黑名单中的图片进行放过
- 自定义图片审核-EasyDL：针对百度仍未支持的审核维度，用户可以在EasyDL中创建对应的图像识别/分类模型，然后在内容审核平台中调用该模型，实现统一审核

### 接口参数



| 参数名称 | 必选 | 类型     | 说明                             |
| -------- | ---- | -------- | -------------------------------- |
| `url`    | 否   | `string` | 图片 `url` 地址                  |
| `file`   | 否   | `image`  | 上传要识别的图片,`post` 方式上传 |

### 返回参数

**返回数据参数详情**

| 字段         | 类型     | 是否必须 | 说明                                                         |
| ------------ | -------- | -------- | ------------------------------------------------------------ |
| log_id       | Long     | 是       | 请求唯一id                                                   |
| error_code   | uint64   | 否       | 错误提示码，失败才返回，成功不返回                           |
| error_msg    | string   | 否       | 错误提示信息，失败才返回，成功不返回                         |
| conclusion   | string   | 否       | 审核结果，成功才返回，失败不返回。可取值1.合规,2.疑似，3.不合规 |
| data         | object[] | 否       | 审核项详细信息，响应成功并且conclusion为疑似或不合规时才返回，响应失败或conclusion为合规是不返回。 |
| +error_code  | uint64   | 否       | 内层错误提示码，底层服务失败才返回，成功不返回               |
| +error_msg   | string   | 否       | 内层错误提示信息，底层服务失败才返回，成功不返回             |
| +type        | Integer  | 否       | 审核类型，1：色情、2：性感、3：暴恐、4:恶心、5：水印码、6：二维码、7：条形码、8：政治人物、9：敏感词、10：自定义敏感词 |
| +msg         | String   | 否       | 不合规项描述信息                                             |
| +probability | double   | 否       | 不合规项置信度                                               |
| +stars       | object[] | 否       | 政治人物列表数组，只有政治任务审核不通过才有                 |
| +words       | string   | 否       | 审核不通过敏感词，只有敏感词审核不通过才有                   |

示例：

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "conclusion": "不合规",
        "log_id": 15764569885195551,
        "data": [
            {
                "msg": "存在一般色情不合规",
                "conclusion": "不合规",
                "probability": 0.978202,
                "subType": 0,
                "conclusionType": 2,
                "type": 1
            }
        ],
        "conclusionType": 2
    },
    "Author": {
        "name": "Alone88",
        "desc": "由Alone88提供的免费API 服务，官方文档：www.alapi.cn"
    }
}
```