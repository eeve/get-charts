<template>
    <div class='second-hand-housing-map'>
        <control-box class="title">长沙市二手房价数据 （2018年5月）</control-box>
        <p class="sub-title">数据来源互联网</p>
        <control-box class="map-control-box">
            <!-- <label class="control">
                <span class="label">显示板块</span>
                <input type="checkbox" v-model='config.showBankuai'>
            </label> -->
            <div class="control">
                <div class="label">显示区域</div>
                <div class="children">
                    <check-box v-for='area in config.data' :key='area.name' :label='area.name' v-model='area.checked' :val='area.name'></check-box>
                    <!-- <label v-for='area in config.data' :key='area.name' class='text-right' style='max-width: 60px;'>
                        <span class="value">{{area.name}}</span>
                        <input type="checkbox" v-model='area.checked' :value='area.name'>
                    </label> -->
                </div>
            </div>
        </control-box>
        <echart class='chart' ref='chart' @ready='handleChartReady'></echart>〔方案選單〕
    </div>
</template>

<script>
import ControlBox from '../components/ControlBox'
import CheckBox from '../components/CheckBox'
import ds, { convertSerie, getAreaBoundaryData } from '../data'
import mapStyle from './mapstyle'
const localCfg = window.localStorage.getItem('config')
let config
try {
  if (localCfg) {
    config = JSON.parse(localCfg)
    if (config.data.length !== ds.length) {
      throw new Error('old Data')
    }
  } else {
    throw new Error('no localCfg')
  }
} catch (err) {
  config = {
    showBankuai: true,
    data: ds.map(d => ({ ...d, checked: true }))
  }
}
export default {
  components: {
    CheckBox,
    ControlBox
  },
  data () {
    return {
      config,
      layer: {
        bankuai: [],
        bankuaiText: []
      },
      chart: null
    }
  },
  methods: {
    handleChartReady (chart) {
      this.chart = chart

      this.updateArea()

      this.bmap.addControl(new BMap.MapTypeControl())
      const cr = new BMap.CopyrightControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
      })
      cr.addCopyright({
        id: 1,
        content: "<a href='https://is.app/eeve' target='_blank'>房价数据来源于互联网，由EEVE整理制作</a>",
        bounds: this.bmap.getBounds()
      })
      this.bmap.addControl(cr)

      this.addLayer()
    },
    async addLayer () {
      const cities = await getAreaBoundaryData()
      cities.forEach(([bdData, bdTextData]) => {
        const bdDataSet = new mapv.DataSet(bdData)
        const bdTextDataSet = new mapv.DataSet(bdTextData)
        this.layer.bankuai.push(
          new mapv.baiduMapLayer(this.bmap, bdDataSet, { // eslint-disable-line new-cap
            draw: 'simple',
            lineWidth: 1,
            strokeStyle: 'rgba(0, 0, 255, .5)',
            zIndex: 1,
            globalAlpha: 0.2
          })
        )
        this.layer.bankuaiText.push(
          new mapv.baiduMapLayer(this.bmap, bdTextDataSet, { // eslint-disable-line new-cap
            draw: 'text',
            font: '14px Arial',
            fillStyle: 'yellow',
            shadowColor: 'blue',
            shadowBlue: 20,
            zIndex: 2,
            shadowBlur: 10
          })
        )
      })
    },
    updateLayer () {
      const fn = this.config.showBankuai ? 'show' : 'hide'
      this.layer.bankuai.map(d => d[fn]())
      this.layer.bankuaiText.map(d => d[fn]())
    },
    updateArea () {
      if (this.chart) {
        this.chart.setOption(this.option, true)
      }
    },
    autoSave () {
      window.localStorage.setItem('config', JSON.stringify(this.config))
    }
  },
  computed: {
    option () {
      return {
        tooltip: {
          trigger: 'item',
          padding: [5, 15],
          backgroundColor: 'rgba(50, 50, 50, 0.7)',
          extraCssText:
            'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);border: 2px solid #333366; border-radius: 2px;',
          formatter: p => {
            return `<div class='tooltip-name'>${
              p.name
            }</div><div class='tooltip-content'><span class='tooltip-price'>${
              p.value[2]
            }</span>元/平米</div>`
          }
        },
        toolbox: {
          show: false
        },
        bmap: {
          center: [112.969479, 28.201123],
          zoom: 12,
          roam: true,
          mapStyle: {
            styleJson: mapStyle
          }
        },
        visualMap: {
          min: 5000,
          max: 50000,
          text: ['20000元/平方', '5000元/平方'],
          realtime: true,
          calculable: true,
          left: 15,
          // top: 400,
          top: 380,
          textGap: 25,
          inRange: {
            color: ['#2be28a', '#FF8235', '#EF3B36']
          },
          backgroundColor: '#E7EFF3',
          padding: [15, 24],
          textStyle: {
            color: '#404B69'
          }
        },
        series: convertSerie(this.displayArea),
        animation: false
      }
    },
    displayArea () {
      return this.config.data.filter(d => d.checked)
    },
    bmap () {
      return this.chart
        ? this.chart
          .getModel()
          .getComponent('bmap')
          .getBMap()
        : null
    }
  },
  watch: {
    config: {
      deep: true,
      handler () {
        this.updateLayer()
        this.updateArea()
        this.autoSave()
      }
    }
  }
}
</script>

<style lang="less">
.tooltip-name {
  color: #ff5f5f;
  font-size: 18px;
  margin: 0;
  padding: 0;
}
.tooltip-price {
  color: #f9e75e;
  font-size: 16px;
  font-family: verdana, arial;
  margin-right: 5px;
}
.title {
  display: inline-block;
  position: relative;
  z-index: 2;
  margin: 15px 10px;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  // background: #ffe8d5;
  padding: 10px 15px;
}
.second-hand-housing-map {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  .map-control-box {
    width: 150px;
    // height: 305px;
    height: 286px;
    // overflow-y: auto;
    // overflow-x: hidden;
    overflow: hidden;
    background: #c7e7e996;
    color: #36d7d1;
    border: 1px solid #08fef4;
    -webkit-box-shadow: inset 0px 0px 5px 2px rgba(8, 254, 244, 0.3);
    box-shadow: inset 0px 0px 5px 2px rgba(8, 254, 244, 0.3);
    position: absolute;
    left: 15px;
    top: 85px;
    z-index: 2;
    padding: 20px 35px;
    user-select: none;
    > .control {
      display: block;
      margin-bottom: 10px;
      .label {
        font-size: 0.9rem;
        font-weight: 700;
        // color: #283149;
      }
      .value {
        font-size: 0.8rem;
        // color: #404B69;
      }
      .children {
        margin-left: 2px;
        > label {
          display: block;
          margin-bottom: 5px;
          > input[type="checkbox"] {
            vertical-align: middle;
          }
        }
      }
    }
  }
  .chart {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
}
.anchorBL {
  display: none!important;
}
.BMap_noprint.anchorTR {
  div {
    border-left: 1px solid rgb(8, 254, 244)!important;
    border-top: 1px solid rgb(8, 254, 244)!important;
    border-bottom: 1px solid rgb(8, 254, 244)!important;
    background: rgb(8, 254, 244)!important;
  }
}
</style>
