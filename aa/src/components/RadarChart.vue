<template>
    <el-card>
        <div id="radar" style="width: 100%; height: 400px;"></div>
    </el-card>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let myChart = null
onMounted(() => {
  if (window.echarts) {
    myChart = window.echarts.init(document.getElementById('radar'))
    const option = {
      title: {
        text: '雷达图示例'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        data: ['预算分配', '实际开销']
      },
      radar: {
        indicator: [
          { name: '销售', max: 6500 },
          { name: '管理', max: 16000 },
          { name: '信息技术', max: 30000 },
          { name: '客服', max: 38000 },
          { name: '研发', max: 52000 },
          { name: '市场', max: 25000 }
        ]
      },
      series: [
        {
          name: '预算 vs 开销',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: '实际开销'
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
