<template>
  <Card :set="set" :real="real" :warnings="warnings" />
  <LineChart />
</template>

<script setup>
  import { ref } from 'vue'
  import Card from '../components/Card.vue'
  import LineChart from '../components/LineChart.vue'

  const set = ref(5.00)
  const real = ref(9.81)
  const warnings = ref(2)
</script>