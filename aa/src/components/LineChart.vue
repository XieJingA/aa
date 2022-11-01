<template>
    <el-card>
        <div id="zoom"></div>
    </el-card>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let myChart = null
onMounted(() => {
if (window.echarts) {
  // 基于准备好的dom，初始化echarts实例
  myChart = window.echarts.init(document.getElementById('zoom'))
  // 指定图表的配置项和数据
  const option = {
    title: {
      text: '系统折线图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['预测值', '实际值']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        name: '序号',
        boundaryGap: false,
        data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          symbol:'arrow'
        }
      }
    ],
    series: [
      {
        name: '预测值',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310],
        lineStyle: {
          normal: {
            width: 3
          }
        }
      },
      {
        name: '实际值',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410],
        lineStyle: {
          normal: {
            width: 3
          }
        }
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