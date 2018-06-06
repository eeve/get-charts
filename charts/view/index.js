export default `
// 自定义样式
const style = {
    background: 'transparent',
    padding: '10px'
}
// 需要加载的js文件
const scripts = [
    '//d3js.org/d3-interpolate.v1.min.js',
    '//d3js.org/d3-scale.v2.min.js'
]

const data = {
    "layout": "circular",
    "nodes": [
        {
            "size": 76,
            "name": "文书",
            "category": 7
        },
        {
            "size": 27,
            "name": "科技设计部",
            "category": 38
        },
        {
            "size": 3,
            "name": "体协",
            "category": 98
        },
        {
            "size": 17,
            "name": "成本管理部",
            "category": 51
        },
        {
            "size": 13,
            "name": "组织部",
            "category": 62
        },
        {
            "size": 2,
            "name": "风险控制部",
            "category": 59
        },
        {
            "size": 2,
            "name": "纪委办公室(巡视办)",
            "category": 61
        },
        {
            "size": 12,
            "name": "公司领导",
            "category": 74
        },
        {
            "size": 2,
            "name": "中国中铁股份有限公司",
            "category": 102
        },
        {
            "size": 2,
            "name": "独立董事",
            "category": 58
        },
        {
            "size": 2,
            "name": "中铁四局",
            "category": 55
        },
        {
            "size": 4,
            "name": "建设分公司",
            "category": 67
        },
        {
            "size": 27,
            "name": "战略规划部",
            "category": 45
        },
        {
            "size": 1,
            "name": "机关党委",
            "category": 42
        },
        {
            "size": 1,
            "name": "党委收发室",
            "category": 72
        },
        {
            "size": 16,
            "name": "投资发展部",
            "category": 18
        },
        {
            "size": 5,
            "name": "信访",
            "category": 35
        },
        {
            "size": 4,
            "name": "总公司两校",
            "category": 70
        },
        {
            "size": 9,
            "name": "子公司",
            "category": 56
        },
        {
            "size": 3,
            "name": "汽车队",
            "category": 71
        },
        {
            "size": 1,
            "name": "哈大铁路客运专线指挥",
            "category": 23
        },
        {
            "size": 6,
            "name": "子公司党委",
            "category": 69
        },
        {
            "size": 1,
            "name": "中铁电化局",
            "category": 64
        },
        {
            "size": 32,
            "name": "财务部",
            "category": 76
        },
        {
            "size": 16,
            "name": "物资采购管理中心",
            "category": 1
        },
        {
            "size": 7,
            "name": "新闻中心",
            "category": 10
        },
        {
            "size": 20,
            "name": "工会",
            "category": 43
        },
        {
            "size": 1,
            "name": "中铁七局",
            "category": 73
        },
        {
            "size": 4,
            "name": "执监室",
            "category": 68
        },
        {
            "size": 3,
            "name": "外派专职董、监事",
            "category": 89
        },
        {
            "size": 10,
            "name": "工业设备部",
            "category": 9
        },
        {
            "size": 1,
            "name": "子公司纪委",
            "category": 46
        },
        {
            "size": 2,
            "name": "国有企业监事会05办",
            "category": 47
        },
        {
            "size": 5,
            "name": "案检室",
            "category": 0
        },
        {
            "size": 4,
            "name": "分公司",
            "category": 14
        },
        {
            "size": 76,
            "name": "总裁办公室(党委办公室)",
            "category": 75
        },
        {
            "size": 1,
            "name": "党校",
            "category": 79
        },
        {
            "size": 8,
            "name": "专职董监事",
            "category": 52
        },
        {
            "size": 1,
            "name": "上海办事处",
            "category": 22
        },
        {
            "size": 1,
            "name": "子公司董事会",
            "category": 2
        },
        {
            "size": 1,
            "name": "中铁设计咨询",
            "category": 48
        },
        {
            "size": 4,
            "name": "金融市场部",
            "category": 49
        },
        {
            "size": 4,
            "name": "结算业务部",
            "category": 44
        },
        {
            "size": 6,
            "name": "信贷业务部",
            "category": 50
        },
        {
            "size": 4,
            "name": "股份公司总部",
            "category": 34
        },
        {
            "size": 2,
            "name": "分公司党委",
            "category": 39
        },
        {
            "size": 14,
            "name": "安全生产部",
            "category": 25
        },
        {
            "size": 2,
            "name": "项目公司 指挥部 ",
            "category": 37
        },
        {
            "size": 43,
            "name": "董事会(监事会)办公室",
            "category": 66
        },
        {
            "size": 1,
            "name": "中铁大桥局",
            "category": 6
        },
        {
            "size": 4,
            "name": "宏达中心",
            "category": 103
        },
        {
            "size": 2,
            "name": "项目公司 指挥部 党委",
            "category": 96
        },
        {
            "size": 6,
            "name": "政研会",
            "category": 27
        },
        {
            "size": 89,
            "name": "行政管理部",
            "category": 65
        },
        {
            "size": 20,
            "name": "秘书",
            "category": 28
        },
        {
            "size": 1,
            "name": "中铁山桥",
            "category": 26
        },
        {
            "size": 19,
            "name": "纪委（监察部）",
            "category": 53
        },
        {
            "size": 1,
            "name": "子公司团委",
            "category": 30
        },
        {
            "size": 1,
            "name": "中铁建工",
            "category": 20
        },
        {
            "size": 1,
            "name": "中铁宝桥",
            "category": 94
        },
        {
            "size": 1,
            "name": "综合",
            "category": 29
        },
        {
            "size": 9,
            "name": "审计部",
            "category": 16
        },
        {
            "size": 8,
            "name": "宏达资产管理中心",
            "category": 36
        },
        {
            "size": 1,
            "name": "中铁三局",
            "category": 100
        },
        {
            "size": 1,
            "name": "中海外",
            "category": 93
        },
        {
            "size": 2,
            "name": "中铁二院",
            "category": 101
        },
        {
            "size": 10,
            "name": "金融管理部",
            "category": 40
        },
        {
            "size": 22,
            "name": "技术保障组",
            "category": 80
        },
        {
            "size": 19,
            "name": "三总师副职",
            "category": 41
        },
        {
            "size": 1,
            "name": "中铁机械院",
            "category": 86
        },
        {
            "size": 1,
            "name": "行政收发室",
            "category": 87
        },
        {
            "size": 2,
            "name": "中铁九局",
            "category": 84
        },
        {
            "size": 7,
            "name": "信息技术部",
            "category": 97
        },
        {
            "size": 10,
            "name": "劳资社保部",
            "category": 5
        },
        {
            "size": 1,
            "name": "中铁隧道",
            "category": 77
        },
        {
            "size": 11,
            "name": "董监办",
            "category": 88
        },
        {
            "size": 2,
            "name": "项目公司 指挥部",
            "category": 81
        },
        {
            "size": 4,
            "name": "中铁人才交流咨询有限公司",
            "category": 4
        },
        {
            "size": 14,
            "name": "综合管理部",
            "category": 83
        },
        {
            "size": 4,
            "name": "审教室",
            "category": 11
        },
        {
            "size": 24,
            "name": "国际业务部",
            "category": 99
        },
        {
            "size": 2,
            "name": "中铁一局",
            "category": 8
        },
        {
            "size": 3,
            "name": "总公司两校党委",
            "category": 33
        },
        {
            "size": 1,
            "name": "中铁信托",
            "category": 78
        },
        {
            "size": 5,
            "name": "中国中铁报社",
            "category": 3
        },
        {
            "size": 8,
            "name": "互信用户",
            "category": 63
        },
        {
            "size": 20,
            "name": "法律事务部",
            "category": 92
        },
        {
            "size": 10,
            "name": "经营开发部",
            "category": 60
        },
        {
            "size": 2,
            "name": "中铁十局",
            "category": 21
        },
        {
            "size": 3,
            "name": "国际事业部",
            "category": 17
        },
        {
            "size": 34,
            "name": "公司领导及高管",
            "category": 95
        },
        {
            "size": 2,
            "name": "中铁二局",
            "category": 12
        },
        {
            "size": 3,
            "name": "子公司工会",
            "category": 57
        },
        {
            "size": 1,
            "name": "中铁西南院",
            "category": 19
        },
        {
            "size": 1,
            "name": "中铁五局",
            "category": 15
        },
        {
            "size": 17,
            "name": "办公室",
            "category": 24
        },
        {
            "size": 8,
            "name": "团委",
            "category": 54
        },
        {
            "size": 42,
            "name": "企业文化部(党委宣传部)",
            "category": 31
        },
        {
            "size": 1,
            "name": "子公司监事会",
            "category": 82
        },
        {
            "size": 1,
            "name": "中铁六局",
            "category": 90
        },
        {
            "size": 39,
            "name": "干部部",
            "category": 32
        },
        {
            "size": 1,
            "name": "中铁西北院",
            "category": 91
        },
        {
            "size": 2,
            "name": "宏达中心党委",
            "category": 85
        },
        {
            "size": 1,
            "name": "中铁八局",
            "category": 13
        }
    ],
    "links": [
        {
            "length": 0.6666666666666666,
            "source": 43,
            "target": 42,
            "fineness": 0.6666666666666666
        },
        {
            "length": 19,
            "source": 79,
            "target": 0,
            "fineness": 19
        },
        {
            "length": 1.3684210526315788,
            "source": 56,
            "target": 4,
            "fineness": 1.3684210526315788
        },
        {
            "length": 0.05263157894736842,
            "source": 35,
            "target": 17,
            "fineness": 0.05263157894736842
        },
        {
            "length": 33,
            "source": 8,
            "target": 67,
            "fineness": 33
        },
        {
            "length": 0.5128205128205128,
            "source": 100,
            "target": 73,
            "fineness": 0.5128205128205128
        },
        {
            "length": 0.08333333333333333,
            "source": 80,
            "target": 81,
            "fineness": 0.08333333333333333
        },
        {
            "length": 2.2,
            "source": 30,
            "target": 67,
            "fineness": 2.2
        },
        {
            "length": 76,
            "source": 6,
            "target": 35,
            "fineness": 76
        },
        {
            "length": 3.7209302325581395,
            "source": 48,
            "target": 23,
            "fineness": 3.7209302325581395
        },
        {
            "length": 190.16666666666669,
            "source": 7,
            "target": 78,
            "fineness": 190.16666666666669
        },
        {
            "length": 12,
            "source": 68,
            "target": 35,
            "fineness": 12
        },
        {
            "length": 0.06741573033707865,
            "source": 53,
            "target": 21,
            "fineness": 0.06741573033707865
        },
        {
            "length": 11,
            "source": 44,
            "target": 67,
            "fineness": 11
        },
        {
            "length": 12.941176470588236,
            "source": 90,
            "target": 26,
            "fineness": 12.941176470588236
        },
        {
            "length": 1.1578947368421053,
            "source": 35,
            "target": 67,
            "fineness": 1.1578947368421053
        },
        {
            "length": 0.14606741573033707,
            "source": 53,
            "target": 4,
            "fineness": 0.14606741573033707
        },
        {
            "length": 0.21428571428571427,
            "source": 97,
            "target": 18,
            "fineness": 0.21428571428571427
        },
        {
            "length": 129,
            "source": 98,
            "target": 48,
            "fineness": 129
        },
        {
            "length": 22.35294117647059,
            "source": 3,
            "target": 0,
            "fineness": 22.35294117647059
        },
        {
            "length": 0.27906976744186046,
            "source": 48,
            "target": 29,
            "fineness": 0.27906976744186046
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 28,
            "fineness": 0.0449438202247191
        },
        {
            "length": 25.333333333333332,
            "source": 52,
            "target": 35,
            "fineness": 25.333333333333332
        },
        {
            "length": 0.9411764705882353,
            "source": 95,
            "target": 79,
            "fineness": 0.9411764705882353
        },
        {
            "length": 14.736842105263158,
            "source": 0,
            "target": 54,
            "fineness": 14.736842105263158
        },
        {
            "length": 23.57894736842105,
            "source": 0,
            "target": 23,
            "fineness": 23.57894736842105
        },
        {
            "length": 1.302325581395349,
            "source": 48,
            "target": 37,
            "fineness": 1.302325581395349
        },
        {
            "length": 7.636363636363636,
            "source": 75,
            "target": 72,
            "fineness": 7.636363636363636
        },
        {
            "length": 3.5,
            "source": 52,
            "target": 25,
            "fineness": 3.5
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 42,
            "fineness": 0.0449438202247191
        },
        {
            "length": 0.47058823529411764,
            "source": 90,
            "target": 15,
            "fineness": 0.47058823529411764
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 11,
            "fineness": 0.0449438202247191
        },
        {
            "length": 2.1,
            "source": 26,
            "target": 97,
            "fineness": 2.1
        },
        {
            "length": 0.19101123595505617,
            "source": 53,
            "target": 95,
            "fineness": 0.19101123595505617
        },
        {
            "length": 0.09523809523809523,
            "source": 97,
            "target": 34,
            "fineness": 0.09523809523809523
        },
        {
            "length": 4.3,
            "source": 54,
            "target": 48,
            "fineness": 4.3
        },
        {
            "length": 40.36363636363637,
            "source": 75,
            "target": 7,
            "fineness": 40.36363636363637
        },
        {
            "length": 5.4,
            "source": 84,
            "target": 12,
            "fineness": 5.4
        },
        {
            "length": 0.7619047619047619,
            "source": 97,
            "target": 24,
            "fineness": 0.7619047619047619
        },
        {
            "length": 0.02631578947368421,
            "source": 0,
            "target": 47,
            "fineness": 0.02631578947368421
        },
        {
            "length": 3.375,
            "source": 96,
            "target": 1,
            "fineness": 3.375
        },
        {
            "length": 4.285714285714286,
            "source": 25,
            "target": 52,
            "fineness": 4.285714285714286
        },
        {
            "length": 0.4418604651162791,
            "source": 48,
            "target": 56,
            "fineness": 0.4418604651162791
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 32,
            "fineness": 0.02247191011235955
        },
        {
            "length": 3.8684210526315788,
            "source": 35,
            "target": 97,
            "fineness": 3.8684210526315788
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 22,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.09523809523809523,
            "source": 97,
            "target": 50,
            "fineness": 0.09523809523809523
        },
        {
            "length": 42.5,
            "source": 26,
            "target": 90,
            "fineness": 42.5
        },
        {
            "length": 30.099999999999998,
            "source": 73,
            "target": 48,
            "fineness": 30.099999999999998
        },
        {
            "length": 2.6666666666666665,
            "source": 19,
            "target": 85,
            "fineness": 2.6666666666666665
        },
        {
            "length": 126.66666666666667,
            "source": 21,
            "target": 35,
            "fineness": 126.66666666666667
        },
        {
            "length": 8.1,
            "source": 86,
            "target": 12,
            "fineness": 8.1
        },
        {
            "length": 0.2247191011235955,
            "source": 53,
            "target": 86,
            "fineness": 0.2247191011235955
        },
        {
            "length": 0.5128205128205128,
            "source": 100,
            "target": 77,
            "fineness": 0.5128205128205128
        },
        {
            "length": 0.10112359550561797,
            "source": 53,
            "target": 18,
            "fineness": 0.10112359550561797
        },
        {
            "length": 0.2247191011235955,
            "source": 53,
            "target": 54,
            "fineness": 0.2247191011235955
        },
        {
            "length": 0.033707865168539325,
            "source": 53,
            "target": 29,
            "fineness": 0.033707865168539325
        },
        {
            "length": 1.3953488372093024,
            "source": 48,
            "target": 86,
            "fineness": 1.3953488372093024
        },
        {
            "length": 7.6000000000000005,
            "source": 26,
            "target": 35,
            "fineness": 7.6000000000000005
        },
        {
            "length": 3.238095238095238,
            "source": 97,
            "target": 90,
            "fineness": 3.238095238095238
        },
        {
            "length": 6.831460674157303,
            "source": 53,
            "target": 35,
            "fineness": 6.831460674157303
        },
        {
            "length": 22,
            "source": 72,
            "target": 78,
            "fineness": 22
        },
        {
            "length": 5.735294117647059,
            "source": 90,
            "target": 100,
            "fineness": 5.735294117647059
        },
        {
            "length": 4.25,
            "source": 35,
            "target": 68,
            "fineness": 4.25
        },
        {
            "length": 19,
            "source": 44,
            "target": 0,
            "fineness": 19
        },
        {
            "length": 12.9,
            "source": 87,
            "target": 48,
            "fineness": 12.9
        },
        {
            "length": 1.35,
            "source": 26,
            "target": 12,
            "fineness": 1.35
        },
        {
            "length": 0.8095238095238095,
            "source": 97,
            "target": 3,
            "fineness": 0.8095238095238095
        },
        {
            "length": 2.6153846153846154,
            "source": 4,
            "target": 90,
            "fineness": 2.6153846153846154
        },
        {
            "length": 1.0526315789473684,
            "source": 0,
            "target": 30,
            "fineness": 1.0526315789473684
        },
        {
            "length": 0.4358974358974359,
            "source": 100,
            "target": 95,
            "fineness": 0.4358974358974359
        },
        {
            "length": 55.625,
            "source": 15,
            "target": 87,
            "fineness": 55.625
        },
        {
            "length": 1.4545454545454546,
            "source": 67,
            "target": 23,
            "fineness": 1.4545454545454546
        },
        {
            "length": 1.4814814814814814,
            "source": 12,
            "target": 54,
            "fineness": 1.4814814814814814
        },
        {
            "length": 26.875,
            "source": 37,
            "target": 48,
            "fineness": 26.875
        },
        {
            "length": 0.75,
            "source": 26,
            "target": 2,
            "fineness": 0.75
        },
        {
            "length": 4,
            "source": 54,
            "target": 86,
            "fineness": 4
        },
        {
            "length": 5,
            "source": 28,
            "target": 26,
            "fineness": 5
        },
        {
            "length": 0.20512820512820512,
            "source": 100,
            "target": 96,
            "fineness": 0.20512820512820512
        },
        {
            "length": 7.125,
            "source": 23,
            "target": 7,
            "fineness": 7.125
        },
        {
            "length": 0.08333333333333333,
            "source": 80,
            "target": 10,
            "fineness": 0.08333333333333333
        },
        {
            "length": 5.144736842105263,
            "source": 35,
            "target": 3,
            "fineness": 5.144736842105263
        },
        {
            "length": 70.15384615384616,
            "source": 4,
            "target": 35,
            "fineness": 70.15384615384616
        },
        {
            "length": 18.409090909090907,
            "source": 67,
            "target": 1,
            "fineness": 18.409090909090907
        },
        {
            "length": 12,
            "source": 4,
            "target": 100,
            "fineness": 12
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 71,
            "fineness": 0.02247191011235955
        },
        {
            "length": 0.23076923076923075,
            "source": 100,
            "target": 61,
            "fineness": 0.23076923076923075
        },
        {
            "length": 0.9090909090909092,
            "source": 67,
            "target": 54,
            "fineness": 0.9090909090909092
        },
        {
            "length": 1849,
            "source": 39,
            "target": 48,
            "fineness": 1849
        },
        {
            "length": 6.75,
            "source": 24,
            "target": 1,
            "fineness": 6.75
        },
        {
            "length": 1.588235294117647,
            "source": 95,
            "target": 1,
            "fineness": 1.588235294117647
        },
        {
            "length": 0.2564102564102564,
            "source": 100,
            "target": 30,
            "fineness": 0.2564102564102564
        },
        {
            "length": 1.857142857142857,
            "source": 97,
            "target": 100,
            "fineness": 1.857142857142857
        },
        {
            "length": 1318.8837209302326,
            "source": 48,
            "target": 90,
            "fineness": 1318.8837209302326
        },
        {
            "length": 4.2105263157894735,
            "source": 0,
            "target": 87,
            "fineness": 4.2105263157894735
        },
        {
            "length": 5.230769230769231,
            "source": 100,
            "target": 90,
            "fineness": 5.230769230769231
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 38,
            "fineness": 0.011235955056179775
        },
        {
            "length": 160.44444444444446,
            "source": 18,
            "target": 0,
            "fineness": 160.44444444444446
        },
        {
            "length": 1.4736842105263157,
            "source": 68,
            "target": 46,
            "fineness": 1.4736842105263157
        },
        {
            "length": 1148.4444444444443,
            "source": 18,
            "target": 35,
            "fineness": 1148.4444444444443
        },
        {
            "length": 0.10526315789473684,
            "source": 0,
            "target": 77,
            "fineness": 0.10526315789473684
        },
        {
            "length": 3.071428571428571,
            "source": 97,
            "target": 48,
            "fineness": 3.071428571428571
        },
        {
            "length": 53.199999999999996,
            "source": 73,
            "target": 0,
            "fineness": 53.199999999999996
        },
        {
            "length": 0.6923076923076923,
            "source": 100,
            "target": 12,
            "fineness": 0.6923076923076923
        },
        {
            "length": 211.1578947368421,
            "source": 35,
            "target": 90,
            "fineness": 211.1578947368421
        },
        {
            "length": 13.144736842105264,
            "source": 0,
            "target": 1,
            "fineness": 13.144736842105264
        },
        {
            "length": 1,
            "source": 1,
            "target": 12,
            "fineness": 1
        },
        {
            "length": 29.05263157894737,
            "source": 35,
            "target": 23,
            "fineness": 29.05263157894737
        },
        {
            "length": 93.375,
            "source": 37,
            "target": 61,
            "fineness": 93.375
        },
        {
            "length": 3.8571428571428568,
            "source": 46,
            "target": 12,
            "fineness": 3.8571428571428568
        },
        {
            "length": 753.2941176470589,
            "source": 90,
            "target": 35,
            "fineness": 753.2941176470589
        },
        {
            "length": 7.368421052631579,
            "source": 0,
            "target": 15,
            "fineness": 7.368421052631579
        },
        {
            "length": 5.657894736842105,
            "source": 0,
            "target": 66,
            "fineness": 5.657894736842105
        },
        {
            "length": 1.5,
            "source": 15,
            "target": 80,
            "fineness": 1.5
        },
        {
            "length": 29.75,
            "source": 80,
            "target": 90,
            "fineness": 29.75
        },
        {
            "length": 0.1282051282051282,
            "source": 100,
            "target": 84,
            "fineness": 0.1282051282051282
        },
        {
            "length": 7.916666666666667,
            "source": 80,
            "target": 68,
            "fineness": 7.916666666666667
        },
        {
            "length": 0.05263157894736842,
            "source": 0,
            "target": 34,
            "fineness": 0.05263157894736842
        },
        {
            "length": 0.7441860465116279,
            "source": 48,
            "target": 15,
            "fineness": 0.7441860465116279
        },
        {
            "length": 12.9,
            "source": 86,
            "target": 48,
            "fineness": 12.9
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 101,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.5,
            "source": 0,
            "target": 56,
            "fineness": 0.5
        },
        {
            "length": 0.358974358974359,
            "source": 100,
            "target": 46,
            "fineness": 0.358974358974359
        },
        {
            "length": 0.9090909090909092,
            "source": 67,
            "target": 26,
            "fineness": 0.9090909090909092
        },
        {
            "length": 42.10526315789473,
            "source": 68,
            "target": 66,
            "fineness": 42.10526315789473
        },
        {
            "length": 60.800000000000004,
            "source": 66,
            "target": 35,
            "fineness": 60.800000000000004
        },
        {
            "length": 39.85714285714286,
            "source": 78,
            "target": 43,
            "fineness": 39.85714285714286
        },
        {
            "length": 0.8205128205128205,
            "source": 100,
            "target": 23,
            "fineness": 0.8205128205128205
        },
        {
            "length": 9.5,
            "source": 24,
            "target": 0,
            "fineness": 9.5
        },
        {
            "length": 3.583333333333333,
            "source": 7,
            "target": 48,
            "fineness": 3.583333333333333
        },
        {
            "length": 0.033707865168539325,
            "source": 53,
            "target": 2,
            "fineness": 0.033707865168539325
        },
        {
            "length": 2.960526315789474,
            "source": 0,
            "target": 18,
            "fineness": 2.960526315789474
        },
        {
            "length": 0.047619047619047616,
            "source": 97,
            "target": 51,
            "fineness": 0.047619047619047616
        },
        {
            "length": 12.714285714285714,
            "source": 78,
            "target": 5,
            "fineness": 12.714285714285714
        },
        {
            "length": 0.21348314606741572,
            "source": 53,
            "target": 56,
            "fineness": 0.21348314606741572
        },
        {
            "length": 1.7000000000000002,
            "source": 54,
            "target": 95,
            "fineness": 1.7000000000000002
        },
        {
            "length": 2.125,
            "source": 24,
            "target": 90,
            "fineness": 2.125
        },
        {
            "length": 2.394736842105263,
            "source": 35,
            "target": 4,
            "fineness": 2.394736842105263
        },
        {
            "length": 11.333333333333332,
            "source": 89,
            "target": 90,
            "fineness": 11.333333333333332
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 49,
            "fineness": 0.011235955056179775
        },
        {
            "length": 45.6,
            "source": 73,
            "target": 35,
            "fineness": 45.6
        },
        {
            "length": 13.851851851851853,
            "source": 1,
            "target": 67,
            "fineness": 13.851851851851853
        },
        {
            "length": 13.5,
            "source": 35,
            "target": 12,
            "fineness": 13.5
        },
        {
            "length": 3.8181818181818183,
            "source": 67,
            "target": 97,
            "fineness": 3.8181818181818183
        },
        {
            "length": 4.973684210526316,
            "source": 0,
            "target": 46,
            "fineness": 4.973684210526316
        },
        {
            "length": 2.046511627906977,
            "source": 48,
            "target": 67,
            "fineness": 2.046511627906977
        },
        {
            "length": 1.6842105263157894,
            "source": 68,
            "target": 23,
            "fineness": 1.6842105263157894
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 58,
            "fineness": 0.011235955056179775
        },
        {
            "length": 1.25,
            "source": 24,
            "target": 86,
            "fineness": 1.25
        },
        {
            "length": 0.23255813953488372,
            "source": 48,
            "target": 87,
            "fineness": 0.23255813953488372
        },
        {
            "length": 1.5,
            "source": 35,
            "target": 56,
            "fineness": 1.5
        },
        {
            "length": 0.06741573033707865,
            "source": 53,
            "target": 52,
            "fineness": 0.06741573033707865
        },
        {
            "length": 6.333333333333333,
            "source": 7,
            "target": 0,
            "fineness": 6.333333333333333
        },
        {
            "length": 9.75,
            "source": 77,
            "target": 100,
            "fineness": 9.75
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 102,
            "fineness": 0.02247191011235955
        },
        {
            "length": 1.1025641025641024,
            "source": 100,
            "target": 48,
            "fineness": 1.1025641025641024
        },
        {
            "length": 0.2962962962962963,
            "source": 1,
            "target": 62,
            "fineness": 0.2962962962962963
        },
        {
            "length": 2.6875,
            "source": 15,
            "target": 48,
            "fineness": 2.6875
        },
        {
            "length": 2.1176470588235294,
            "source": 90,
            "target": 80,
            "fineness": 2.1176470588235294
        },
        {
            "length": 4.470588235294118,
            "source": 3,
            "target": 68,
            "fineness": 4.470588235294118
        },
        {
            "length": 0.05263157894736842,
            "source": 0,
            "target": 50,
            "fineness": 0.05263157894736842
        },
        {
            "length": 132.2962962962963,
            "source": 1,
            "target": 35,
            "fineness": 132.2962962962963
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 88,
            "fineness": 0.02247191011235955
        },
        {
            "length": 0.41025641025641024,
            "source": 100,
            "target": 15,
            "fineness": 0.41025641025641024
        },
        {
            "length": 2.5294117647058822,
            "source": 95,
            "target": 48,
            "fineness": 2.5294117647058822
        },
        {
            "length": 4.571428571428571,
            "source": 72,
            "target": 23,
            "fineness": 4.571428571428571
        },
        {
            "length": 1.0526315789473684,
            "source": 0,
            "target": 62,
            "fineness": 1.0526315789473684
        },
        {
            "length": 31.813953488372096,
            "source": 48,
            "target": 35,
            "fineness": 31.813953488372096
        },
        {
            "length": 148.28571428571428,
            "source": 78,
            "target": 7,
            "fineness": 148.28571428571428
        },
        {
            "length": 2.558139534883721,
            "source": 48,
            "target": 73,
            "fineness": 2.558139534883721
        },
        {
            "length": 20,
            "source": 2,
            "target": 26,
            "fineness": 20
        },
        {
            "length": 1.6470588235294117,
            "source": 3,
            "target": 46,
            "fineness": 1.6470588235294117
        },
        {
            "length": 0.9523809523809523,
            "source": 97,
            "target": 86,
            "fineness": 0.9523809523809523
        },
        {
            "length": 4.666666666666666,
            "source": 43,
            "target": 78,
            "fineness": 4.666666666666666
        },
        {
            "length": 84.94117647058823,
            "source": 3,
            "target": 35,
            "fineness": 84.94117647058823
        },
        {
            "length": 16.88888888888889,
            "source": 61,
            "target": 35,
            "fineness": 16.88888888888889
        },
        {
            "length": 0.47619047619047616,
            "source": 97,
            "target": 30,
            "fineness": 0.47619047619047616
        },
        {
            "length": 0.9302325581395349,
            "source": 48,
            "target": 26,
            "fineness": 0.9302325581395349
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 55,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.08823529411764705,
            "source": 90,
            "target": 89,
            "fineness": 0.08823529411764705
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 63,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.7368421052631579,
            "source": 56,
            "target": 46,
            "fineness": 0.7368421052631579
        },
        {
            "length": 1.4117647058823528,
            "source": 3,
            "target": 80,
            "fineness": 1.4117647058823528
        },
        {
            "length": 38,
            "source": 76,
            "target": 35,
            "fineness": 38
        },
        {
            "length": 0.3953488372093023,
            "source": 48,
            "target": 95,
            "fineness": 0.3953488372093023
        },
        {
            "length": 0.47191011235955055,
            "source": 53,
            "target": 97,
            "fineness": 0.47191011235955055
        },
        {
            "length": 0.47058823529411764,
            "source": 90,
            "target": 24,
            "fineness": 0.47058823529411764
        },
        {
            "length": 1.0526315789473684,
            "source": 68,
            "target": 86,
            "fineness": 1.0526315789473684
        },
        {
            "length": 12.526315789473683,
            "source": 56,
            "target": 95,
            "fineness": 12.526315789473683
        },
        {
            "length": 0.3595505617977528,
            "source": 53,
            "target": 23,
            "fineness": 0.3595505617977528
        },
        {
            "length": 0.23809523809523808,
            "source": 97,
            "target": 84,
            "fineness": 0.23809523809523808
        },
        {
            "length": 9.743589743589743,
            "source": 100,
            "target": 0,
            "fineness": 9.743589743589743
        },
        {
            "length": 67.55555555555556,
            "source": 1,
            "target": 0,
            "fineness": 67.55555555555556
        },
        {
            "length": 200.22222222222223,
            "source": 1,
            "target": 90,
            "fineness": 200.22222222222223
        },
        {
            "length": 0.84375,
            "source": 23,
            "target": 12,
            "fineness": 0.84375
        },
        {
            "length": 26.285714285714285,
            "source": 78,
            "target": 42,
            "fineness": 26.285714285714285
        },
        {
            "length": 193.33333333333331,
            "source": 92,
            "target": 26,
            "fineness": 193.33333333333331
        },
        {
            "length": 79.11111111111111,
            "source": 61,
            "target": 37,
            "fineness": 79.11111111111111
        },
        {
            "length": 83.60000000000001,
            "source": 54,
            "target": 35,
            "fineness": 83.60000000000001
        },
        {
            "length": 13.604651162790699,
            "source": 48,
            "target": 100,
            "fineness": 13.604651162790699
        },
        {
            "length": 0.11235955056179775,
            "source": 53,
            "target": 66,
            "fineness": 0.11235955056179775
        },
        {
            "length": 4.05,
            "source": 54,
            "target": 12,
            "fineness": 4.05
        },
        {
            "length": 16,
            "source": 90,
            "target": 23,
            "fineness": 16
        },
        {
            "length": 29.333333333333332,
            "source": 7,
            "target": 75,
            "fineness": 29.333333333333332
        },
        {
            "length": 0.39473684210526316,
            "source": 0,
            "target": 21,
            "fineness": 0.39473684210526316
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 41,
            "fineness": 0.0449438202247191
        },
        {
            "length": 11.802631578947368,
            "source": 35,
            "target": 100,
            "fineness": 11.802631578947368
        },
        {
            "length": 0.07865168539325842,
            "source": 53,
            "target": 72,
            "fineness": 0.07865168539325842
        },
        {
            "length": 0.4358974358974359,
            "source": 100,
            "target": 3,
            "fineness": 0.4358974358974359
        },
        {
            "length": 4.631578947368421,
            "source": 35,
            "target": 15,
            "fineness": 4.631578947368421
        },
        {
            "length": 2.3333333333333335,
            "source": 100,
            "target": 4,
            "fineness": 2.3333333333333335
        },
        {
            "length": 4.153846153846154,
            "source": 4,
            "target": 12,
            "fineness": 4.153846153846154
        },
        {
            "length": 0.5,
            "source": 54,
            "target": 30,
            "fineness": 0.5
        },
        {
            "length": 19,
            "source": 11,
            "target": 35,
            "fineness": 19
        },
        {
            "length": 4.03125,
            "source": 23,
            "target": 48,
            "fineness": 4.03125
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 91,
            "fineness": 0.02247191011235955
        },
        {
            "length": 6.37037037037037,
            "source": 12,
            "target": 48,
            "fineness": 6.37037037037037
        },
        {
            "length": 0.10526315789473684,
            "source": 0,
            "target": 37,
            "fineness": 0.10526315789473684
        },
        {
            "length": 0.1797752808988764,
            "source": 53,
            "target": 24,
            "fineness": 0.1797752808988764
        },
        {
            "length": 8,
            "source": 57,
            "target": 96,
            "fineness": 8
        },
        {
            "length": 1.7078651685393258,
            "source": 53,
            "target": 0,
            "fineness": 1.7078651685393258
        },
        {
            "length": 1.118421052631579,
            "source": 35,
            "target": 95,
            "fineness": 1.118421052631579
        },
        {
            "length": 6.2631578947368425,
            "source": 35,
            "target": 46,
            "fineness": 6.2631578947368425
        },
        {
            "length": 1.0625,
            "source": 24,
            "target": 3,
            "fineness": 1.0625
        },
        {
            "length": 10.857142857142856,
            "source": 25,
            "target": 0,
            "fineness": 10.857142857142856
        },
        {
            "length": 0.05263157894736842,
            "source": 35,
            "target": 50,
            "fineness": 0.05263157894736842
        },
        {
            "length": 2.909090909090909,
            "source": 75,
            "target": 42,
            "fineness": 2.909090909090909
        },
        {
            "length": 9.333333333333332,
            "source": 1,
            "target": 97,
            "fineness": 9.333333333333332
        },
        {
            "length": 2.7,
            "source": 86,
            "target": 1,
            "fineness": 2.7
        },
        {
            "length": 10.539473684210526,
            "source": 35,
            "target": 53,
            "fineness": 10.539473684210526
        },
        {
            "length": 1.5555555555555554,
            "source": 18,
            "target": 78,
            "fineness": 1.5555555555555554
        },
        {
            "length": 6.846153846153847,
            "source": 100,
            "target": 53,
            "fineness": 6.846153846153847
        },
        {
            "length": 195.42857142857144,
            "source": 46,
            "target": 35,
            "fineness": 195.42857142857144
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 64,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.9047619047619047,
            "source": 97,
            "target": 56,
            "fineness": 0.9047619047619047
        },
        {
            "length": 9.5,
            "source": 85,
            "target": 35,
            "fineness": 9.5
        },
        {
            "length": 1.4814814814814814,
            "source": 1,
            "target": 86,
            "fineness": 1.4814814814814814
        },
        {
            "length": 0.5714285714285714,
            "source": 97,
            "target": 7,
            "fineness": 0.5714285714285714
        },
        {
            "length": 0.046511627906976744,
            "source": 48,
            "target": 9,
            "fineness": 0.046511627906976744
        },
        {
            "length": 0.38202247191011235,
            "source": 53,
            "target": 90,
            "fineness": 0.38202247191011235
        },
        {
            "length": 1.8095238095238093,
            "source": 97,
            "target": 0,
            "fineness": 1.8095238095238093
        },
        {
            "length": 244.00000000000003,
            "source": 35,
            "target": 0,
            "fineness": 244.00000000000003
        },
        {
            "length": 95,
            "source": 23,
            "target": 0,
            "fineness": 95
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 34,
            "fineness": 0.0449438202247191
        },
        {
            "length": 0.2631578947368421,
            "source": 0,
            "target": 84,
            "fineness": 0.2631578947368421
        },
        {
            "length": 0.42105263157894735,
            "source": 35,
            "target": 96,
            "fineness": 0.42105263157894735
        },
        {
            "length": 1.7916666666666665,
            "source": 80,
            "target": 48,
            "fineness": 1.7916666666666665
        },
        {
            "length": 0.9767441860465116,
            "source": 48,
            "target": 97,
            "fineness": 0.9767441860465116
        },
        {
            "length": 221.71428571428572,
            "source": 78,
            "target": 23,
            "fineness": 221.71428571428572
        },
        {
            "length": 7.355263157894736,
            "source": 0,
            "target": 4,
            "fineness": 7.355263157894736
        },
        {
            "length": 1.6875,
            "source": 24,
            "target": 12,
            "fineness": 1.6875
        },
        {
            "length": 0.09210526315789473,
            "source": 0,
            "target": 25,
            "fineness": 0.09210526315789473
        },
        {
            "length": 106.39999999999999,
            "source": 30,
            "target": 35,
            "fineness": 106.39999999999999
        },
        {
            "length": 0.47619047619047616,
            "source": 97,
            "target": 73,
            "fineness": 0.47619047619047616
        },
        {
            "length": 2,
            "source": 24,
            "target": 23,
            "fineness": 2
        },
        {
            "length": 1.1428571428571428,
            "source": 97,
            "target": 80,
            "fineness": 1.1428571428571428
        },
        {
            "length": 50,
            "source": 95,
            "target": 90,
            "fineness": 50
        },
        {
            "length": 10.857142857142856,
            "source": 97,
            "target": 35,
            "fineness": 10.857142857142856
        },
        {
            "length": 0.033707865168539325,
            "source": 53,
            "target": 82,
            "fineness": 0.033707865168539325
        },
        {
            "length": 4,
            "source": 56,
            "target": 35,
            "fineness": 4
        },
        {
            "length": 0.8333333333333334,
            "source": 80,
            "target": 32,
            "fineness": 0.8333333333333334
        },
        {
            "length": 34.94117647058824,
            "source": 90,
            "target": 1,
            "fineness": 34.94117647058824
        },
        {
            "length": 1.6,
            "source": 54,
            "target": 23,
            "fineness": 1.6
        },
        {
            "length": 42.75,
            "source": 15,
            "target": 0,
            "fineness": 42.75
        },
        {
            "length": 2,
            "source": 12,
            "target": 1,
            "fineness": 2
        },
        {
            "length": 2.5,
            "source": 41,
            "target": 66,
            "fineness": 2.5
        },
        {
            "length": 0.23255813953488372,
            "source": 48,
            "target": 66,
            "fineness": 0.23255813953488372
        },
        {
            "length": 0.3033707865168539,
            "source": 53,
            "target": 1,
            "fineness": 0.3033707865168539
        },
        {
            "length": 0.0898876404494382,
            "source": 53,
            "target": 96,
            "fineness": 0.0898876404494382
        },
        {
            "length": 0.25,
            "source": 15,
            "target": 11,
            "fineness": 0.25
        },
        {
            "length": 4.444444444444445,
            "source": 12,
            "target": 86,
            "fineness": 4.444444444444445
        },
        {
            "length": 0.08333333333333333,
            "source": 80,
            "target": 65,
            "fineness": 0.08333333333333333
        },
        {
            "length": 15.200000000000001,
            "source": 16,
            "target": 35,
            "fineness": 15.200000000000001
        },
        {
            "length": 0.39473684210526316,
            "source": 35,
            "target": 21,
            "fineness": 0.39473684210526316
        },
        {
            "length": 0.10112359550561797,
            "source": 53,
            "target": 61,
            "fineness": 0.10112359550561797
        },
        {
            "length": 3.578947368421052,
            "source": 68,
            "target": 3,
            "fineness": 3.578947368421052
        },
        {
            "length": 12.447368421052632,
            "source": 35,
            "target": 48,
            "fineness": 12.447368421052632
        },
        {
            "length": 58.32558139534884,
            "source": 48,
            "target": 0,
            "fineness": 58.32558139534884
        },
        {
            "length": 0.08333333333333333,
            "source": 80,
            "target": 88,
            "fineness": 0.08333333333333333
        },
        {
            "length": 1.3157894736842104,
            "source": 0,
            "target": 73,
            "fineness": 1.3157894736842104
        },
        {
            "length": 0.875,
            "source": 23,
            "target": 78,
            "fineness": 0.875
        },
        {
            "length": 0.3033707865168539,
            "source": 53,
            "target": 12,
            "fineness": 0.3033707865168539
        },
        {
            "length": 79.8,
            "source": 54,
            "target": 0,
            "fineness": 79.8
        },
        {
            "length": 45,
            "source": 78,
            "target": 72,
            "fineness": 45
        },
        {
            "length": 3.9705882352941178,
            "source": 90,
            "target": 12,
            "fineness": 3.9705882352941178
        },
        {
            "length": 0.4831460674157303,
            "source": 53,
            "target": 48,
            "fineness": 0.4831460674157303
        },
        {
            "length": 0.033707865168539325,
            "source": 53,
            "target": 19,
            "fineness": 0.033707865168539325
        },
        {
            "length": 0.6923076923076923,
            "source": 100,
            "target": 1,
            "fineness": 0.6923076923076923
        },
        {
            "length": 0.08333333333333333,
            "source": 80,
            "target": 91,
            "fineness": 0.08333333333333333
        },
        {
            "length": 7.333333333333333,
            "source": 92,
            "target": 67,
            "fineness": 7.333333333333333
        },
        {
            "length": 637,
            "source": 92,
            "target": 100,
            "fineness": 637
        },
        {
            "length": 0.6,
            "source": 26,
            "target": 28,
            "fineness": 0.6
        },
        {
            "length": 0.3157894736842105,
            "source": 0,
            "target": 7,
            "fineness": 0.3157894736842105
        },
        {
            "length": 4,
            "source": 68,
            "target": 0,
            "fineness": 4
        },
        {
            "length": 22.35294117647059,
            "source": 95,
            "target": 35,
            "fineness": 22.35294117647059
        },
        {
            "length": 44.333333333333336,
            "source": 80,
            "target": 0,
            "fineness": 44.333333333333336
        },
        {
            "length": 2.526315789473684,
            "source": 68,
            "target": 80,
            "fineness": 2.526315789473684
        },
        {
            "length": 1953.970588235294,
            "source": 90,
            "target": 48,
            "fineness": 1953.970588235294
        },
        {
            "length": 1.1851851851851851,
            "source": 12,
            "target": 23,
            "fineness": 1.1851851851851851
        },
        {
            "length": 9.6,
            "source": 66,
            "target": 23,
            "fineness": 9.6
        },
        {
            "length": 163.4,
            "source": 66,
            "target": 68,
            "fineness": 163.4
        },
        {
            "length": 4.470588235294118,
            "source": 95,
            "target": 0,
            "fineness": 4.470588235294118
        },
        {
            "length": 8.210526315789474,
            "source": 35,
            "target": 80,
            "fineness": 8.210526315789474
        },
        {
            "length": 0.9090909090909091,
            "source": 75,
            "target": 5,
            "fineness": 0.9090909090909091
        },
        {
            "length": 0.5128205128205128,
            "source": 100,
            "target": 86,
            "fineness": 0.5128205128205128
        },
        {
            "length": 0.5294117647058824,
            "source": 3,
            "target": 18,
            "fineness": 0.5294117647058824
        },
        {
            "length": 56.578947368421055,
            "source": 0,
            "target": 48,
            "fineness": 56.578947368421055
        },
        {
            "length": 0.1797752808988764,
            "source": 53,
            "target": 15,
            "fineness": 0.1797752808988764
        },
        {
            "length": 28.5,
            "source": 62,
            "target": 35,
            "fineness": 28.5
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 10,
            "fineness": 0.02247191011235955
        },
        {
            "length": 1.1,
            "source": 26,
            "target": 67,
            "fineness": 1.1
        },
        {
            "length": 1.1851851851851851,
            "source": 1,
            "target": 85,
            "fineness": 1.1851851851851851
        },
        {
            "length": 1.3421052631578947,
            "source": 0,
            "target": 95,
            "fineness": 1.3421052631578947
        },
        {
            "length": 21.636363636363637,
            "source": 75,
            "target": 78,
            "fineness": 21.636363636363637
        },
        {
            "length": 1.263157894736842,
            "source": 0,
            "target": 24,
            "fineness": 1.263157894736842
        },
        {
            "length": 8,
            "source": 44,
            "target": 23,
            "fineness": 8
        },
        {
            "length": 0.047619047619047616,
            "source": 97,
            "target": 102,
            "fineness": 0.047619047619047616
        },
        {
            "length": 19,
            "source": 6,
            "target": 56,
            "fineness": 19
        },
        {
            "length": 48.71794871794872,
            "source": 100,
            "target": 35,
            "fineness": 48.71794871794872
        },
        {
            "length": 216.30769230769232,
            "source": 4,
            "target": 0,
            "fineness": 216.30769230769232
        },
        {
            "length": 0.08333333333333333,
            "source": 80,
            "target": 71,
            "fineness": 0.08333333333333333
        },
        {
            "length": 4.473684210526316,
            "source": 0,
            "target": 3,
            "fineness": 4.473684210526316
        },
        {
            "length": 12.666666666666666,
            "source": 52,
            "target": 0,
            "fineness": 12.666666666666666
        },
        {
            "length": 0.1348314606741573,
            "source": 53,
            "target": 7,
            "fineness": 0.1348314606741573
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 9,
            "fineness": 0.02247191011235955
        },
        {
            "length": 1.1,
            "source": 54,
            "target": 67,
            "fineness": 1.1
        },
        {
            "length": 0.056179775280898875,
            "source": 53,
            "target": 33,
            "fineness": 0.056179775280898875
        },
        {
            "length": 0.15730337078651685,
            "source": 53,
            "target": 46,
            "fineness": 0.15730337078651685
        },
        {
            "length": 4.2105263157894735,
            "source": 0,
            "target": 86,
            "fineness": 4.2105263157894735
        },
        {
            "length": 45.03703703703704,
            "source": 12,
            "target": 0,
            "fineness": 45.03703703703704
        },
        {
            "length": 1.375,
            "source": 15,
            "target": 67,
            "fineness": 1.375
        },
        {
            "length": 9.411764705882353,
            "source": 90,
            "target": 54,
            "fineness": 9.411764705882353
        },
        {
            "length": 30.400000000000002,
            "source": 33,
            "target": 0,
            "fineness": 30.400000000000002
        },
        {
            "length": 1.8823529411764706,
            "source": 3,
            "target": 23,
            "fineness": 1.8823529411764706
        },
        {
            "length": 0.023809523809523808,
            "source": 97,
            "target": 14,
            "fineness": 0.023809523809523808
        },
        {
            "length": 2.375,
            "source": 80,
            "target": 56,
            "fineness": 2.375
        },
        {
            "length": 0.4444444444444444,
            "source": 18,
            "target": 8,
            "fineness": 0.4444444444444444
        },
        {
            "length": 8.5,
            "source": 54,
            "target": 90,
            "fineness": 8.5
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 47,
            "fineness": 0.02247191011235955
        },
        {
            "length": 12.307692307692308,
            "source": 100,
            "target": 26,
            "fineness": 12.307692307692308
        },
        {
            "length": 0.07142857142857142,
            "source": 97,
            "target": 82,
            "fineness": 0.07142857142857142
        },
        {
            "length": 2.5,
            "source": 0,
            "target": 68,
            "fineness": 2.5
        },
        {
            "length": 15.200000000000001,
            "source": 30,
            "target": 0,
            "fineness": 15.200000000000001
        },
        {
            "length": 25.333333333333332,
            "source": 61,
            "target": 0,
            "fineness": 25.333333333333332
        },
        {
            "length": 0.4382022471910112,
            "source": 53,
            "target": 100,
            "fineness": 0.4382022471910112
        },
        {
            "length": 0.056179775280898875,
            "source": 53,
            "target": 84,
            "fineness": 0.056179775280898875
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 94,
            "fineness": 0.011235955056179775
        },
        {
            "length": 1.0465116279069768,
            "source": 48,
            "target": 61,
            "fineness": 1.0465116279069768
        },
        {
            "length": 103.34210526315789,
            "source": 0,
            "target": 90,
            "fineness": 103.34210526315789
        },
        {
            "length": 4.45,
            "source": 54,
            "target": 53,
            "fineness": 4.45
        },
        {
            "length": 2.511627906976744,
            "source": 48,
            "target": 12,
            "fineness": 2.511627906976744
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 93,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.53125,
            "source": 23,
            "target": 3,
            "fineness": 0.53125
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 27,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.047619047619047616,
            "source": 97,
            "target": 45,
            "fineness": 0.047619047619047616
        },
        {
            "length": 1.7763157894736843,
            "source": 0,
            "target": 61,
            "fineness": 1.7763157894736843
        },
        {
            "length": 1.263157894736842,
            "source": 35,
            "target": 24,
            "fineness": 1.263157894736842
        },
        {
            "length": 0.023809523809523808,
            "source": 97,
            "target": 70,
            "fineness": 0.023809523809523808
        },
        {
            "length": 76,
            "source": 62,
            "target": 0,
            "fineness": 76
        },
        {
            "length": 0.4117647058823529,
            "source": 90,
            "target": 46,
            "fineness": 0.4117647058823529
        },
        {
            "length": 0.047619047619047616,
            "source": 97,
            "target": 76,
            "fineness": 0.047619047619047616
        },
        {
            "length": 145.6,
            "source": 87,
            "target": 15,
            "fineness": 145.6
        },
        {
            "length": 7.6000000000000005,
            "source": 33,
            "target": 56,
            "fineness": 7.6000000000000005
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 81,
            "fineness": 0.02247191011235955
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 20,
            "fineness": 0.011235955056179775
        },
        {
            "length": 3.8571428571428568,
            "source": 46,
            "target": 1,
            "fineness": 3.8571428571428568
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 45,
            "fineness": 0.02247191011235955
        },
        {
            "length": 0.039473684210526314,
            "source": 35,
            "target": 82,
            "fineness": 0.039473684210526314
        },
        {
            "length": 2.4285714285714284,
            "source": 46,
            "target": 90,
            "fineness": 2.4285714285714284
        },
        {
            "length": 1,
            "source": 97,
            "target": 46,
            "fineness": 1
        },
        {
            "length": 18.82894736842105,
            "source": 35,
            "target": 1,
            "fineness": 18.82894736842105
        },
        {
            "length": 2.2857142857142856,
            "source": 97,
            "target": 23,
            "fineness": 2.2857142857142856
        },
        {
            "length": 4,
            "source": 56,
            "target": 0,
            "fineness": 4
        },
        {
            "length": 25.5,
            "source": 87,
            "target": 3,
            "fineness": 25.5
        },
        {
            "length": 53.333333333333336,
            "source": 7,
            "target": 23,
            "fineness": 53.333333333333336
        },
        {
            "length": 0.8,
            "source": 26,
            "target": 37,
            "fineness": 0.8
        },
        {
            "length": 690.7058823529411,
            "source": 90,
            "target": 0,
            "fineness": 690.7058823529411
        },
        {
            "length": 37.05,
            "source": 26,
            "target": 100,
            "fineness": 37.05
        },
        {
            "length": 0.6153846153846154,
            "source": 4,
            "target": 85,
            "fineness": 0.6153846153846154
        },
        {
            "length": 7.2631578947368425,
            "source": 0,
            "target": 80,
            "fineness": 7.2631578947368425
        },
        {
            "length": 0.056179775280898875,
            "source": 53,
            "target": 16,
            "fineness": 0.056179775280898875
        },
        {
            "length": 2.5,
            "source": 80,
            "target": 86,
            "fineness": 2.5
        },
        {
            "length": 24.18181818181818,
            "source": 67,
            "target": 35,
            "fineness": 24.18181818181818
        },
        {
            "length": 0.7894736842105263,
            "source": 0,
            "target": 26,
            "fineness": 0.7894736842105263
        },
        {
            "length": 0.14285714285714285,
            "source": 97,
            "target": 21,
            "fineness": 0.14285714285714285
        },
        {
            "length": 40.72727272727273,
            "source": 75,
            "target": 23,
            "fineness": 40.72727272727273
        },
        {
            "length": 0.38095238095238093,
            "source": 97,
            "target": 96,
            "fineness": 0.38095238095238093
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 60,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.0898876404494382,
            "source": 53,
            "target": 37,
            "fineness": 0.0898876404494382
        },
        {
            "length": 0.36363636363636365,
            "source": 67,
            "target": 62,
            "fineness": 0.36363636363636365
        },
        {
            "length": 1.5714285714285714,
            "source": 72,
            "target": 75,
            "fineness": 1.5714285714285714
        },
        {
            "length": 0.19101123595505617,
            "source": 53,
            "target": 3,
            "fineness": 0.19101123595505617
        },
        {
            "length": 1.4444444444444444,
            "source": 1,
            "target": 100,
            "fineness": 1.4444444444444444
        },
        {
            "length": 7,
            "source": 90,
            "target": 95,
            "fineness": 7
        },
        {
            "length": 0.5925925925925926,
            "source": 1,
            "target": 24,
            "fineness": 0.5925925925925926
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 17,
            "fineness": 0.0449438202247191
        },
        {
            "length": 0.375,
            "source": 85,
            "target": 19,
            "fineness": 0.375
        },
        {
            "length": 2.236842105263158,
            "source": 35,
            "target": 73,
            "fineness": 2.236842105263158
        },
        {
            "length": 0.7105263157894737,
            "source": 35,
            "target": 61,
            "fineness": 0.7105263157894737
        },
        {
            "length": 76,
            "source": 89,
            "target": 35,
            "fineness": 76
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 51,
            "fineness": 0.02247191011235955
        },
        {
            "length": 1.0769230769230769,
            "source": 100,
            "target": 97,
            "fineness": 1.0769230769230769
        },
        {
            "length": 0.2894736842105263,
            "source": 0,
            "target": 67,
            "fineness": 0.2894736842105263
        },
        {
            "length": 5.375,
            "source": 96,
            "target": 48,
            "fineness": 5.375
        },
        {
            "length": 0.8148148148148148,
            "source": 12,
            "target": 67,
            "fineness": 0.8148148148148148
        },
        {
            "length": 0.9500000000000001,
            "source": 86,
            "target": 68,
            "fineness": 0.9500000000000001
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 99,
            "fineness": 0.011235955056179775
        },
        {
            "length": 4.3,
            "source": 26,
            "target": 48,
            "fineness": 4.3
        },
        {
            "length": 7.800000000000001,
            "source": 86,
            "target": 100,
            "fineness": 7.800000000000001
        },
        {
            "length": 5.210526315789474,
            "source": 35,
            "target": 18,
            "fineness": 5.210526315789474
        },
        {
            "length": 5.333333333333333,
            "source": 43,
            "target": 23,
            "fineness": 5.333333333333333
        },
        {
            "length": 0.3157894736842105,
            "source": 0,
            "target": 96,
            "fineness": 0.3157894736842105
        },
        {
            "length": 30.400000000000002,
            "source": 86,
            "target": 0,
            "fineness": 30.400000000000002
        },
        {
            "length": 0.3157894736842105,
            "source": 35,
            "target": 62,
            "fineness": 0.3157894736842105
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 79,
            "fineness": 0.0449438202247191
        },
        {
            "length": 0.47058823529411764,
            "source": 95,
            "target": 28,
            "fineness": 0.47058823529411764
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 103,
            "fineness": 0.011235955056179775
        },
        {
            "length": 536,
            "source": 0,
            "target": 35,
            "fineness": 536
        },
        {
            "length": 1.588235294117647,
            "source": 3,
            "target": 12,
            "fineness": 1.588235294117647
        },
        {
            "length": 0.11235955056179775,
            "source": 53,
            "target": 73,
            "fineness": 0.11235955056179775
        },
        {
            "length": 1.5454545454545454,
            "source": 67,
            "target": 90,
            "fineness": 1.5454545454545454
        },
        {
            "length": 0.625,
            "source": 23,
            "target": 66,
            "fineness": 0.625
        },
        {
            "length": 11.802631578947368,
            "source": 0,
            "target": 100,
            "fineness": 11.802631578947368
        },
        {
            "length": 0.2696629213483146,
            "source": 53,
            "target": 80,
            "fineness": 0.2696629213483146
        },
        {
            "length": 2.236842105263158,
            "source": 35,
            "target": 30,
            "fineness": 2.236842105263158
        },
        {
            "length": 3.6363636363636362,
            "source": 75,
            "target": 41,
            "fineness": 3.6363636363636362
        },
        {
            "length": 9.6,
            "source": 86,
            "target": 23,
            "fineness": 9.6
        },
        {
            "length": 1.6744186046511627,
            "source": 48,
            "target": 7,
            "fineness": 1.6744186046511627
        },
        {
            "length": 4.909090909090909,
            "source": 75,
            "target": 43,
            "fineness": 4.909090909090909
        },
        {
            "length": 0.8823529411764707,
            "source": 95,
            "target": 33,
            "fineness": 0.8823529411764707
        },
        {
            "length": 0.41025641025641024,
            "source": 100,
            "target": 24,
            "fineness": 0.41025641025641024
        },
        {
            "length": 0.13157894736842105,
            "source": 0,
            "target": 16,
            "fineness": 0.13157894736842105
        },
        {
            "length": 19,
            "source": 31,
            "target": 56,
            "fineness": 19
        },
        {
            "length": 20.25,
            "source": 85,
            "target": 1,
            "fineness": 20.25
        },
        {
            "length": 0.6666666666666666,
            "source": 80,
            "target": 37,
            "fineness": 0.6666666666666666
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 69,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.5641025641025641,
            "source": 100,
            "target": 67,
            "fineness": 0.5641025641025641
        },
        {
            "length": 19.342105263157894,
            "source": 0,
            "target": 97,
            "fineness": 19.342105263157894
        },
        {
            "length": 0.6578947368421052,
            "source": 35,
            "target": 66,
            "fineness": 0.6578947368421052
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 83,
            "fineness": 0.011235955056179775
        },
        {
            "length": 81.62962962962963,
            "source": 12,
            "target": 35,
            "fineness": 81.62962962962963
        },
        {
            "length": 0.84375,
            "source": 23,
            "target": 1,
            "fineness": 0.84375
        },
        {
            "length": 0.0898876404494382,
            "source": 53,
            "target": 85,
            "fineness": 0.0898876404494382
        },
        {
            "length": 2.8421052631578947,
            "source": 68,
            "target": 12,
            "fineness": 2.8421052631578947
        },
        {
            "length": 0.3684210526315789,
            "source": 35,
            "target": 25,
            "fineness": 0.3684210526315789
        },
        {
            "length": 0.9210526315789473,
            "source": 35,
            "target": 87,
            "fineness": 0.9210526315789473
        },
        {
            "length": 19,
            "source": 24,
            "target": 35,
            "fineness": 19
        },
        {
            "length": 17.88235294117647,
            "source": 95,
            "target": 56,
            "fineness": 17.88235294117647
        },
        {
            "length": 0.20512820512820512,
            "source": 100,
            "target": 62,
            "fineness": 0.20512820512820512
        },
        {
            "length": 0.7619047619047619,
            "source": 97,
            "target": 15,
            "fineness": 0.7619047619047619
        },
        {
            "length": 0.05263157894736842,
            "source": 0,
            "target": 17,
            "fineness": 0.05263157894736842
        },
        {
            "length": 30.400000000000002,
            "source": 16,
            "target": 0,
            "fineness": 30.400000000000002
        },
        {
            "length": 1.625,
            "source": 85,
            "target": 4,
            "fineness": 1.625
        },
        {
            "length": 1.0526315789473684,
            "source": 68,
            "target": 54,
            "fineness": 1.0526315789473684
        },
        {
            "length": 8.526315789473683,
            "source": 0,
            "target": 12,
            "fineness": 8.526315789473683
        },
        {
            "length": 2.8947368421052633,
            "source": 35,
            "target": 86,
            "fineness": 2.8947368421052633
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 77,
            "fineness": 0.0449438202247191
        },
        {
            "length": 0.06578947368421052,
            "source": 35,
            "target": 16,
            "fineness": 0.06578947368421052
        },
        {
            "length": 0.0449438202247191,
            "source": 53,
            "target": 50,
            "fineness": 0.0449438202247191
        },
        {
            "length": 76,
            "source": 80,
            "target": 35,
            "fineness": 76
        },
        {
            "length": 0.05263157894736842,
            "source": 35,
            "target": 34,
            "fineness": 0.05263157894736842
        },
        {
            "length": 0.45238095238095233,
            "source": 97,
            "target": 68,
            "fineness": 0.45238095238095233
        },
        {
            "length": 32.57142857142857,
            "source": 25,
            "target": 35,
            "fineness": 32.57142857142857
        },
        {
            "length": 3.4545454545454546,
            "source": 67,
            "target": 0,
            "fineness": 3.4545454545454546
        },
        {
            "length": 1.259259259259259,
            "source": 12,
            "target": 90,
            "fineness": 1.259259259259259
        },
        {
            "length": 14.25,
            "source": 79,
            "target": 56,
            "fineness": 14.25
        },
        {
            "length": 0.2564102564102564,
            "source": 100,
            "target": 87,
            "fineness": 0.2564102564102564
        },
        {
            "length": 2,
            "source": 15,
            "target": 23,
            "fineness": 2
        },
        {
            "length": 0.9500000000000001,
            "source": 54,
            "target": 68,
            "fineness": 0.9500000000000001
        },
        {
            "length": 0.037037037037037035,
            "source": 1,
            "target": 13,
            "fineness": 0.037037037037037035
        },
        {
            "length": 0.625,
            "source": 24,
            "target": 30,
            "fineness": 0.625
        },
        {
            "length": 0.3157894736842105,
            "source": 35,
            "target": 52,
            "fineness": 0.3157894736842105
        },
        {
            "length": 88.78571428571428,
            "source": 78,
            "target": 75,
            "fineness": 88.78571428571428
        },
        {
            "length": 3.8000000000000003,
            "source": 86,
            "target": 35,
            "fineness": 3.8000000000000003
        },
        {
            "length": 4.384615384615385,
            "source": 4,
            "target": 56,
            "fineness": 4.384615384615385
        },
        {
            "length": 0.2247191011235955,
            "source": 53,
            "target": 26,
            "fineness": 0.2247191011235955
        },
        {
            "length": 24.592105263157897,
            "source": 0,
            "target": 53,
            "fineness": 24.592105263157897
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 74,
            "fineness": 0.011235955056179775
        },
        {
            "length": 1.0526315789473684,
            "source": 56,
            "target": 54,
            "fineness": 1.0526315789473684
        },
        {
            "length": 0.6153846153846154,
            "source": 100,
            "target": 80,
            "fineness": 0.6153846153846154
        },
        {
            "length": 3.1578947368421053,
            "source": 35,
            "target": 54,
            "fineness": 3.1578947368421053
        },
        {
            "length": 19,
            "source": 44,
            "target": 35,
            "fineness": 19
        },
        {
            "length": 0.07865168539325842,
            "source": 53,
            "target": 25,
            "fineness": 0.07865168539325842
        },
        {
            "length": 0.21348314606741572,
            "source": 53,
            "target": 68,
            "fineness": 0.21348314606741572
        },
        {
            "length": 54.285714285714285,
            "source": 46,
            "target": 0,
            "fineness": 54.285714285714285
        },
        {
            "length": 7.6000000000000005,
            "source": 87,
            "target": 35,
            "fineness": 7.6000000000000005
        },
        {
            "length": 25.428571428571427,
            "source": 78,
            "target": 41,
            "fineness": 25.428571428571427
        },
        {
            "length": 0.5263157894736842,
            "source": 56,
            "target": 33,
            "fineness": 0.5263157894736842
        },
        {
            "length": 0.29411764705882354,
            "source": 90,
            "target": 73,
            "fineness": 0.29411764705882354
        },
        {
            "length": 0.02247191011235955,
            "source": 53,
            "target": 65,
            "fineness": 0.02247191011235955
        },
        {
            "length": 63.333333333333336,
            "source": 21,
            "target": 0,
            "fineness": 63.333333333333336
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 59,
            "fineness": 0.011235955056179775
        },
        {
            "length": 52.25,
            "source": 15,
            "target": 35,
            "fineness": 52.25
        },
        {
            "length": 28.666666666666664,
            "source": 29,
            "target": 48,
            "fineness": 28.666666666666664
        },
        {
            "length": 1.9047619047619047,
            "source": 97,
            "target": 26,
            "fineness": 1.9047619047619047
        },
        {
            "length": 0.11235955056179775,
            "source": 53,
            "target": 30,
            "fineness": 0.11235955056179775
        },
        {
            "length": 1.1666666666666665,
            "source": 43,
            "target": 72,
            "fineness": 1.1666666666666665
        },
        {
            "length": 3.214285714285714,
            "source": 97,
            "target": 1,
            "fineness": 3.214285714285714
        },
        {
            "length": 0.05263157894736842,
            "source": 0,
            "target": 11,
            "fineness": 0.05263157894736842
        },
        {
            "length": 1.9285714285714284,
            "source": 97,
            "target": 12,
            "fineness": 1.9285714285714284
        },
        {
            "length": 0.11235955056179775,
            "source": 53,
            "target": 87,
            "fineness": 0.11235955056179775
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 40,
            "fineness": 0.011235955056179775
        },
        {
            "length": 0.09523809523809523,
            "source": 97,
            "target": 17,
            "fineness": 0.09523809523809523
        },
        {
            "length": 154.375,
            "source": 23,
            "target": 35,
            "fineness": 154.375
        },
        {
            "length": 0.0898876404494382,
            "source": 53,
            "target": 62,
            "fineness": 0.0898876404494382
        },
        {
            "length": 0.011235955056179775,
            "source": 53,
            "target": 36,
            "fineness": 0.011235955056179775
        },
        {
            "length": 17,
            "source": 23,
            "target": 90,
            "fineness": 17
        }
    ],
    "categories": [
        {
            "name": "案检室"
        },
        {
            "name": "物资采购管理中心"
        },
        {
            "name": "子公司董事会"
        },
        {
            "name": "中国中铁报社"
        },
        {
            "name": "中铁人才交流咨询有限公司"
        },
        {
            "name": "劳资社保部"
        },
        {
            "name": "中铁大桥局"
        },
        {
            "name": "文书"
        },
        {
            "name": "中铁一局"
        },
        {
            "name": "工业设备部"
        },
        {
            "name": "新闻中心"
        },
        {
            "name": "审教室"
        },
        {
            "name": "中铁二局"
        },
        {
            "name": "中铁八局"
        },
        {
            "name": "分公司"
        },
        {
            "name": "中铁五局"
        },
        {
            "name": "审计部"
        },
        {
            "name": "国际事业部"
        },
        {
            "name": "投资发展部"
        },
        {
            "name": "中铁西南院"
        },
        {
            "name": "中铁建工"
        },
        {
            "name": "中铁十局"
        },
        {
            "name": "上海办事处"
        },
        {
            "name": "哈大铁路客运专线指挥"
        },
        {
            "name": "办公室"
        },
        {
            "name": "安全生产部"
        },
        {
            "name": "中铁山桥"
        },
        {
            "name": "政研会"
        },
        {
            "name": "秘书"
        },
        {
            "name": "综合"
        },
        {
            "name": "子公司团委"
        },
        {
            "name": "企业文化部(党委宣传部)"
        },
        {
            "name": "干部部"
        },
        {
            "name": "总公司两校党委"
        },
        {
            "name": "股份公司总部"
        },
        {
            "name": "信访"
        },
        {
            "name": "宏达资产管理中心"
        },
        {
            "name": "项目公司 指挥部 "
        },
        {
            "name": "科技设计部"
        },
        {
            "name": "分公司党委"
        },
        {
            "name": "金融管理部"
        },
        {
            "name": "三总师副职"
        },
        {
            "name": "机关党委"
        },
        {
            "name": "工会"
        },
        {
            "name": "结算业务部"
        },
        {
            "name": "战略规划部"
        },
        {
            "name": "子公司纪委"
        },
        {
            "name": "国有企业监事会05办"
        },
        {
            "name": "中铁设计咨询"
        },
        {
            "name": "金融市场部"
        },
        {
            "name": "信贷业务部"
        },
        {
            "name": "成本管理部"
        },
        {
            "name": "专职董监事"
        },
        {
            "name": "纪委（监察部）"
        },
        {
            "name": "团委"
        },
        {
            "name": "中铁四局"
        },
        {
            "name": "子公司"
        },
        {
            "name": "子公司工会"
        },
        {
            "name": "独立董事"
        },
        {
            "name": "风险控制部"
        },
        {
            "name": "经营开发部"
        },
        {
            "name": "纪委办公室(巡视办)"
        },
        {
            "name": "组织部"
        },
        {
            "name": "互信用户"
        },
        {
            "name": "中铁电化局"
        },
        {
            "name": "行政管理部"
        },
        {
            "name": "董事会(监事会)办公室"
        },
        {
            "name": "建设分公司"
        },
        {
            "name": "执监室"
        },
        {
            "name": "子公司党委"
        },
        {
            "name": "总公司两校"
        },
        {
            "name": "汽车队"
        },
        {
            "name": "党委收发室"
        },
        {
            "name": "中铁七局"
        },
        {
            "name": "公司领导"
        },
        {
            "name": "总裁办公室(党委办公室)"
        },
        {
            "name": "财务部"
        },
        {
            "name": "中铁隧道"
        },
        {
            "name": "中铁信托"
        },
        {
            "name": "党校"
        },
        {
            "name": "技术保障组"
        },
        {
            "name": "项目公司 指挥部"
        },
        {
            "name": "子公司监事会"
        },
        {
            "name": "综合管理部"
        },
        {
            "name": "中铁九局"
        },
        {
            "name": "宏达中心党委"
        },
        {
            "name": "中铁机械院"
        },
        {
            "name": "行政收发室"
        },
        {
            "name": "董监办"
        },
        {
            "name": "外派专职董、监事"
        },
        {
            "name": "中铁六局"
        },
        {
            "name": "中铁西北院"
        },
        {
            "name": "法律事务部"
        },
        {
            "name": "中海外"
        },
        {
            "name": "中铁宝桥"
        },
        {
            "name": "公司领导及高管"
        },
        {
            "name": "项目公司 指挥部 党委"
        },
        {
            "name": "信息技术部"
        },
        {
            "name": "体协"
        },
        {
            "name": "国际业务部"
        },
        {
            "name": "中铁三局"
        },
        {
            "name": "中铁二院"
        },
        {
            "name": "中国中铁股份有限公司"
        },
        {
            "name": "宏达中心"
        }
    ]
}

// 必须定义此函数，并返回option配置对象
function getOptions () {
    const sizeArr = data.nodes.map(node => node.size)
    const sizeMin = Math.min(...sizeArr)
    const sizeMax = Math.max(...sizeArr)
    const sizeScale = d3.scaleLinear()
      .domain([sizeMin, sizeMax])
      .range([10, 50])
      const legends = data.categories

    data.links.map(d => {
        d.value = d.length
    })

    data.links.map(d => {
        d.value = d.size
    })

    return {
      color: [
        "#DC3912",
        "#FF9900",
        "#3366CC",
        "#109618",
        "#990099",
        "#3B3EAC",
        "#0099C6",
        "#DD4477",
        "#66AA00",
        "#B82E2E",
        "#316395",
        "#994499",
        "#22AA99",
        "#AAAA11",
        "#6633CC",
        "#E67300",
        "#8B0707",
        "#329262",
        "#5574A6",
        "#3B3EAC",
        "#FFEBEE",
        "#FFCDD2",
        "#EF9A9A",
        "#E57373",
        "#EF5350",
        "#F44336",
        "#E53935",
        "#D32F2F",
        "#C62828",
        "#B71C1C",
        "#FF8A80",
        "#FF5252",
        "#FF1744",
        "#D50000",
        "#FCE4EC",
        "#F8BBD0",
        "#F48FB1",
        "#F06292",
        "#EC407A",
        "#E91E63",
        "#D81B60",
        "#C2185B",
        "#AD1457",
        "#880E4F",
        "#FF80AB",
        "#FF4081",
        "#F50057",
        "#C51162",
        "#F3E5F5",
        "#E1BEE7",
        "#CE93D8",
        "#BA68C8",
        "#AB47BC",
        "#9C27B0",
        "#8E24AA",
        "#7B1FA2",
        "#6A1B9A",
        "#4A148C",
        "#EA80FC",
        "#E040FB",
        "#D500F9",
        "#AA00FF",
        "#EDE7F6",
        "#D1C4E9",
        "#B39DDB",
        "#9575CD",
        "#7E57C2",
        "#673AB7",
        "#5E35B1",
        "#512DA8",
        "#4527A0",
        "#311B92",
        "#B388FF",
        "#7C4DFF",
        "#651FFF",
        "#6200EA",
        "#E8EAF6",
        "#C5CAE9",
        "#9FA8DA",
        "#7986CB",
        "#5C6BC0",
        "#3F51B5",
        "#3949AB",
        "#303F9F",
        "#283593",
        "#1A237E",
        "#8C9EFF",
        "#536DFE",
        "#3D5AFE",
        "#304FFE",
        "#E3F2FD",
        "#BBDEFB",
        "#90CAF9",
        "#64B5F6",
        "#42A5F5",
        "#2196F3",
        "#1E88E5",
        "#1976D2",
        "#1565C0",
        "#0D47A1",
        "#82B1FF",
        "#448AFF",
        "#2979FF",
        "#2962FF",
        "#E1F5FE",
        "#B3E5FC",
        "#81D4FA",
        "#4FC3F7",
        "#29B6F6",
        "#03A9F4",
        "#039BE5",
        "#0288D1",
        "#0277BD",
        "#01579B",
        "#80D8FF",
        "#40C4FF",
        "#00B0FF",
        "#0091EA",
        "#E0F7FA",
        "#B2EBF2",
        "#80DEEA",
        "#4DD0E1",
        "#26C6DA",
        "#00BCD4",
        "#00ACC1",
        "#0097A7",
        "#00838F",
        "#006064",
        "#84FFFF",
        "#18FFFF",
        "#00E5FF",
        "#00B8D4",
        "#E0F2F1",
        "#B2DFDB",
        "#80CBC4",
        "#4DB6AC",
        "#26A69A",
        "#009688",
        "#00897B",
        "#00796B",
        "#00695C",
        "#004D40",
        "#A7FFEB",
        "#64FFDA",
        "#1DE9B6",
        "#00BFA5",
        "#E8F5E9",
        "#C8E6C9",
        "#A5D6A7",
        "#81C784",
        "#66BB6A",
        "#4CAF50",
        "#43A047",
        "#388E3C",
        "#2E7D32",
        "#1B5E20",
        "#B9F6CA",
        "#69F0AE",
        "#00E676",
        "#00C853",
        "#F1F8E9",
        "#DCEDC8",
        "#C5E1A5",
        "#AED581",
        "#9CCC65",
        "#8BC34A",
        "#7CB342",
        "#689F38",
        "#558B2F",
        "#33691E",
        "#CCFF90",
        "#B2FF59",
        "#76FF03",
        "#64DD17",
        "#F9FBE7",
        "#F0F4C3",
        "#E6EE9C",
        "#DCE775",
        "#D4E157",
        "#CDDC39",
        "#C0CA33",
        "#AFB42B",
        "#9E9D24",
        "#827717",
        "#F4FF81",
        "#EEFF41",
        "#C6FF00",
        "#AEEA00",
        "#FFFDE7",
        "#FFF9C4",
        "#FFF59D",
        "#FFF176",
        "#FFEE58",
        "#FFEB3B",
        "#FDD835",
        "#FBC02D",
        "#F9A825",
        "#F57F17",
        "#FFFF8D",
        "#FFFF00",
        "#FFEA00",
        "#FFD600",
        "#FFF8E1",
        "#FFECB3",
        "#FFE082",
        "#FFD54F",
        "#FFCA28",
        "#FFC107",
        "#FFB300",
        "#FFA000",
        "#FF8F00",
        "#FF6F00",
        "#FFE57F",
        "#FFD740",
        "#FFC400",
        "#FFAB00",
        "#FFF3E0",
        "#FFE0B2",
        "#FFCC80",
        "#FFB74D",
        "#FFA726",
        "#FF9800",
        "#FB8C00",
        "#F57C00",
        "#EF6C00",
        "#E65100",
        "#FFD180",
        "#FFAB40",
        "#FF9100",
        "#FF6D00",
        "#FBE9E7",
        "#FFCCBC",
        "#FFAB91",
        "#FF8A65",
        "#FF7043",
        "#FF5722",
        "#F4511E",
        "#E64A19",
        "#D84315",
        "#BF360C",
        "#FF9E80",
        "#FF6E40",
        "#FF3D00",
        "#DD2C00",
        "#EFEBE9",
        "#D7CCC8",
        "#BCAAA4",
        "#A1887F",
        "#8D6E63",
        "#795548",
        "#6D4C41",
        "#5D4037",
        "#4E342E",
        "#3E2723",
        "#FAFAFA",
        "#F5F5F5",
        "#EEEEEE",
        "#E0E0E0",
        "#BDBDBD",
        "#9E9E9E",
        "#757575",
        "#616161",
        "#424242",
        "#212121",
        "#ECEFF1",
        "#CFD8DC",
        "#B0BEC5",
        "#90A4AE",
        "#78909C",
        "#607D8B",
        "#546E7A",
        "#455A64",
        "#37474F",
        "#263238",
        "#000000",
        "#FFFFFF"
      ],
      tooltip: {},
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: legends
      },
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: "graph",
          layout: data.layout || "force",
          roam: true,
          focusNodeAdjacency: true,
          data: data.nodes,
          links: data.links,
          categories: data.categories,
          symbolSize: (value, params) => {
            return sizeScale(params.data.size)
          },
          nodeScaleRatio: 1,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#111'
              }
            }
          },
          force: {
            repulsion: [10, 150],
            edgeLength: [10, 250]
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
            opacity: 0.4
          },
          emphasis: {
            lineStyle: {
              width: 5
            }
          }
        }
      ]
    };
  }

`
