<template>
  <div class="chart-view">
    <h2>柱状图 (Bar Chart)</h2>
    <p>柱状图用于比较不同类别之间的数据大小。</p>
    <BarChart />
  </div>
</template>

<script setup>
import BarChart from '../components/BarChart.vue'
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
