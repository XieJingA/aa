<template>
  <div class="chart-view">
    <h2>饼图 (Pie Chart)</h2>
    <p>饼图用于展示各部分占整体的比例关系。</p>
    <PieChart />
  </div>
</template>

<script setup>
import PieChart from '../components/PieChart.vue'
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
