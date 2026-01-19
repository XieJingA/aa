<template>
    <el-card>
        <div id="gauge" style="width: 100%; height: 400px;"></div>
    </el-card>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let myChart = null
onMounted(() => {
  if (window.echarts) {
    myChart = window.echarts.init(document.getElementById('gauge'))
    const option = {
      title: {
        text: '仪表盘示例'
      },
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {
            formatter: '{value}%'
          },
          data: [
            {
              value: 68,
              name: '完成率'
            }
          ]
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
