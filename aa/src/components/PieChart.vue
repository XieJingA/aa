<template>
    <el-card>
        <div id="pie" style="width: 100%; height: 400px;"></div>
    </el-card>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let myChart = null
onMounted(() => {
  if (window.echarts) {
    myChart = window.echarts.init(document.getElementById('pie'))
    const option = {
      title: {
        text: '饼图示例',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '数据分布',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '类别A' },
            { value: 735, name: '类别B' },
            { value: 580, name: '类别C' },
            { value: 484, name: '类别D' },
            { value: 300, name: '类别E' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
