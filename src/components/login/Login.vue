<!-- 登录页 -->
<template>
  <div class="login">
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="login-container">
          <el-form status-icon ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name" placeholder="请输入用户名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passwd">
              <el-input v-model="form.passwd" placeholder="请输入密码" show-password autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button :loading="loading" type="primary" @click="onSubmit('form')">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import { getKey } from '@/api/user'
import { encryptData } from '@/utils'

export default {
  name: 'Login',
  data () {
    // 校验用户名规则
    const validateName = (rule, value, callback) => {
      if (value === '') {
        // 用户名为空
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    // 校验密码规则
    const validatePasswd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (value.length < 6) {
          callback(new Error('密码长度不能小于6位'))
        } else {
          callback()
        }
      }
    }
    return {
      form: {
        name: '',
        passwd: ''
      },
      rules: {
        name: [
          { required: true, trigger: 'blur', validator: validateName }
        ],
        passwd: [
          { required: true, trigger: 'blur', validator: validatePasswd }
        ]
      },
      loading: false,
      public_key: null
    }
  },
  mounted () {
    this._getKey()
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        // 校验用户名密码规则通过后发送登陆请求
        if (valid) {
          // 按钮显示加载动画
          this.loading = true
          // console.log(encryptData(this.form.name, this.public_key))
          // 用户名密码加密
          this.$store.dispatch('login', {name: encryptData(this.form.name, this.public_key), passwd: encryptData(this.form.passwd, this.public_key)}).then((res) => {
            this.loading = false
            if (res.status === 0) {
              this.$store.dispatch('menu').then(_ => {})
              // 修改url
              this.$router.push({
                path: '/'
              })
            }
            this.notify(res)
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    _getKey () {
      getKey().then((res) => {
        this.public_key = res.data.data.public_key
      }).catch((err) => {
        console.log(err)
      })
    },
    notify (data) {
      if (data.status === 0) {
        this.$message({
          message: data.msg,
          type: 'success'
        })
      } else {
        this.$message.error(data.msg)
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  min-height: 100%;
  position: relative;
}
.el-main {
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 50vh;
  height: 30vh;
  padding: 30px;
  border: 1px solid;
  border-radius: 5px;
}
.el-button {
  width: 30vh;
}
</style>
