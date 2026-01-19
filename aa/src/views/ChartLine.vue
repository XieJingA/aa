<template>
  <div class="chart-view">
    <h2>折线图 (Line Chart)</h2>
    <p>折线图用于展示数据随时间或其他连续变量的变化趋势。</p>
    <LineChart />
  </div>
</template>

<script setup>
import LineChart from '../components/LineChart.vue'
</script>

<style scoped>
.chart-view {
  padding: 20px;
}
.chart-view h2 {
  margin-bottom: 10px;
  color: #333;
}
.chart-view p {
  margin-bottom: 20px;
  color: #666;
}
</style>
