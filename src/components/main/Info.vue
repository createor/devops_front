<!-- 站内信息提醒 -->
<template>
  <div class="tab-info">
    <template>
      <el-badge :is-dot="total">
        <el-button icon="el-icon-message-solid" type="primary" @click="drawer = true"></el-button>
      </el-badge>
    </template>
    <template>
      <el-drawer
        title="信息"
        :visible.sync="drawer"
        :direction="direction"
      >
        <!-- 主要信息 -->
        <Message v-for="(msg,index) in msgList" :key="index" :title="msg.title" :content="msg.content" />
      </el-drawer>
    </template>
  </div>
</template>

<script>
import Message from './Message'
export default {
  name: 'Info',
  components: {
    Message
  },
  data () {
    return {
      total: true,
      drawer: false,
      direction: 'rtl',
      msgList: [
        {
          title: '测试1',
          content: '测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容测试1的内容'
        },
        {
          title: '测试2',
          content: '测试2的内容'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tab-info {
  display: inline-block;
}
</style>
