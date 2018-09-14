export default {
  name: 'diff-chart',
  icon: require('../../images/templates/graph-circular.png'),
  code: `
  // 自定义样式
  const style = {
    backgroundColor: '#f3f3f3'
  }

  // 需要加载的js文件
  const scripts = [
  ]

  // 必须定义此函数，并返回option配置对象
  function getOptions () {
    // [min, max]
    function random(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for (let i = 0; i < 100; i++) {
      arr1.push([i, random(20, 25)])
    }

    arr1.forEach(function (item, i) {
        const seed = random(-5, 10) // 随机加减
        const num = item[1] + seed
        const min = Math.min(num, item[1])
        arr3.push([i, min])
        arr2.push([i, num])
    })
    return {
        xAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            }
        },
        series: [{
            color: 'rgb(145,207,96)',
            data: arr1,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 0
            },
            areaStyle: {
                opacity: 1
            },
            z: 2
        }, {
            color: 'rgb(252,141,89)',
            data: arr2,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 0
            },
            areaStyle: {
                opacity: 1
            },
            z: 1
        }, {
            color: '#f3f3f3',
            data: arr3,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 0
            },
            areaStyle: {
                opacity: 1
            },
            z: 3
        }]
    }
  }

  // 在切换示例时清理内存（定时器，全局大对象）
  function destory () {

  }
  `
}
