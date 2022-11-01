<template>
  <Card :set="set" :real="real" :warnings="warnings" />
  <LineChart />
</template>

<script setup>
  import { ref } from 'vue'
  import Card from '../components/Card.vue'
  import LineChart from '../components/LineChart.vue'

  const set = ref(20.0)
  const real = ref(21.97)
  const warnings = ref(2)
</script>