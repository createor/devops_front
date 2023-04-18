<template>
    <el-aside>
      <el-menu>
      <el-submenu v-for="item in menuList" :key="item.path" :index="item.id">
        <template slot="title">{{ item.name }}</template>
        <el-menu-item-group v-if="item.children">
          <div v-for="child in item.children" :key="child.path">
            <router-link :to="child.path">
              <el-menu-item :index="child.id">{{ child.name }}</el-menu-item>
            </router-link>
          </div>
        </el-menu-item-group>
      </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  name: 'Sider',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
