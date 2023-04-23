<template>
  <div class="tabs-wrapper">
    <div class="tabs-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="item.children" :to="{ path: item.children.path }">{{ item.children.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabs-personal">
      <div class="tabs-item-info">
        <Info />
      </div>
      <div class="tabs-item-personal">
        <Personal />
      </div>
    </div>
  </div>
</template>

<script>
import Personal from './Personal'
import Info from './Info'

export default {
  name: 'Tabs',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    Personal,
    Info
  }
}
</script>

<style scoped>
.tabs-wrapper {
  width: 100%;
  height: 100%;
}
.tabs-breadcrumb {
  float: left;
}
.tabs-personal {
  float: right;
}
.tabs-item-info {
  margin: 0 20px;
  float: left;
}
.tabs-item-personal {
  float: right;
}
.el-breadcrumb {
  line-height: 60px;
}
</style>
