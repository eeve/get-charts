<template>
    <div class='wrapper'>
        <div class='editor'>
          <EditorBox ref='editor' v-model='result' :lang='lang' />
          <button class='template-btn btn blue' @click='handleToggleModal'>载入示例</button>
        </div>
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
              <button v-if='!realtime' type='button' class='update-btn btn blue' @click="apply" >应用更新</button>
            </div>
        </fullscreen>
        <template-modal ref='modal' @on-actived='handleChangeActive'/>
    </div>
</template>

<script>
import * as Babel from '@babel/standalone';
import Promise from 'bluebird';
import EChart from '../components/Echart';
import EditorBox from '../components/EditorBox';
import TemplateModal from './TemplateModal';
import fullscreen_icon from '../images/fullscreen.svg'; // eslint-disable-line camelcase
import fullscreen_exit_icon from '../images/fullscreen-exit.svg'; // eslint-disable-line camelcase
export default {
  components: {
    EChart,
    EditorBox,
    TemplateModal
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
      result: `
// 自定义样式
const style = {
    // background: 'transparent',
    // padding: '10px'
}

// 需要加载的js文件
const scripts = [
    // '//d3js.org/d3-interpolate.v1.min.js',
    // '//d3js.org/d3-scale.v2.min.js'
]

const data = {

}

// 必须定义此函数，并返回option配置对象
function getOptions () {
  return data
}

// 在切换示例时清理内存（定时器，全局大对象）
function destory () {

}
`,
      chart: null,
      style: {},
      option: null,
      destoryFunc: null,
      error: null
    }
  },
  watch: {
    result () {
      if (this.realtime) {
        this.updateOption()
      }
    },
    realtime () {
      if (this.realtime === true) {
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
      if (!this.ready || this.result.trim() === '') {
        return
      }
      window.chart = this.chart
      window.echarts = this.chart.$echarts
      window.done = async (style, scripts, getOptions, destory) => {
        await Promise.map(
          scripts || [],
          url => {
            return jQuery.cachedScript(url)
          },
          { concurrency: 20 }
        )
        try {
          this.error = null
          this.style = style
          this.option = await getOptions()
          this.destoryFunc = destory
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
                    window.done(style, scripts, getOptions, typeof destory === "undefined" ? null : destory)
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
    },
    handleToggleModal () {
      this.$refs.modal.toggle()
    },
    handleChangeActive ({ code, icon, name }) {
      // 执行销毁逻辑
      if (this.destoryFunc) {
        this.destoryFunc()
      }
      this.result = code
      if (!this.realtime) {
        this.updateOption()
      }
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
  width: 40% !important;
  position: relative;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: hsla(0,0%,100%,.45);
    border-radius: 10px;
  }
}
.template-btn {
  position: absolute;
  right: 25px;
  bottom: 10px;
  z-index: 100;
}
.chart-wrapper {
  width: 60%;
  background: #eee !important;
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
    // background: #0088b5;
    // color: #fff;
    // border: none;
    // outline: none;
    padding: 3px 10px;
  }
}
</style>
