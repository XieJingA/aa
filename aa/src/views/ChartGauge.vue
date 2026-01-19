<template>
  <div class="chart-view">
    <h2>仪表盘 (Gauge Chart)</h2>
    <p>仪表盘用于展示单一指标的完成度或进度。</p>
    <GaugeChart />
  </div>
</template>

<script setup>
import GaugeChart from '../components/GaugeChart.vue'
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
