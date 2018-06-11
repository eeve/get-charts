<template>
    <div class='wrapper'>
        <EditorBox ref='editor' v-model='result' :lang='lang' class='editor' />
        <fullscreen ref='fullscreen' class='chart-wrapper' @change="fullscreenChange">
            <EChart v-if='!error' class='chart' :option='option' @ready='handleReady' :style='style' />
            <div v-else class='chart error-info'>
                <p>{{error.message}}</p>
            </div>
            <button type='button' class='fullscreen-btn' @click="toggle" >
                <img :src='fullscreen ? icon.fullscreen_exit_icon : icon.fullscreen_icon'>
            </button>
            <div class='controls' v-if='!fullscreen'>
              <label>
                <input type='checkbox' v-model='realtime'>
                实时更新图表
              </label>
              <button v-if='!realtime' type='button' class='update-btn' @click="apply" >应用更新</button>
            </div>
        </fullscreen>
    </div>
</template>

<script>
import * as Babel from '@babel/standalone'
import Promise from 'bluebird'
import EChart from '../components/Echart'
import EditorBox from '../components/EditorBox'
import ScriptText from './index.js'
import fullscreen_icon from '../images/fullscreen.svg' // eslint-disable-line camelcase
import fullscreen_exit_icon from '../images/fullscreen-exit.svg' // eslint-disable-line camelcase
export default {
  components: {
    EChart,
    EditorBox
  },
  data () {
    return {
      icon: {
        fullscreen_icon,
        fullscreen_exit_icon
      },
      realtime: false,
      fullscreen: false,
      lang: 'javascript',
      ready: false,
      result: ScriptText,
      chart: null,
      style: {},
      option: null,
      error: null
    }
  },
  watch: {
    result () {
      if (this.realtime) {
        this.updateOption()
      }
    },
    error () {
      if (this.error) {
        console.error(this.error)
      }
    }
  },
  methods: {
    handleReady (chart) {
      this.chart = chart
      this.ready = true
      this.updateOption()
    },
    updateOption () {
      if (!this.ready) { return }
      window.chart = this.chart
      window.echarts = this.chart.$echarts
      window.done = async (style, scripts, getOptions) => {
        await Promise.map(scripts || [], (url) => {
          return jQuery.cachedScript(url)
        }, { concurrency: 20 })
        try {
          this.error = null
          this.style = style
          this.option = getOptions()
          this.$nextTick(() => {
            this.chart.resize()
          })
        } catch (err) {
          this.error = err
        }
      }
      try {
        const script = `(function(){
                    ${this.result};
                    window.done(style, scripts, getOptions)
                })()`
        const babelCode = Babel.transform(script, {
          presets: ['es2015', 'es2016']
        }).code
        new Function(babelCode)() // eslint-disable-line no-new-func
      } catch (err) {
        this.error = err
      }
    },
    toggle () {
      this.error = new Error('加载中...')
      setTimeout(() => {
        this.$refs['fullscreen'].toggle()
      }, 40)
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
      setTimeout(() => {
        this.error = null
      }, 40)
    },
    apply () {
      this.updateOption()
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    > div {
        display: inherit;
        align-self: center;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
    }
    .error-info {
        padding: 20px;
    }
}
.editor {
    width: 40%!important;
}
.chart-wrapper {
    width: 60%;
    background: #eee!important;
    position: relative;
}
.chart {
    width: 100%;
    height: 100%;
}
.fullscreen-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    > img {
        width: 20px;
        height: 20px;
    }
}
.controls {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 0.8rem;
  height: 25px;
  line-height: 25px;
  > label {
    cursor: pointer;
    margin-right: 10px;
  }
  > button {
    background: #0088b5;
    color: #fff;
    border: none;
    outline: none;
    padding: 3px 10px;
  }
}
</style>
