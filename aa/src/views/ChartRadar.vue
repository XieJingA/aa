<template>
  <div class="chart-view">
    <h2>雷达图 (Radar Chart)</h2>
    <p>雷达图用于展示多维度数据的对比分析。</p>
    <RadarChart />
  </div>
</template>

<script setup>
import RadarChart from '../components/RadarChart.vue'
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
