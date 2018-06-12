<template>
    <div ref="container"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts-gl'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import bmap from 'echarts/extension/bmap/bmap'
import { addListener, removeListener } from 'resize-detector'
import debounce from 'lodash/debounce'
console.log(`echarts version: ${echarts.version}, bmap version: ${bmap.version}`)

export default {
  name: 'Echart',
  props: {
    option: {
      type: Object,
      required: false
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      chart: null,
      lastArea: 0
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.container)
    this.chart.$echarts = echarts
    if (this.autoResize) {
      this.lastArea = this.getArea()
      this.__resizeHandler = debounce(() => {
        if (this.lastArea === 0) {
          // emulate initial render for initially hidden charts
          this.mergeOptions({}, true)
          this.resize()
          this.mergeOptions(this.options, true)
        } else {
          this.resize()
        }
        this.lastArea = this.getArea()
      }, 100, { leading: true })
      addListener(this.$el, this.__resizeHandler)
    }
    this.$emit('ready', this.chart)
    if (this.option) {
      this.chart.setOption(this.option)
    }
  },
  watch: {
    option (val, oldVal) {
      this.chart.setOption(val, true)
    }
  },
  methods: {
    // provide a explicit merge option method
    mergeOptions (options, notMerge, lazyUpdate) {
      this.delegateMethod('setOption', options, notMerge, lazyUpdate)
    },
    getArea () {
      return this.$el.offsetWidth * this.$el.offsetHeight
    },
    delegateMethod (name, ...args) {
      if (!this.chart) {
        console.warn(`Cannot call [${name}] before the chart is initialized. Set prop [options] first.`, this)
        return
      }
      return this.chart[name](...args)
    },
    showLoading (type, options) {
      this.delegateMethod('showLoading', type, options)
    },
    hideLoading () {
      this.delegateMethod('hideLoading')
    },
    resize (options) {
      this.delegateMethod('resize', options)
    },
    dispose () {
      this.delegateMethod('dispose')
    },
    destroy () {
      if (this.autoResize) {
        removeListener(this.$el, this.__resizeHandler)
      }
      this.dispose()
      this.chart = null
    }
  },
  activated () {
    if (this.autoResize) {
      this.chart && this.chart.resize()
    }
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.destroy()
  },
  connect (group) {
    if (typeof group !== 'string') {
      group = group.map(chart => chart.chart)
    }
    echarts.connect(group)
  },
  disconnect (group) {
    echarts.disConnect(group)
  },
  registerMap (mapName, geoJSON, specialAreas) {
    echarts.registerMap(mapName, geoJSON, specialAreas)
  },
  registerTheme (name, theme) {
    echarts.registerTheme(name, theme)
  },
  graphic: echarts.graphic
}
</script>
