<template>
    <el-card class="introduce">
      <div class="order">
        <el-card class="order-item">
          <template #header>
            <div class="card-header">
              <span>当前设定值</span>
            </div>
          </template>
          <div class="item">{{ set }}</div>
        </el-card>
        <el-card class="order-item">
          <template #header>
            <div class="card-header">
              <span>当前测量值</span>
            </div>
          </template>
          <div class="item">{{ real }}</div>
        </el-card>
        <el-card class="order-item">
          <template #header>
            <div class="card-header">
              <span>异常报警数</span>
            </div>
          </template>
          <div class="item">{{ warnings }}</div>
        </el-card>
      </div>
    </el-card>
</template>

<script setup>
  const props = defineProps({
    set: Number,
    real: Number,
    warnings: Number
  })
</script>

<style>
  .introduce .order {
    display: flex;
    margin-bottom: 50px;
  }
  .introduce .order .order-item {
    flex: 1;
    margin-right: 20px;
  }
  .introduce .order .order-item:last-child{
    margin-right: 0;
  }
  #zoom {
    height:500px
  }
</style>
  