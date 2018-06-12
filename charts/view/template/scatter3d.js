export default {
  name: '3D散点图',
  icon: require('../../images/templates/graph-circular.png'),
  code: `

// 自定义样式
const style = {
    background: '#aaa',
    padding: '10px'
}

// 需要加载的js文件
const scripts = [
]

// 必须定义此函数，并返回option配置对象
function getOptions () {
  return new Promise((resolve, reject) => {
    $.getJSON('http://127.0.0.1:8000/life-expectancy-table.json', function (data) {
      const symbolSize = 2.5;
      resolve({
        grid3D: {},
        xAxis3D: {
          type: 'category'
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
          dimensions: [
            'Income',
            'Life Expectancy',
            'Population',
            'Country',
            {name: 'Year', type: 'ordinal'}
          ],
          source: data
        },
        series: [
          {
            type: 'scatter3D',
            symbolSize: symbolSize,
            encode: {
              x: 'Country',
              y: 'Life Expectancy',
              z: 'Income',
              tooltip: [0, 1, 2, 3, 4]
            }
          }
        ]
      })
    }).fail(function(jqxhr, textStatus, error) {
      reject('数据加载失败' + error)
    })
  })
}
`
}
