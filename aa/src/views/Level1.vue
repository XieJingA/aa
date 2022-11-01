<template>
  <Card :set="set" :real="real" :warnings="warnings" />
  <LineChart />
</template>

<script setup>
  import { ref } from 'vue'
  import BarChart from '../components/BarChart.vue';
  import Card from '../components/Card.vue'
  import LineChart from '../components/LineChart.vue'

  const set = ref(15.00)
  const real = ref(14.83)
  const warnings = ref(2)
</script>