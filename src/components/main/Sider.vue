<template>
  <div v-if="item.children">
    <el-submenu  :index="item.id">
      <template slot="title">
      <i :class="item.icon ? item.icon : 'el-icon-menu'"></i>
      {{ item.name }}
      </template>
      <el-menu-item-group>
        <div v-for="child in item.children" :key="child.id">
          <router-link :to="{ path: child.path }">
            <el-menu-item :index="child.id">
            <i :class="child.icon ? child.icon : 'el-icon-menu'"></i>
            {{ child.name }}
            </el-menu-item>
          </router-link>
        </div>
      </el-menu-item-group>
    </el-submenu>
  </div>
  <div v-else>
    <router-link :to="{ path: item.path }">
      <el-menu-item  :index="item.id">
        <i :class="item.icon ? item.icon : 'el-icon-menu'"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sider',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
