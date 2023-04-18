<!-- 主界面 -->
<template>
  <el-container>
    <!-- 左侧菜单栏 -->
    <Sider :menuList="menuList" />
    <!-- <el-container> -->
      <el-header>
        <!-- 顶部tab栏 -->
        <Tabs />
      </el-header>
      <el-main>
        <!-- 主要显示界面 -->
        <app-main />
        <!-- <router-view /> -->
      </el-main>
    <!-- </el-container> -->
    <el-footer></el-footer>
  </el-container>
</template>
<script>
import Sider from './Sider'
import Tabs from './Tabs'
import AppMain from './AppMain'

export default {
  name: 'Home',
  components: {
    Sider,
    Tabs,
    AppMain
  },
  computed: {
    menuList () {
      return this.$store.getters.menu
    }
  }
}
</script>
<style scoped>
 .el-header {

 }
</style>
