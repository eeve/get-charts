export default {
  name: '圆圈加载动画',
  icon: require('../../images/templates/graph-circular.png'),
  code: `
  // 自定义样式
  const style = {
  }

  // 需要加载的js文件
  const scripts = [
  ]

  let tips = 0;

  function loading() {
      return [{
          value: tips,
          itemStyle: {
            color: '#fb358a',
            shadowBlur: 10,
            shadowColor: '#fb358a'
          }
      }, {
        value: 100 - tips,
        itemStyle: {
            color: '#ddd'
        }
      }]
  }

  const data = {
    title: {
      text: (tips * 1) + '%',
      x: 'center',
      y: 'center',
      textStyle: {
        color: '#fb358a',
        fontSize: 40,
      }
    },
    series: [{
      name: 'loading',
      type: 'pie',
      radius: ['30%', '31%'],
      hoverAnimation: false,
      label: {
        show: false
      },
      data: loading()
    }]
  }

  // 必须定义此函数，并返回option配置对象
  function getOptions () {
    return data
  }

  // 清理内存
  function destory () {
    // 使用定时器时，请注意释放
    if (window.interval) {
      window.clearInterval(window.interval)
    }
  }

  destory()
  window.interval = setInterval(function() {
    if (tips == 100) {
      tips = 0;
    } else {
      ++tips;
    }
    window.chart.setOption({
      title: {
        text: tips + '%'
      },
      series: [{
        name: 'loading',
        data: loading()
      }]
    })
  }, 100);

  `
}
