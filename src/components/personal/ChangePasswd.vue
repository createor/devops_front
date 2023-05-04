<!-- 用户修改密码 -->
<template>
  <el-form status-icon ref="PasswdForm" :model="PasswdForm" :rules="rules" label-width="110px">
    <el-form-item label="输入旧密码" prop="oldPasswd">
      <el-input v-model="PasswdForm.oldPasswd" placeholder="输入旧密码" show-password autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="输入新密码" prop="newPasswd">
      <el-input v-model="PasswdForm.newPasswd" placeholder="输入新密码" show-password autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认新密码" prop="confirmPasswd">
      <el-input v-model="PasswdForm.confirmPasswd" placeholder="确认新密码" show-password autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="confirm('PasswdForm')">确认修改</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'ChangePasswd',
  data () {
    const validateOld = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'))
      } else {
        callback()
      }
    }
    const validateNew = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (value === this.PasswdForm.oldPasswd) {
          callback(new Error('新密码不能与旧密码一致'))
        } else {
          callback()
        }
      }
    }
    const validateConfirm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认新密码'))
      } else {
        if (value !== this.PasswdForm.newPasswd) {
          callback(new Error('请与新密码保持一致'))
        } else {
          callback()
        }
      }
    }
    return {
      PasswdForm: {
        oldPasswd: '',
        newPasswd: '',
        confirmPasswd: ''
      },
      rules: {
        oldPasswd: [
          { required: true, trigger: 'blur', validator: validateOld }
        ],
        newPasswd: [
          { required: true, trigger: 'blur', validator: validateNew }
        ],
        confirmPasswd: [
          { required: true, trigger: 'blur', validator: validateConfirm }
        ]
      }
    }
  },
  methods: {
    confirm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.loading = true
          // store获取用户信息
        } else {
          return false
        }
      })
    },
    cancel () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 250px;
}
</style>
