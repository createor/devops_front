<template>
    <!-- 过渡动画 -->
    <transition name="fade" mode="out-in">
      <!-- 组件缓存 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped>

</style>
