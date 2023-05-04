<!-- 个人中心 -->
<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="头像">
        <!-- 上传个人头像 -->
        <el-upload
          class="avatar-uploader"
          action=""
          :limit="1"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="性别">
        <!-- 性别 -->
        <template>
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <!-- 邮箱地址 -->
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <!-- 联系方式 -->
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <!-- 地区选择 -->
        <el-cascader
          size="large"
          :options="options"
          v-model="selectOptions"
          @change="handleChange"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="modifyInfo">应用修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { provinceAndCityData, codeToText } from 'element-china-area-data'

export default {
  name: 'ShowPersonal',
  data () {
    return {
      imageUrl: '',
      options: provinceAndCityData,
      selectOptions: []
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jepg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像的图片只能是JPG格式')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过2MB')
      }
      return isJPG && isLt2M
    },
    handleChange (value) {
      // 打印编码
      console.log(value)
      // 编码转汉字
      let area = ''
      for (let i = 0; i < this.selectOptions.length; i++) {
        area += codeToText[this.selectOptions[i]]
      }
      console.log(area)
    },
    modifyInfo () {
      console.log('修改成功')
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-input {
  width: 250px;
}
</style>
