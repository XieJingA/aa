<template>
  <div class="chart-view">
    <h2>散点图 (Scatter Chart)</h2>
    <p>散点图用于展示两个变量之间的相关性。</p>
    <ScatterChart />
  </div>
</template>

<script setup>
import ScatterChart from '../components/ScatterChart.vue'
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
