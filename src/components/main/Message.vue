<!-- 信息 -->
<template>
  <div>
    <el-divider></el-divider>
    <div class="msg">
      <span class="msg-title">{{ title }}</span>
      <p class="msg-content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.msg {
  padding-left: 5px;
}
.msg-title {
  display: block;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.msg-content {
  width: 100%;
  height: auto;
  font-size: 14px;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
