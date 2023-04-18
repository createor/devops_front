<!-- 通过邮件告警 -->
<template>
  <el-collapse-item :title="title" :name="title">
    <el-form ref="email" :model="email" @submit.native.prevent>
      <el-form-item label="接收方">
        <el-tag
          :key="addr"
          v-for="addr in emailList"
          closable
          :disable-transitions="false"
          @close="handleClose(addr)"
        >
        {{addr}}
        </el-tag>
        <el-input
          class="input-new-addr"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveAddr"
          size="small"
          @keyup.enter.native="handleInput"
          @blur="handleInput"
        >
        </el-input>
        <el-button v-else class="button-new-addr" size="small" @click="showInput">新增邮箱</el-button>
      </el-form-item>
      <el-form-item>
        <alarm-item :checkList="checkList" />
      </el-form-item>
      <el-form-item>
        <el-button>{{isUse === true ? '停止' : '启用'}}</el-button>
        <el-button>应用修改</el-button>
      </el-form-item>
    </el-form>
  </el-collapse-item>
</template>

<script>
import AlarmItem from './AlarmItem'
export default {
  name: 'AlarmByEmail',
  components: {
    AlarmItem
  },
  data () {
    return {
      title: '邮件告警',
      emailList: [],
      inputVisible: false,
      inputValue: '',
      isUse: false,
      checkList: ['主机离线']
    }
  },
  methods: {
    handleClose (addr) {
      this.emailList.splice(this.emailList.indexOf(addr), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        // input输入框聚焦
        this.$refs.saveAddr.$refs.input.focus()
      })
    },
    handleInput () {
      let value = this.inputValue
      if (value) {
        // 正则匹配邮箱地址
        let regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        if (regEmail.test(value)) {
          this.emailList.push(value)
        } else {
          // 匹配不通过
        }
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-addr {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-addr {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
