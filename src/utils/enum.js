
// front_card 身份证正面 /   back_card 身份证背面
// front_card_id 身份证正面id /   back_card_id 身份证背面id

// 电子签名(base64)  esign    
// 电子签名id   sign_image_id


export const STATUS = {
    // 状态0预上线1上线中2推荐
    0: '预上线',
    1: '上线中',
    2: '推荐上线中'
}

export const PROJECTSTATUS = {
    // 0标示项目未开始1进行中2已经达到认购目标3项目已结束
    0: '项目未开始',
    0: '进行中',
    0: '已经达到认购目标',
    0: '项目已结束',
}

// 订单状态
export const ORDERSTATUS = {
    1: '支付中',
    2: '支付成功',
    3: '支付失败',
    4: '审核失败',
    5: '审核通过',
    6: '生成订单'
}
