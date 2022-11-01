<template>
    <el-card>
        <div id="bar"></div>
    </el-card>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let myChart = null
onMounted(() => {
if (window.echarts) {
  // 基于准备好的dom，初始化echarts实例
  myChart = window.echarts.init(document.getElementById('bar'))
  // 指定图表的配置项和数据
  const option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
}
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
} 
})
onUnmounted(() => {
myChart.dispose()
})
</script>