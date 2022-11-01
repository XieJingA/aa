<template>
  <Card :set="set" :real="real" :warnings="warnings" />
  <LineChart />
</template>

<script setup>
  import { ref } from 'vue'
  import Card from '../components/Card.vue'
  import LineChart from '../components/LineChart.vue'

  const set = ref(95.00)
  const real = ref(94.46)
  const warnings = ref(2)
</script>