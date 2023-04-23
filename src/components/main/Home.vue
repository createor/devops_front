<!-- 主界面 -->
<template>
  <div class='app-wrapper'>
    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside>
        <el-menu
          default-active='1'>
          <Sider v-for='(menu,index) in menuList' :key='index' :item='menu' />
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部tab栏 -->
        <el-header>
          <Tabs :item='t'/>
        </el-header>
        <!-- 主要显示界面 -->
        <el-main>
          <app-main />
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
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
  data () {
    return {}
  },
  computed: {
    menuList () {
      return this.$store.getters.menu
    },
    t () {
      return {
        'id': '1',
        'name': '主机',
        'path': '/host'
      }
    }
  }
}
</script>
<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.el-container {
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  height: 100%;
}
</style>
