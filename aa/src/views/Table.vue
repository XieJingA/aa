<template>
    <el-table :data="tableData" style="width: 100%" height="100%">
      <el-table-column fixed prop="time" label="时间" width="200" />
      <el-table-column prop="level1" label="液位1(cm)" width="120" />
      <el-table-column prop="level2" label="液位2(cm)" width="120" />
      <el-table-column prop="level3" label="液位3(cm)" width="120" />
      <el-table-column prop="valve1" label="阀门1(%)开度" width="150"/>
      <el-table-column prop="valve2" label="阀门2(%)开度" width="150" />
      <el-table-column prop="flow" label="流量" width="120" />
      <el-table-column prop="pressure" label="压强" width="120" />
      <el-table-column prop="error" label="最大误差" width="120" />
    </el-table>
  </template>
  
  <script setup>
  const tableData = [
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    },
    {
      time: '2022-10-29 16:34:09',
      level1: '14.8',
      level2: '10.3',
      level3: '27.7',
      valve1: '85.26',
      valve2: '77.23',
      flow: '45',
      pressure: '66',
      error: 'flow'
    }
  ]
  </script>