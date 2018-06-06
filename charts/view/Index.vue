<template>
    <div class='wrapper'>
        <EditorBox v-model='result' :lang='lang' class='editor' />
        <fullscreen ref='fullscreen' class='chart-wrapper' @change="fullscreenChange">
            <EChart v-if='!error' class='chart' :option='option' @ready='handleReady' :style='style' />
            <div v-else class='chart error-info'>
                <p>{{error.message}}</p>
            </div>
            <button type='button' class='fullscreen-btn' @click="toggle" >
                <img :src='fullscreen ? icon.fullscreen_exit_icon : icon.fullscreen_icon'>
            </button>
        </fullscreen>
    </div>
</template>

<script>
import * as Babel from '@babel/standalone'
import Promise from 'bluebird'
import EChart from '../components/Echart'
import EditorBox from '../components/EditorBox'
import ScriptText from './index.js'
import fullscreen_icon from '../images/fullscreen.svg'
import fullscreen_exit_icon from '../images/fullscreen-exit.svg'
export default {
    components: {
        EChart,
        EditorBox
    },
    data() {
        return {
            icon: {
                fullscreen_icon,
                fullscreen_exit_icon
            },
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
            this.updateOption()
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
                await Promise.map(scripts||[], (url) => {
                    return jQuery.cachedScript(url)
                }, { concurrency: 20 })
                try {
                    this.error = null
                    this.style = style
                    this.option = getOptions()
                    this.$nextTick(() => {
                        this.chart.resize()
                    })           
                } catch(err) {
                    this.error = err
                }
            }
            try {
                const script = `(function(){
                    ${this.result};
                    window.done(style, scripts, getOptions)
                })()`
                const babelCode = Babel.transform(script, {
                    presets: ["es2015", "es2016"]
                }).code
                new Function(babelCode)()
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
</style>
