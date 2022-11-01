<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <span>双容水箱数字孪生系统</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-openeds="state.defaultOpen"
          :default-active='state.currentPath'
        >
          <el-sub-menu index="1">
            <template #title>
              <h2>Dashboard</h2>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/"><el-icon><HomeFilled /></el-icon>首页</el-menu-item>
              <el-menu-item index="/"><el-icon><Plus /></el-icon>帮助</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <h2>数据分析</h2>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/level1"><el-icon><Histogram /></el-icon>1#水箱液位</el-menu-item>
              <el-menu-item index="/level2"><el-icon><Histogram /></el-icon>2#水箱液位</el-menu-item>
              <el-menu-item index="/level3"><el-icon><Histogram /></el-icon>3#水箱液位</el-menu-item>
              <el-menu-item index="/valve1"><el-icon><StarFilled /></el-icon>1#阀门开度</el-menu-item>
              <el-menu-item index="/valve2"><el-icon><StarFilled /></el-icon>2#阀门开度</el-menu-item>
              <el-menu-item index="/flow"><el-icon><StarFilled /></el-icon>流量</el-menu-item>
              <el-menu-item index="/pressure"><el-icon><StarFilled /></el-icon>压强</el-menu-item>
              <el-menu-item index="/table"><el-icon><InfoFilled /></el-icon>异常数据记录</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <h2>用户管理</h2>
            </template>
            <el-menu-item-group>
              <el-menu-item><el-icon><User /></el-icon>权限管理</el-menu-item>
              <el-menu-item><el-icon><Lock /></el-icon>修改密码</el-menu-item>
              <el-menu-item><el-icon><Plus /></el-icon>添加</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <h2>设备信息</h2>
            </template>
            <el-menu-item-group>
              <el-menu-item><el-icon><User /></el-icon>水箱</el-menu-item>
              <el-menu-item><el-icon><Lock /></el-icon>阀门</el-menu-item>
              <el-menu-item><el-icon><Plus /></el-icon>控制器</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const state = reactive({
  showMenu: true,
  defaultOpen: ['1'],
  currentPath: '/',
})

</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 300px!important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 24px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .el-menu {
    border-right: none!important;
  }
  .el-submenu {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .el-submenu:first-child {
    border-top: none;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: -1px!important;
  }
  a {
    color: #409eff;
    text-decoration: none;
  }
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .el-popper__arrow {
    display: none;
  }
</style>