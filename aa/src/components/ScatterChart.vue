<template>
    <el-card>
        <div id="scatter" style="width: 100%; height: 400px;"></div>
    </el-card>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let myChart = null
onMounted(() => {
  if (window.echarts) {
    myChart = window.echarts.init(document.getElementById('scatter'))
    const option = {
      title: {
        text: '散点图示例'
      },
      xAxis: {
        name: 'X轴'
      },
      yAxis: {
        name: 'Y轴'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.20],
            [11.5, 7.20],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
          ],
          type: 'scatter'
        }
      ]
    }
    myChart.setOption(option)
  }
})

onUnmounted(() => {
  if (myChart) {
    myChart.dispose()
  }
})
</script>
