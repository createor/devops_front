<!-- 设置文章读写权限及可见权限 -->
<!-- 查看文章 -->
<template>
  <div>
    <div>
      <!-- 只有作者授权编辑权限才可编辑 -->
      <el-button v-if="edit" type="text" @click="editPage">编辑</el-button>
      <!-- 只有作者本人才可删除或者修改授权 -->
      <el-button v-if="dele" type="text">删除</el-button>
      <el-button v-if="grant" type="text">授权</el-button>
    </div>
    <div v-show="isEdit">
      <edit-article :content="page" />
    </div>
    <div v-show="!isEdit">
      {{ page }}
    </div>
  </div>
</template>

<script>
import EditArticle from './EditArticle'
export default {
  name: 'ShowArticle',
  components: {
    EditArticle
  },
  data () {
    return {
      edit: true,
      isEdit: false,
      dele: false,
      grant: false,
      page: '我是测试'
    }
  },
  methods: {
    editPage () {
      if (this.edit) {
        this.isEdit = true
      }
    }
  }
}
</script>

<style scoped>

</style>
