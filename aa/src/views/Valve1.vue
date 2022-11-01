<template>
  <Card :set="set" :real="real" :warnings="warnings" />
  <LineChart />
</template>

<script setup>
  import { ref } from 'vue'
  import Card from '../components/Card.vue'
  import LineChart from '../components/LineChart.vue'

  const set = ref(85.00)
  const real = ref(84.12)
  const warnings = ref(2)
</script>