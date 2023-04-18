<template>
  <div>
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: }">{{  }}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <Personal />
  </div>
</template>

<script>
import Personal from './Personal'

export default {
  name: 'Tabs',
  components: {
    Personal
  }
}
</script>

<style scoped>

</style>
