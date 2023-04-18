<!-- 主机详情页面 -->
<!-- 使用echart展示主机详情 -->
<template>
  <div :id="id" style="width: 600px;height:400px;"></div>
</template>

<script>
import * as echarts from 'echarts/core'
import { TooltipComponent } from 'echarts/components'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { getDetail } from '@/api/host'

echarts.use([TooltipComponent, GaugeChart, CanvasRenderer])

export default {
  name: 'Detail',
  data () {
    return {
      id: 'tt',
      ip: null,
      options: null,
      chart: null
    }
  },
  mounted () {
    // 获取IP地址
    this.ip = this.$route.query.ip
    // ajax请求获取数据
    this._getDetail(this.ip)
  },
  beforeDestory () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(this.options)
    },
    _getDetail (ip) {
      getDetail(ip).then((res) => {
        console.log(res)
        this.options = res.data.data.cpu_info
        console.log(this.options)
        this.initChart()
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
