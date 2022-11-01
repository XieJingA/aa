<template>
  <Card :set="set" :real="real" :warnings="warnings" />
  <LineChart />
</template>

<script setup>
  import { ref } from 'vue'
  import Card from '../components/Card.vue'
  import LineChart from '../components/LineChart.vue'

  const set = ref(20.00)
  const real = ref(19.37)
  const warnings = ref(3)
</script>